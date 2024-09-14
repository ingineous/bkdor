import dotenv from "dotenv"
dotenv.config()

import express from "express"
import {createServer} from "http"
import {Server} from "socket.io"
import cors from "cors"
import {db} from "./firebase.js";


const app = express()
app.use(cors())
app.use(express.json())
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

const reliableSend = (data) => {
    const packedData = JSON.stringify(data)
    io.sockets.emit(packedData)
}

const reliableReceive = (data) => {
  return JSON.parse(data[0])
}

app.get("/", (req, res) => {
    res.send("sup bitch")
})

app.post("/command", (req, res)=> {
    const {command} = req.body
    reliableSend(command)

    res.status(200).json(command)
})


io.on('connection', function(socket) {
   console.log('A user connected');
   db.collection("status").doc("status").update({
       connected: true
   })

   socket.onAny(async (event, ...args) => {
       if (event !== "message") return
        try {
            const data = await db.collection("logs").add({
                output: args,
                timestamp: new Date().getTime()
            })


            console.log("added to db.")
        }catch (e) {
            console.log("error while adding to db", e)
        }
   })
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
    const da = db.collection("status").doc("status").update({
        connected: false
    })
      console.log('A user disconnected');
   });
});

const PORT = process.env.PORT || 8080

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
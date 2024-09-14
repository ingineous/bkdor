# BKDOR

## About

It allows the user to remotely execute shell commands on the computer where the client is running. The client connects to the server using socketio. 

The user sends commands to the server using the website. The server in turn sends the command to the client on host computer using socketio. The output returned by the client is added to firestore database by the server which the user can see on the website.

### How to use the website

Run the client on host computer using `python main.py`

Visit https://bkdor.vercel.app/

Type a shell command which can be executed on the host computer. Unix commands if the host is macos or gnu/linux. Windows commands if the host is windows.

For example type `whoami` in the text box on website then press enter

The output will be displayed below the text box.

When the client is connected to the server. It shows connected on the top right of the website.

The possibility is limitless, you can even remotely shutdown the host, open p*rn site remotely all using the website.

### What is the purpose?
Basically it was supposed to be a malware which allows remote access. If you can make the client run on startup on the host computer. So basically when the computer is on, it will connect to the server and will allow complete remote access to the malicious actor. It is similar to ssh but much less functional.

Anyways I never bothered to compile the client into an executable which will run on startup. Also it can't run `sudo` commands. So macos and gnu/linux systems are quite safe from it.

### NOTE
When trying to use the website or running the client open this https://bkdor.onrender.com/ site first in your browser. This is the server. As I am using the free tier of render.com It shuts down the server on period of inactivity so if you will just try to directly use the website or run the client. It will not connect as server will take some time to restart and the request will timeout.




## Getting Started

Clone the repo

`git clone https://github.com/ingineous/bkdor.git`

`cd client`

Install dependencies

`pip install python-socketio`

`pip install requests`

Run the client

`python main.py`

Now go to https://bkdor.vercel.app/ and run shell commands.

### Local Hosting

You can also locally host the server and website. Can also change the firebase config to use your own firebase app. Just check server/app.js server/firebase.js for it.

Server requires nodejs verison v16.19.1

Rest I am too lazy to type right now. It is simple just install npm packages and run how you run a nodejs app.

Same with website just install npm packages and run `npm run dev`. It is built in nextjs so check its docs.

Change the server url in website/src/app/page.js to the url you are locally running the server at.
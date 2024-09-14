"use client";

import styles from './page.module.css'
import { useCollection } from 'react-firebase-hooks/firestore';
import { database } from '@/firebase/firebae';
import React, {useEffect, useState} from "react"
import { collection } from 'firebase/firestore';
import axios from 'axios';


export default function Home() {

  const [connected, loading, error] = useCollection(
    collection(database, 'status')
  );

    const [command, setCommand] = useState("")

  const [disabled, setDisabled] = useState(true)

  const [logs, _loading, _error] = useCollection(
    collection(database, "logs")
  )

    useEffect(() => {
      if (connected?.docs[0].data().connected) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    }, [connected])

    const submit = async (e) => {
      if (e.key === 'Enter') {
        try {
          await axios.post("https://localhost:8080/command", {
            command: command
          })
        setCommand("")
        }
        catch(error) {
          console.log("error axios", error)
        }
      }
    }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.connected}>
        <p>
          {connected?.docs[0].data().connected ? "connected" : "not connected"}
        </p>
        </div>

        <input onKeyDown={submit} value={command} className={styles.beef} onChange={(event) => setCommand(event.target.value)} type="text" name="name" placeholder='command' disabled={disabled} />

        <div className={styles.logContainer}>
        {
          logs?.docs?.sort((obj1, obj2) => {
            return obj1.data().timestamp - obj2.data().timestamp
          }).reverse().map((data, id) => {
            return <p key={id} className={styles.log}>
            {data?.data().output[0]}
          </p>
          })
        }
        </div>
        

      </div>
    </main>
  )
}

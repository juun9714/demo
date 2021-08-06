/* eslint-disable-next-line*/
import './App.css';
import React, { useEffect, useState } from 'react'
import _READ from './components/READ';
import AUTH_READ from './components/AUTH_READ';
import SRCH_READ from './components/SRCH_READ';
import HISTORY_READ from './components/HISTORY_READ';

function App() {

  let [mode, modeChange] = useState("")

  let [res, resChange] = useState([])
  let [req, reqChange] = useState('111')
  let [nothing, notChange] = useState('')

  var ws = new WebSocket("ws://localhost:3001")

  useEffect(() => {
    console.log("useEffect of APP.js")
  }, [])

  ws.addEventListener('open',(e)=>{
    console.log("connection established")
  })

  ws.addEventListener('close',(e)=>{
    console.log("connection closed")
  })

  ws.onmessage = (msg) => {
    console.log("onmessage : ", msg.data)
    var tmp = [...res]
    tmp.push(msg.data)
    resChange(tmp)
  }

  ws.onclose = () => {
    console.log("connection end")
  }

  ws.addEventListener('error', function (e) {
    console.log('WebSocket error: ', e);
  });

  function retMode() {
    var _content = null
    if (mode === "READ") {
      _content = <_READ onSubmit={function (data) {
        console.log("received : ", data)
        reqChange(data)
      }}></_READ>
      return _content
    } else if (mode === "AUTH_READ") {
      _content = <AUTH_READ onSubmit={function (data) {
        console.log("received : ", data)
        reqChange(data)

      }}></AUTH_READ>
      return _content
    } else if (mode === "SRCH_READ") {
      _content = <SRCH_READ onSubmit={function (data) {
        console.log("received : ", data)
        reqChange(data)

        // console.log(JSON.stringify(data))
        // console.log(JSON.parse(JSON.stringify(data)))
        //stringify : object to JSON string : websocket receives JSON string and convert it into python object
      }}></SRCH_READ>
      return _content
    } else if (mode === "HISTORY_READ") {
      _content = <HISTORY_READ onSubmit={function (data) {
        console.log("received : ", data)
        reqChange(data)

      }}></HISTORY_READ>
      return _content
    } else {
      return null
    }
  }



  return (
    <div className="App">
      <p><button onClick={function () {
        if (mode !== "READ") {
          modeChange("READ")
        } else {
          modeChange("")
        }
      }}>READ</button></p>

      <p><button onClick={function () {
        if (mode !== "AUTH_READ") {
          modeChange("AUTH_READ")
        } else {
          modeChange("")
        }
      }}>AUTH_READ</button></p>

      <p><button onClick={function () {
        if (mode !== "SRCH_READ") {
          modeChange("SRCH_READ")
        } else {
          modeChange("")
        }

      }}>SRCH_READ</button></p>

      <p><button onClick={function () {
        if (mode !== "HISTORY_READ") {
          modeChange("HISTORY_READ")
        } else {
          modeChange("")
        }

      }}>HISTORY_READ</button></p>

      {
        mode === ""
          ? null
          : <div className="retMode">{retMode()}</div>
      }


      < button onClick={(e) => {
        e.preventDefault()
        console.log("CLIENT : make request => ", req)
        ws.send(JSON.stringify(req))
      }}>Websocket Request</button >

      <div className="response">
        RESPONSE
        <hr></hr>
        {res.map((one, idx) => {
          return <div key={idx}>{one}</div>
        })}
      </div>
    </div>
  );
}

export default App;

/* eslint-disable*/
import React, { useEffect, useState } from 'react'
import _READ from './READ';
import AUTH_READ from './AUTH_READ';
import SRCH_READ from './SRCH_READ';
import HISTORY_READ from './HISTORY_READ';
import DISCOVERY_READ from './DISCOVERY_READ';
import UPDATE from './UPDATE';
import AUTH_UPDATE from './AUTH_UPDATE';
import SUBSCRIBE from './SUBSCRIBE';
import AUTH_SUBSCRIBE from './AUTH_SUBSCRIBE';
import UNSUBSCRIBE from './UNSUBSCRIBE';

let ws = new WebSocket("ws://localhost:3002")

function WS() {

    let [mode, modeChange] = useState("")
    let [res, resChange] = useState([])
    let [req, reqChange] = useState('111')
  
  
    useEffect(() => {
      ws = new WebSocket("ws://localhost:3002")
      console.log("useEffect of APP.js")
    }, [])
  
    useEffect(() => {
      // console.log("MODE CHANGED TO => ",mode)
      // mode가 바뀔 때 실행할 것을 지정 === mode가 바뀔 때는 재 렌더링이 안되도록 함 ! === mode가 바뀔 때는 
    }, [mode])
  
    useEffect(() => {
      // console.log("RES CHANGED TO => ",res)
    }, [res])
  
  
    ws.onopen=()=>[
      console.log("connection established")
    ]
  
    ws.onclose=(e)=>{
      console.log(e)
      console.log("connection closed")
    }
  
    ws.onmessage=(msg)=>{
      console.log("onmessage : ", msg.data)
      var tmp = [...res]
      tmp.push(msg.data)
      resChange(tmp)
    }
  
    ws.onerror=(error)=>{
      console.log("Websocket error : ",error)
    }
  
    function retMode() {
      var _content = null
      if (mode === "READ") {
        _content = <_READ onSubmit={function (data) {
          console.log("received by submit btn: ", data)
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
          console.log("filter",data.filter)
          console.log("filter",data.filter["op-value"])
          reqChange(data)
        }}></SRCH_READ>
        return _content
      } else if (mode === "HISTORY_READ") {
        _content = <HISTORY_READ onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></HISTORY_READ>
        return _content
      } else if (mode === "DISCOVERY_READ") {
        _content = <DISCOVERY_READ onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></DISCOVERY_READ>
        return _content
      } else if (mode === "UPDATE") {
        _content = <UPDATE onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></UPDATE>
        return _content
      } else if (mode === "AUTH_UPDATE") {
        _content = <AUTH_UPDATE onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></AUTH_UPDATE>
        return _content
      } else if (mode === "SUBSCRIBE") {
        _content = <SUBSCRIBE onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></SUBSCRIBE>
        return _content
      } else if (mode === "AUTH_SUBSCRIBE") {
        _content = <AUTH_SUBSCRIBE onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></AUTH_SUBSCRIBE>
        return _content
      } else if (mode === "UNSUBSCRIBE") {
        _content = <UNSUBSCRIBE onSubmit={function (data) {
          console.log("received : ", data)
          reqChange(data)
        }}></UNSUBSCRIBE>
        return _content
      } else {
        return null
      }
    }
  
  
    return (
      <div>
        <h3>WEB SOCKET</h3>
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "READ") {
            modeChange("READ")
          } else {
            modeChange("")
          }
        }}>READ</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "AUTH_READ") {
            modeChange("AUTH_READ")
          } else {
            modeChange("")
          }
        }}>AUTH_READ</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "SRCH_READ") {
            modeChange("SRCH_READ")
          } else {
            modeChange("")
          }
  
        }}>SRCH_READ</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "HISTORY_READ") {
            modeChange("HISTORY_READ")
          } else {
            modeChange("")
          }
  
        }}>HISTORY_READ</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "DISCOVERY_READ") {
            modeChange("DISCOVERY_READ")
          } else {
            modeChange("")
          }
        }}>DISCOVERY_READ</button></p>
  
        <hr></hr>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "UPDATE") {
            modeChange("UPDATE")
          } else {
            modeChange("")
          }
        }}>UPDATE</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "AUTH_UPDATE") {
            modeChange("AUTH_UPDATE")
          } else {
            modeChange("")
          }
        }}>AUTH_UPDATE</button></p>
  
        <hr></hr>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "SUBSCRIBE") {
            modeChange("SUBSCRIBE")
          } else {
            modeChange("")
          }
        }}>SUBSCRIBE</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "AUTH_SUBSCRIBE") {
            modeChange("AUTH_SUBSCRIBE")
          } else {
            modeChange("")
          }
        }}>AUTH_SUBSCRIBE</button></p>
  
        <p><button onClick={function (e) {
          e.preventDefault()
          if (mode !== "UNSUBSCRIBE") {
            modeChange("UNSUBSCRIBE")
          } else {
            modeChange("")
          }
        }}>UNSUBSCRIBE</button></p>
        <hr></hr>
  
  
        {
          mode === ""
            ? null
            : <div className="retMode">{retMode()}</div>
        }
  
        <div className="REQ_CLS">
          <p>
            < button onClick={(e) => {
              e.preventDefault()
              console.log("CLIENT : make request => ", req)
              ws.send(JSON.stringify(req))
            }}>Websocket Request</button >
          </p>
  
          <p>
            < button onClick={(e) => {
              e.preventDefault()
              ws.close()
              console.log("Connection break")
            }}>WebSocket Close</button >
          </p>
        </div>
  
        <div className="response">
          RESPONSE
          <hr></hr>
          {res.map((one, idx) => {
            if(one.includes("error")){
              return <p style={{backgroundColor: "red"}} key={idx}><span>{one}</span></p>
            }else{
              return <p style={{backgroundColor: "lightgreen"}} key={idx}><span>{one}</span></p>
            }
          })}
        </div>
      </div>
    );
  }

export default WS
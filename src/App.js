/* eslint-disable*/
import './App.css';
import React, { useEffect, useState } from 'react'
import WS from './components/WS';
import REST from './components/REST';

// TODO
// DISCOVERY_READ => dynamic

function App() {

  let [mode, modeChange] = useState("")

  return (
    <div className="App">
      <div className="btns">
        <p>
          <button className="sbtn" onClick={function (e) {
            e.preventDefault()
            if (mode !== "websocket") {
              modeChange("websocket")
            } else if (mode === "websocket") {
              modeChange("")
            }
          }}>WEB SOCKET</button>
        </p>

        <p>
          <button className="rbtn" onClick={function (e) {
            e.preventDefault()
            if (mode !== "restapi") {
              modeChange("restapi")
            } else if (mode === "restapi") {
              modeChange("")
            }
          }}>rest API</button>
        </p>
      </div>
      <hr></hr>

      {
        mode === "websocket"
          ? <WS></WS>
          : null
      }

      {
        mode === "restapi"
          ? <REST></REST>
          : null
      }

      {
        mode === ""
          ? <div>Select the way you request</div>
          : null
      }
    </div>
  )
}

export default App;

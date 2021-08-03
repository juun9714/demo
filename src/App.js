import './App.css';
import React, { useState, useEffect } from 'react'
import _READ from './components/READ';
import AUTH_READ from './components/AUTH_READ';
import SRCH_READ from './components/SRCH_READ';

function App() {
  let [readBtn, rChange] = useState(false)
  let [readData,rDChange] = useState({})
  let [authreadBtn, arChange] = useState(false)
  let [srcheadBtn, srChange] = useState(false)

  let [mode, modeChange]=useState("")

  function retMode(){
    var _content=null
    if(mode==="READ"){
      _content=<_READ onSubmit={function(data){
        console.log("received : ",data)
      }}></_READ>
      return _content
    }else if(mode==="AUTH_READ"){
      _content=<AUTH_READ></AUTH_READ>
      return _content
    }else if(mode==="SRCH_READ"){
      _content=<SRCH_READ></SRCH_READ>
      return _content
    }else{
      return null
    }
  }

  function getData(){

  }


  return (
    <div className="App">
      <p><button onClick={function () {
        if (mode != "READ") {
          modeChange("READ")
        } else {
          modeChange("")
        }
      }}>READ</button></p>

      <p><button onClick={function () {
        if (mode != "AUTH_READ") {
          modeChange("AUTH_READ")
        } else {
          modeChange("")
        }
      }}>AUTH_READ</button></p>

      <p><button onClick={function () {
        if (mode != "SRCH_READ") {
          modeChange("SRCH_READ")
        } else {
          modeChange("")
        }


      }}>SRCH_READ</button></p>

      <div className="retMode">{retMode()}</div>

    </div>
  );
}

export default App;

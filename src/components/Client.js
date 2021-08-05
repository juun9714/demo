import React, { useState, useEffect } from 'react'

function Client(props) {

    let [res, resChange] = useState([])
    let [req, reqChange] = useState('')
    let [reqId, reqIdChange] = useState(Math.floor(Math.random() * 100))
    var ws=new WebSocket("ws://localhost:8080")

    return (
        <div>
            < button className="btn btn-primary" onClick={() => {
                ws.onopen = function () {
                    console.log("connected")
                }
            }}>Websocket Connect</button >



            < button className="btn btn-primary" onClick={() => {

                ws.send(req)
                ws.onmessage = function (msg) {
                    console.log(msg.data)
                    var tmp = [...res]
                    tmp.push(msg.data)
                    resChange(tmp)
                }
            }}>Websocket Request</button >


            {
                res.map((response, idx) => {
                    return (
                        <div key={idx}>{response}</div>
                    )
                })
            }
        </div>
    )
}

export default Client
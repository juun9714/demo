import React, { useState, useEffect } from 'react'
import Client from './Client';

function AUTH_UPDATE(props) {
    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_value, valueChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', value: '', requestId: '' })
    var _temp

    useEffect(() => {
        console.log("useEffect of READ")
    }, [data])


    return (
        <div className="read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>
                action  :
                <input name="action" onChange={function (e) {
                    e.preventDefault()
                    actionChange(e.target.value)
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    pathChange(e.target.value)
                }}></input>
                <p></p>

                value  :
                <input name="value" onChange={function (e) {
                    e.preventDefault()
                    valueChange(e.target.value)
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    reqIdChange(e.target.value)
                }}></input>

                <p><button value="Save" onClick={function (e) {
                    e.preventDefault()
                    _temp = { ...data }
                    _temp.action = _action
                    _temp.path = _path
                    _temp.value = _value
                    _temp.requestId = _reqId
                    dataChange(_temp)
                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>

            </form>
        </div>
    )
}


export default AUTH_UPDATE
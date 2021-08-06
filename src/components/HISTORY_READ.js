import React, { useState } from 'react'

function HISTORY_READ(props) {

    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_opType, oTChange] = useState('')
    let [_opValue, oVChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": '' }, requestId: '' })
    var _temp
    return (
        <div className="auth_read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>

                action  :
                <input className="action" onChange={function (e) {
                    actionChange(e.target.value)
                }}></input>
                <p></p>

                path  :
                <input className="path" onChange={function (e) {
                    pathChange(e.target.value)
                }}></input>
                <p></p>

                filter_(op-type)  :
                <input className="op-type" onChange={function (e) {
                    oTChange(e.target.value)
                }}></input>
                <p></p>

                filter_(op-value)  :
                <input className="op-value" onChange={function (e) {
                    oVChange(e.target.value)
                }}></input>
                <p></p>

                requestId  :
                <input className="reqId" onChange={function (e) {
                    reqIdChange(e.target.value)
                }}></input>

                <p><button value="Save" onClick={function (e) {
                    e.preventDefault()
                    _temp = { ...data }
                    _temp.action = _action
                    _temp.path = _path
                    _temp.filter["op-type"] = _opType
                    _temp.filter["op-value"] = _opValue
                    _temp.requestId = _reqId
                    dataChange(_temp)
                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default HISTORY_READ
import React, { useState } from 'react'

function _READ(props) {
    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', reqId: '' })
    var _temp
    return (
        <div className="read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>
                action  :
                <input name="action" onChange={function (e) {
                    actionChange(e.target.value)
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    pathChange(e.target.value)
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    reqIdChange(e.target.value)
                }}></input>

                <p><button value="Save" onClick={function (e) {
                    e.preventDefault()
                    _temp = { ...data }
                    _temp.action = _action
                    _temp.path = _path
                    _temp.reqId = _reqId
                    dataChange(_temp)
                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default _READ
import React, { useState } from 'react'

function AUTH_READ(props) {
    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_auth, authChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', authorization: '', requestId: '' })
    var _temp

    return (
        <div className="auth_read" >

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

                authorization  :
                <input className="path" onChange={function (e) {
                    authChange(e.target.value)
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
                    _temp.authorization = _auth
                    _temp.requestId = _reqId
                    dataChange(_temp)
                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}

export default AUTH_READ
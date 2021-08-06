import React, { useState, useEffect } from 'react'
import Client from './Client';

function _READ(props) {
    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', requestId: '' })
    let _temp

    useEffect(() => {
        console.log("useEffect of READ")
        console.log(_action)
        console.log(data)
        console.log("useEffect of READ")
    }, [data, _action])


    return (
        <div className="read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>
                action  :
                <input name="action" onChange={function (e) {
                    e.preventDefault()
                    //actionChange(e.target.value)
                    //_temp = data
                    //_temp.action = _action
                    let temp;
                    temp = data;
                    data.action = e.target.value
                    dataChange(temp)
                    console.log(data)
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    pathChange(e.target.value)
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
                    dataChange(_temp)
                    console.log(_temp)
                    _temp.path = _path
                    dataChange(_temp)
                    console.log(_temp)

                    _temp.requestId = _reqId
                    dataChange(_temp)
                    console.log(_temp)

                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default _READ
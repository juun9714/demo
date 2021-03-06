/* eslint-disable*/
import React, { useState } from 'react'

function HISTORY_READ(props) {

    let [data, dataChange] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": '' }, authorization: '', requestId: '' })
    // var data={ action: '', path: '', filter: { "op-type": '', "op-value": '' }, requestId: '' }
    return (
        <div className="history_read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>

                action  :
                <input className="action" onChange={function (e) {
                    e.preventDefault()
                    data.action = e.target.value
                }}></input>
                <p></p>

                path  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    data.path = e.target.value
                }}></input>
                <p></p>

                filter_(op-type)  :
                <input className="op-type" onChange={function (e) {
                    e.preventDefault()
                    data.filter['op-type'] = e.target.value
                }}></input>
                <p></p>

                filter_(op-value)  :
                <input className="op-value" onChange={function (e) {
                    e.preventDefault()
                    data.filter['op-value'] = e.target.value
                }}></input>
                <p></p>

                authorization  :
                <input className="auth" onChange={function (e) {
                    e.preventDefault()
                    data.authorization = e.target.value
                }}></input>
                <p></p>

                requestId  :
                <input className="reqId" onChange={function (e) {
                    e.preventDefault()
                    data.requestId = e.target.value
                }}></input>

                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default HISTORY_READ
/* eslint-disable*/
import React, { useState } from 'react'

function DISCOVERY_READ(props) {

    let [data, dataChange] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": '' }, authorization: '', requestId: '' })
    // var data = { action: '', path: '', filter: { "op-type": '', "op-value": '' }, requestId: '' }
    let [data2, data2Change] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": '', "op-extra": '' }, authorization: '', requestId: '' })
    let [mode, modeChange] = useState("")
    return (
        <div className="discovery_read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                if (mode === "dynamic") {
                    props.onSubmit(data2)
                } else {
                    props.onSubmit(data)
                }
            }}>

                action  :
                <input className="action" onChange={function (e) {
                    e.preventDefault()
                    // data.action = e.target.value
                    Object.assign(data, { action: e.target.value })
                }}></input>
                <p></p>

                path  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    // data.path = e.target.value
                    Object.assign(data, { path: e.target.value })
                }}></input>
                <p></p>

                filter_(op-type)  :
                <input className="op-type" onChange={function (e) {
                    e.preventDefault()
                    // data.filter['op-type'] = e.target.value
                    Object.assign(data.filter, { "op-type": e.target.value })
                }}></input>
                <p></p>

                filter_(op-value)  :
                <input className="op-value" onChange={function (e) {
                    e.preventDefault()
                    // data.filter['op-value'] = e.target.value
                    Object.assign(data.filter, { "op-value": e.target.value })
                    if (e.target.value === "dynamic") {
                        modeChange("dynamic")
                    } else {
                        modeChange("")
                    }
                }}></input>
                <p></p>

                {
                    mode === "dynamic"
                        ?

                        <div>
                            filter_(op-extra) :
                            <input className="op-extra" onChange={function (e) {
                                Object.assign(data2.filter, { "op-extra": e.target.value })
                                Object.assign(data2, { action: data.action })
                                Object.assign(data2, { path: data.path })
                                Object.assign(data2.filter, { "op-type": data.filter["op-type"] })
                                Object.assign(data2.filter, { "op-value": data.filter["op-value"] })
                            }}></input>
                            <p></p>
                        </div>
                        : null

                }

                {/* filter_(op-extra)  :
                <input className="op-extra" onChange={function (e) {
                    oXChange(e.target.value)
                }}></input>
                <p></p> */}

                authorization  :
                <input className="auth" onChange={function (e) {
                    e.preventDefault()
                    data.authorization = e.target.value
                    data2.authorization = e.target.value
                    if (mode === "dynamic") {
                        data2.authorization = e.target.value
                    } else {
                        data.authorization = e.target.value
                    }
                }}></input>
                <p></p>

                requestId  :
                <input className="reqId" onChange={function (e) {
                    e.preventDefault()
                    // data.requestId = e.target.value
                    if (mode === "dynamic") {
                        Object.assign(data2, { requestId: e.target.value })
                    } else {
                        Object.assign(data, { requestId: e.target.value })
                    }
                }}></input>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default DISCOVERY_READ
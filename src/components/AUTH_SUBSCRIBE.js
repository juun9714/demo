import React, { useState, useEffect } from 'react'

function AUTH_SUBSCRIBE(props) {
    // let [data, dataChange] = useState({ action: '', path: '', value: '', requestId: '' })
    var [_action,chAction]=useState("")
    var [_path,chPath]=useState("")
    var [_opType,chType]=useState("")
    var [_opValue,chValue]=useState("")
    var time_data = { action: '', path: '', filter: { "op-type": '', "op-value": 'time-based', "op-extra": { "period": "" } }, authorization: '', requestId: "" }
    var range_data = { action: '', path: '', filter: { "op-type": '', "op-value": 'range', "op-extra": { "logic-op": "", "boundary": "" } }, authorization: '', requestId: "" }
    var change_data = { action: '', path: '', filter: { "op-type": '', "op-value": 'change', "op-extra": { "logic-op": "", "diff": "" } }, authorization: '', requestId: "" }
    var curve_data = { action: '', path: '', filter: { "op-type": '', "op-value": 'curve-logging', "op-extra": {} }, authorization: '', requestId: "" }
    var holder1 = ""
    var holder2 = ""
    var [h, hChange] = useState({ 'one': '', 'two': '' })
    var [mode, modeChange] = useState("")

    return (
        <div className="subscribe">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                if (mode === "time-based") {
                    props.onSubmit(time_data)
                } else if (mode === "range") {
                    props.onSubmit(range_data)
                } else if (mode === "change") {
                    props.onSubmit(change_data)
                } else if (mode === "curve") {
                    props.onSubmit(curve_data)
                }
            }}>
                action  :
                <input name="action" onChange={function (e) {
                    e.preventDefault()
                    chAction(e.target.value)
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    chPath(e.target.value)
                }}></input>
                <p></p>

                filter_(op-type)  :
                <input className="op-type" onChange={function (e) {
                    e.preventDefault()
                    chType(e.target.value)
                }}></input>
                <p></p>

                filter_(op-value)  :
                <input className="op-value" onChange={function (e) {
                    e.preventDefault()
                    chValue(e.target.value)

                    if (e.target.value === "time-based") {
                        holder1 = "period"
                        holder2 = "**DON'T TYPE HERE**"
                        modeChange("time-based")
                        hChange({ 'one': holder1, 'two': holder2 })
                    } else if (e.target.value === "range") {
                        holder1 = "logic-op"
                        holder2 = "boundary"
                        modeChange("range")
                        hChange({ 'one': holder1, 'two': holder2 })
                    } else if (e.target.value === "change") {
                        holder1 = "logic-op"
                        holder2 = "diff"
                        modeChange("change")
                        hChange({ 'one': holder1, 'two': holder2 })
                    } else if (e.target.value === "curve-logging") {
                        holder1 = "max-err"
                        holder2 = "buf-size"
                        modeChange("curve")
                        hChange({ 'one': holder1, 'two': holder2 })
                    } else {
                        hChange({ 'one': '', 'two': '' })
                        modeChange("")
                    }
                }}></input>
                <p></p>

                filter_(op-extra)
                <div>
                    <input placeholder={h.one} className="op-extra1" onChange={function (e) {
                        if (mode === "time-based") {
                            time_data.action = _action
                            time_data.path = _path
                            time_data.filter['op-type']=_opType
                            time_data.filter['op-value']=_opValue
                            time_data.filter['op-extra']["period"] = e.target.value
                        } else if (mode === "range") {
                            range_data.action = _action
                            range_data.path = _path
                            range_data.filter['op-type']=_opType
                            range_data.filter['op-value']=_opValue
                            range_data.filter['op-extra']["logic-op"] = e.target.value
                        } else if (mode === "change") {
                            change_data.action = _action
                            change_data.path = _path
                            change_data.filter['op-type']=_opType
                            change_data.filter['op-value']=_opValue
                            change_data.filter['op-extra']["logic-op"] = e.target.value
                        } else if (mode === "curve") {
                            curve_data.action = _action
                            curve_data.path = _path
                            curve_data.filter['op-type']=_opType
                            curve_data.filter['op-value']=_opValue
                            curve_data.filter['op-extra']["max-err"] = e.target.value
                        }
                        e.preventDefault()
                    }}></input>
                    <p></p>
                    <input placeholder={h.two} className="op-extra2" onChange={function (e) {
                        if (mode === "time-based") {
                            console.log("do not type here")
                        } else if (mode === "range") {
                            range_data.filter['op-extra']["boundary"] = e.target.value
                        } else if (mode === "change") {
                            change_data.filter['op-extra']["diff"] = e.target.value
                        } else if (mode === "curve") {
                            curve_data.filter['op-extra']["buf-size"] = e.target.value
                        }
                        e.preventDefault()
                    }}></input>
                </div>
                <p></p>

                authorization  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    time_data.authorization = e.target.value
                    range_data.authorization = e.target.value
                    change_data.authorization = e.target.value
                    curve_data.authorization = e.target.value
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    time_data.requestId = e.target.value
                    range_data.requestId = e.target.value
                    change_data.requestId = e.target.value
                    curve_data.requestId = e.target.value
                }}></input>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default AUTH_SUBSCRIBE
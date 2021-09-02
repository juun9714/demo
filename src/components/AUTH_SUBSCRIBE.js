/* eslint-disable*/
import React, { useState, useEffect } from 'react'


function AUTH_SUBSCRIBE(props) {
    // let [data, dataChange] = useState({ action: '', path: '', value: '', requestId: '' })
    var [_action, chAction] = useState("")
    var [_path, chPath] = useState("")
    var [_opType, chType] = useState("")
    var [_opValue, chValue] = useState("")
    var [_opExtra1, chEx1] = useState("")
    var [_opExtra2, chEx2] = useState("")
    var [_auth, chAu] = useState("")
    var [_reqId, chreqId] = useState("")
    let [val_tmp, chVal_tmp] = useState([])
    var [time_data, chTime_data] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": 'time-based', "op-extra": { "period": "" } }, authorization: '', requestId: "" })
    var [range_data, chRange_data] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": 'range', "op-extra": { "logic-op": "", "boundary": "" } }, authorization: '', requestId: "" })
    var [range_listdata, chRange_listdata] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": 'range', "op-extra": [{ "logic-op": "", "boundary": "" }, { "logic-op": "", "boundary": "" }] }, authorization: '', requestId: "" })
    var [change_data, chChange_data] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": 'change', "op-extra": { "logic-op": "", "diff": "" } }, authorization: '', requestId: "" })
    var [curve_data, chCurve_data] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": 'curve-logging', "op-extra": { "max-error": "", "buf-size": "" } }, authorization: '', requestId: "" })
    var [h, hChange] = useState({ 'one': '', 'two': '' })
    var [mode, modeChange] = useState("")
    var [rangeVal, RVChange] = useState("")

    useEffect(() => {
        //nothing
    }, [mode])

    return (

        <div className="subscribe">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                if (mode === "time-based") {
                    props.onSubmit(time_data)
                } else if (mode === "range") {
                    if (rangeVal === "multi") {
                        props.onSubmit(range_listdata)
                    } else {
                        props.onSubmit(range_data)
                    }

                } else if (mode === "change") {
                    props.onSubmit(change_data)
                } else if (mode === "curve") {
                    props.onSubmit(curve_data)
                }
            }}>
                action  :
                <input className="action" onChange={function (e) {
                    e.preventDefault()
                    chAction(e.target.value)
                }}></input>
                <p></p>

                path  :
                <input className="path" onChange={function (e) {
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
                        modeChange("time-based")
                        hChange({ 'one': "period", 'two': "**DON'T TYPE HERE**" })
                    } else if (e.target.value === "range") {
                        modeChange("range")
                        hChange({ 'one': "logic-op", 'two': "boundary" })
                    } else if (e.target.value === "change") {
                        modeChange("change")
                        hChange({ 'one': "logic-op", 'two': "diff" })
                    } else if (e.target.value === "curve-logging") {
                        modeChange("curve")
                        hChange({ 'one': "max-err", 'two': "buf-size" })
                    } else {
                        hChange({ 'one': '', 'two': '' })
                        modeChange("")
                    }
                }}></input>
                <p></p>

                filter_(op-extra)
                {
                    mode === "range"
                        ? <button className="add_value" onClick={function (e) {
                            e.preventDefault()
                            if (rangeVal === "") {
                                RVChange("multi")
                            }
                            val_tmp.push({ "logic-op": _opExtra1, "boundary": _opExtra2 })
                        }}>add</button>
                        : null
                }


                <div>
                    <input placeholder={h.one} className="op-extra1" onChange={function (e) {
                        e.preventDefault()
                        chEx1(e.target.value)
                    }}></input>
                    <p></p>

                    <input placeholder={h.two} className="op-extra2" onChange={function (e) {
                        e.preventDefault()
                        if (mode === "time-based") {
                            chEx2("")
                        } else {
                            chEx2(e.target.value)
                        }
                    }}></input>
                </div>

                <p></p>

                authorization  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    chAu(e.target.value)
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    chreqId(e.target.value)
                }}></input>
                <p><input type="submit" value="Submit" onClick={function () {
                    if (mode === "time-based") {
                        Object.assign(time_data, { action: _action, path: _path })
                        Object.assign(time_data.filter, { 'op-type': _opType, 'op-value': _opValue })
                        Object.assign(time_data, { authorization: _auth, requestId: _reqId })
                        Object.assign(time_data.filter['op-extra'], { 'period': _opExtra1 })
                        // time_data.action = _action
                        // time_data.path = _path
                        // time_data.filter['op-type'] = _opType
                        // time_data.filter['op-value'] = _opValue
                        // time_data.filter['op-extra']['period'] = _opExtra1
                        // time_data.authorization = _auth
                        // time_data.requestId = _reqId
                    } else if (mode === "range") {
                        if (rangeVal === "multi") {
                            Object.assign(range_listdata, { action: _action, path: _path, authorization: _auth, requestId: _reqId })
                            Object.assign(range_listdata.filter, { 'op-type': _opType, 'op-value': _opValue, 'op-extra': val_tmp })
                        } else {
                            Object.assign(range_data, { action: _action, path: _path, authorization: _auth, requestId: _reqId })
                            Object.assign(range_data.filter, { 'op-type': _opType, 'op-value': _opValue })
                            Object.assign(range_data.filter['op-extra'], { 'logic-op': _opExtra1, 'boundary': _opExtra2 })
                        }
                    } else if (mode === "change") {
                        Object.assign(change_data, { action: _action, path: _path, authorization: _auth, requestId: _reqId })
                        Object.assign(change_data.filter, { 'op-type': _opType, 'op-value': _opValue })
                        Object.assign(change_data.filter['op-extra'], { 'logic-op': _opExtra1, 'diff': _opExtra2 })
                    } else if (mode === "curve") {
                        Object.assign(curve_data, { action: _action, path: _path, authorization: _auth, requestId: _reqId })
                        Object.assign(curve_data.filter, { 'op-type': _opType, 'op-value': _opValue })
                        Object.assign(curve_data.filter['op-extra'], { 'max-err': _opExtra1, 'buf-size': _opExtra2 })
                    }
                    console.log("TIME=>", time_data)
                    console.log("RANGE=>", range_data)
                    console.log("RANGE_LIST=>", range_listdata)
                    console.log("CHANGE=>", change_data)
                    console.log("CURVE=>", curve_data)
                }}></input></p>
            </form>
        </div>
    )
}


export default AUTH_SUBSCRIBE
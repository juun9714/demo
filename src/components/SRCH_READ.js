import React, { useEffect, useState } from 'react'

function SRCH_READ(props) {

    let [_action, actionChange] = useState('')
    let [_path, pathChange] = useState('')
    let [_opType, oTChange] = useState('')
    let [_opValue, oVChange] = useState('')
    let [_reqId, reqIdChange] = useState('')
    let [data, dataChange] = useState({ action: '', path: '', filter: { opType: '', opValue: '' }, reqId: '' })
    let [listdata, listdataChange] = useState({ action: '', path: '', filter: { opType: '', opValue: [] }, reqId: '' })
    var _temp
    let [tmp_list, tmpChange] = useState([])
    let [mode, modeChange]=useState('')


    useEffect(function () {
        console.log("useEffect")
        console.log(tmp_list)
        console.log("data",data)
        console.log("listdata",listdata)
    }, [_temp,tmp_list,data,listdata,mode])

    return (
        <div className="auth_read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                if(mode==='single'){
                    props.onSubmit(data)
                }else if(mode === 'multi'){
                    props.onSubmit(listdata)
                }
                
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
                <button className="add_value" onClick={function (e) {
                    e.preventDefault()
                    var tmp = [...tmp_list]
                    tmp.push(_opValue)
                    tmpChange(tmp)
                }}>add</button>
                <p></p>

                requestId  :
                <input className="reqId" onChange={function (e) {
                    reqIdChange(e.target.value)
                }}></input>

                <p><button value="Save" onClick={function (e) {
                    e.preventDefault()
                    if (tmp_list.length >= 2) {
                        modeChange("multi")
                        //op-value : multi
                        console.log(tmp_list.length)
                        _temp = { ...listdata }
                        _temp.action = _action
                        _temp.path = _path
                        _temp.filter.opType = _opType
                        _temp.filter.opValue = tmp_list
                        _temp.reqId = _reqId
                        listdataChange(_temp)
                    } else {
                        modeChange("single")
                        console.log("hry")
                        //op-value : single
                        _temp = { ...data }
                        _temp.action = _action
                        _temp.path = _path
                        _temp.filter.opType = _opType
                        _temp.filter.opValue = _opValue
                        _temp.reqId = _reqId
                        console.log("temp",_temp)
                        dataChange(_temp)
                    }
                }}>save</button></p>
                <p><input type="submit" value="Submit"></input></p>

            </form>


        </div>
    )
}


export default SRCH_READ
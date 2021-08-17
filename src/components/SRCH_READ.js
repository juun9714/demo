// import React, { useEffect, useState } from 'react'

function SRCH_READ(props) {

    // let [data, dataChange] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": '' }, requestId: '' })
    var data = { action: '', path: '', filter: { "op-type": '', "op-value": '' }, requestId: '' }
    // let [listdata, listdataChange] = useState({ action: '', path: '', filter: { "op-type": '', "op-value": [] }, requestId: '' })
    var listdata = { action: '', path: '', filter: { "op-type": '', "op-value": [] }, requestId: '' }
    let val_tmp
    // let [tmp_list, tmpChange] = useState([])
    var tmp_list=[]
    let mode="single"

    return (
        <div className="srch_read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                if (mode === 'single') {
                    props.onSubmit(data)
                } else if (mode === 'multi') {
                    props.onSubmit(listdata)
                }
            }}>

                action  :
                <input className="action" onChange={function (e) {
                    e.preventDefault()
                    data.action = e.target.value
                    listdata.action = e.target.value
                }}></input>
                <p></p>

                path  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    data.path = e.target.value
                    listdata.path = e.target.value
                }}></input>
                <p></p>

                filter_(op-type)  :
                <input className="op-type" onChange={function (e) {
                    e.preventDefault()
                    data.filter['op-type'] = e.target.value
                    listdata.filter['op-type'] = e.target.value
                }}></input>
                <p></p>

                filter_(op-value)  :
                <input className="op-value" onChange={function (e) {
                    e.preventDefault()
                    val_tmp = e.target.value
                    data.filter['op-value'] = e.target.value
                }}></input>
                <button className="add_value" onClick={function (e) {
                    e.preventDefault()
                    if (mode === "single") {
                        mode="multi"
                    }
                    tmp_list.push(val_tmp)
                    listdata.filter['op-value'] = tmp_list
                }}>add</button>
                <p></p>

                requestId  :
                <input className="reqId" onChange={function (e) {
                    e.preventDefault()
                    data.requestId = e.target.value
                    listdata.requestId = e.target.value
                }}></input>
                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default SRCH_READ
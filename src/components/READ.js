import React, { useState, useEffect } from 'react'

function _READ(props) {
    // let [data, dataChange] = useState({ action: '', path: '', requestId: '' })
    // var data={ action: '', path: '', requestId: '' }
    var [data, sCData]=useState({ action: '', path: '', requestId: '' })

    return (
        <div className="read">
            <form method="post" onSubmit={function (e) {
                e.preventDefault()
                props.onSubmit(data)
            }}>
                action  :
                <input name="action" onChange={function (e) {
                    e.preventDefault()
                    data.action = e.target.value
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    data.path = e.target.value
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    data.requestId = e.target.value
                }}></input>

                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default _READ
/* eslint-disable*/
import React, { useState, useEffect } from 'react'

function UPDATE(props) {
    let [data, dataChange] = useState({ action: '', path: '', value: '', requestId: '' })
    // var data={ action: '', path: '', value: '', requestId: '' }

    return (
        <div className="update">
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

                value  :
                <input name="value" onChange={function (e) {
                    e.preventDefault()
                    data.value=e.target.value
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


export default UPDATE
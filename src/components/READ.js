import React, { useState, useEffect } from 'react'
// import Client from './Client';

function _READ(props) {
    let [data, dataChange] = useState({ action: '', path: '', requestId: '' })

    useEffect(() => {
        console.log("useEffect of READ.js")
    }, [data])


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
                    console.log(data)
                }}></input>
                <p></p>

                path  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    data.path=e.target.value
                    console.log(data)
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    data.requestId=e.target.value
                    console.log(data)
                }}></input>

                <p><input type="submit" value="Submit"></input></p>
            </form>
        </div>
    )
}


export default _READ
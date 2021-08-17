// import React, { useState, useEffect } from 'react'

function AUTH_UPDATE(props) {
    // let [data, dataChange] = useState({ action: '', path: '', value: '', authorization: '', requestId: '' })
    var data = { action: '', path: '', value: '', authorization: '', requestId: '' }


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
                    data.path = e.target.value
                    console.log(data)
                }}></input>
                <p></p>

                value  :
                <input name="value" onChange={function (e) {
                    e.preventDefault()
                    data.value = e.target.value
                    console.log(data)
                }}></input>
                <p></p>

                authorization  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    data.authorization = e.target.value
                    console.log(data)
                }}></input>
                <p></p>

                requestId  :
                <input name="reqId" onChange={function (e) {
                    e.preventDefault()
                    data.requestId = e.target.value
                    console.log(data)
                }}></input>

                <p><input type="submit" value="Submit"></input></p>

            </form>
        </div>
    )
}


export default AUTH_UPDATE
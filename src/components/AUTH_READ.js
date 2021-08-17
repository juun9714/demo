import React, { useState } from 'react'

function AUTH_READ(props) {
    let [data, dataChange] = useState({ action: '', path: '', authorization: '', requestId: '' })
    // var data = { action: '', path: '', authorization: '', requestId: '' }

    return (
        <div className="auth_read" >
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

                authorization  :
                <input className="path" onChange={function (e) {
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

export default AUTH_READ
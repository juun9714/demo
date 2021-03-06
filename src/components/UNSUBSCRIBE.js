/* eslint-disable*/
import React, { useState, useEffect } from 'react'

function UNSUBSCRIBE(props) {
    // var data = { action: '', subscriptionId: '', requestId: '' }
    let [data,chData] = useState({ action: '', subscriptionId: '', authorization: '', requestId: '' })
    
    return (
        <div className="unsubscribe">
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

                subscriptionId  :
                <input name="path" onChange={function (e) {
                    e.preventDefault()
                    data.subscriptionId = e.target.value
                }}></input>
                <p></p>

                authorization  :
                <input className="path" onChange={function (e) {
                    e.preventDefault()
                    data.authorization = e.target.value
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

export default UNSUBSCRIBE
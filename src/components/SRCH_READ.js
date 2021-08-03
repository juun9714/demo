import React, { useState, useEffect } from 'react'

function SRCH_READ(){
    return(
        <div className="auth_read">
            action  :
            <input className="action"></input>
            <p></p>

            path  :
            <input className="path"></input>
            <p></p>

            filter_(op-type)  :
            <input className="op-type"></input>
            <p></p>
            filter_(op-value)  :
            <input className="op-value"></input>
            <p></p>

            requestId  :
            <input className="reqId"></input>
        </div>
    )
}


export default SRCH_READ
import React, { useState, useEffect } from 'react'

function AUTH_READ(){
    return(
        <div className="auth_read">
            action  :
            <input className="action"></input>
            <p></p>

            path  :
            <input className="path"></input>
            <p></p>

            authorization  :
            <input className="path"></input>
            <p></p>

            requestId  :
            <input className="reqId"></input>
        </div>
    )
}


export default AUTH_READ
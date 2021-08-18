/* eslint-disable*/
import React, { useEffect, useState } from 'react'
import _READ from './READ';
import AUTH_READ from './AUTH_READ';
import SRCH_READ from './SRCH_READ';
import HISTORY_READ from './HISTORY_READ';
import DISCOVERY_READ from './DISCOVERY_READ';
import UPDATE from './UPDATE';
import AUTH_UPDATE from './AUTH_UPDATE';

function REST() {
    let [mode, modeChange] = useState("")
    let [res, resChange] = useState("")
    let [status, stChange] = useState("")
    let [token, tkChange] = useState("")


    useEffect(() => {
        // console.log("MODE CHANGED TO => ",mode)
        // mode가 바뀔 때 실행할 것을 지정 === mode가 바뀔 때는 재 렌더링이 안되도록 함 ! === mode가 바뀔 때는 
    }, [mode])

    function getAccessToken() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState, this.status)
            if (this.readyState == 4 && this.status == 200) {
                var response_data = JSON.parse(this.response);
                // access_token = response_data['access']
                token = response_data['access']
                console.log(token)
                // var header = getResponseHeaderMap(this)
                // console.log(this)
                // console.log(header)
            }
        };
        // REST API 
        let request = "POST"
        let protocol = "http"
        let host = "127.0.0.1:8000"
        let path = "api/token"
        let url = protocol + "://" + host + "/" + path
        let data = new FormData();
        data.append('username', 'skku');
        data.append('password', 'skku');
        xhttp.open(request, url, false);
        xhttp.send(data);
    }


    function executeRestAPI(data) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response_data = JSON.parse(this.response);
                // var header = getResponseHeaderMap(this)
                var status_msg = "HTTP/1.1 " + this.status + " " + this.statusText
                var success = true
                stChange(status_msg)
                resChange(JSON.stringify(response_data))
                console.log("status MSG", status_msg)
                console.log("response_data", response_data)
                // var tmp = [...res]
                // tmp.push(response_data)
                // resChange(tmp)

                // t.step_func(function () {
                //     for (var temp_response_data of response_data.data) {
                //         if (isGetSuccessResponseForHTTPS(temp_response_data) === false) {
                //             success = false
                //         }
                //     }
                //     if (success) {
                //         //assert_true(true, "Get response received. value = " + response_data.data.dp.value);
                //         helper_terminate_success_for_https("Get response received. ", status_msg, header, response_data);
                //         //CHECK
                //         console.log(response_data)
                //         var tmp = [...res]
                //         tmp.push(response_data)
                //         resChange(tmp)
                //     } else {
                //         helper_terminate_failure("Get method failed");
                //     }
                // })();
            } else {
                console.log(this.response)
                resChange(this.response)
            }
        };
        // REST API 
        let request = "GET"
        let protocol = "http"
        let host = "127.0.0.1:8000"
        let path = data.path
        let url = protocol + "://" + host + "/" + path
        let header = {}
        let params = ""
        if (mode === "READ") {
            params = "";
        } else if (mode === "AUTH_READ") {
            params = "";
            header['Authorization'] = 'Bearer ' + token
        } else if (mode === "SRCH_READ") {
            params = "filter={\"op-type\":\"paths\", \"op-value\":\"" + data.filter["op-value"] + "\"}";
        } else if (mode === "HISTORY_READ") {
            params = "filter={\"op-type\":\"history\", \"op-value\":\"" + data.filter["op-value"] + "\"}";
        } else if (mode === "DISCOVERY_READ") {
            params = "filter={\"op-type\":\"metadata\", \"op-value\":\"" + data.filter["op-value"] + "\"}";
        } else if (mode === "UPDATE") {
            request = "POST"
        } else if (mode === "AUTH_UPDATE") {
            request = "POST"
        }


        if (params.length > 0) {
            console.log(params.length)
            url = url + "?" + params
            path = path + "?" + params
        }

        if (request === "GET") {
            // addLogRequestMessageForHTTPS(request + " /" + path + " HTTP/1.1", host, header)
            xhttp.open(request, url, true);
            xhttp.send();

        } else if (request === "POST") {
            let data = new FormData();
            data.append('value', 'sport');
            let dict_data = { 'value': 'sport' }

            // addLogRequestMessageForHTTPS(request + " /" + path + " HTTP/1.1", host, header, dict_data)
            xhttp.open(request, url, true);
            xhttp.send(data);
        }
    }

    // var t = async_test("Get success case");


    function retMode() {
        var _content = null
        if (mode === "READ") {
            _content = <_READ onSubmit={function (data) {
                console.log("received by submit btn: ", data)
                executeRestAPI(data)
            }}></_READ>
            return _content
        } else if (mode === "AUTH_READ") {
            _content = <AUTH_READ onSubmit={function (data) {
                console.log("received : ", data)
                getAccessToken()
                console.log("token=>", token)
                executeRestAPI(data)
            }}></AUTH_READ>
            return _content
        } else if (mode === "SRCH_READ") {
            _content = <SRCH_READ onSubmit={function (data) {
                console.log("received : ", data)
                executeRestAPI(data)
            }}></SRCH_READ>
            return _content
        } else if (mode === "HISTORY_READ") {
            _content = <HISTORY_READ onSubmit={function (data) {
                console.log("received : ", data)
                executeRestAPI(data)
            }}></HISTORY_READ>
            return _content
        } else if (mode === "DISCOVERY_READ") {
            _content = <DISCOVERY_READ onSubmit={function (data) {
                console.log("received : ", data)
                executeRestAPI(data)
            }}></DISCOVERY_READ>
            return _content
        } else if (mode === "UPDATE") {
            _content = <UPDATE onSubmit={function (data) {
                console.log("received : ", data)
                executeRestAPI(data)
            }}></UPDATE>
            return _content
        } else if (mode === "AUTH_UPDATE") {
            _content = <AUTH_UPDATE onSubmit={function (data) {
                console.log("received : ", data)
                getAccessToken()
                executeRestAPI(data)
            }}></AUTH_UPDATE>
            return _content
        } else {
            return null
        }
    }


    return (
        <div>
            <h3>REST API</h3>
            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "READ") {
                    modeChange("READ")
                } else {
                    modeChange("")
                }
            }}>READ</button></p>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "AUTH_READ") {
                    modeChange("AUTH_READ")
                } else {
                    modeChange("")
                }
            }}>AUTH_READ</button></p>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "SRCH_READ") {
                    modeChange("SRCH_READ")
                } else {
                    modeChange("")
                }

            }}>SRCH_READ</button></p>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "HISTORY_READ") {
                    modeChange("HISTORY_READ")
                } else {
                    modeChange("")
                }

            }}>HISTORY_READ</button></p>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "DISCOVERY_READ") {
                    modeChange("DISCOVERY_READ")
                } else {
                    modeChange("")
                }
            }}>DISCOVERY_READ</button></p>

            <hr></hr>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "UPDATE") {
                    modeChange("UPDATE")
                } else {
                    modeChange("")
                }
            }}>UPDATE</button></p>

            <p><button onClick={function (e) {
                e.preventDefault()
                if (mode !== "AUTH_UPDATE") {
                    modeChange("AUTH_UPDATE")
                } else {
                    modeChange("")
                }
            }}>AUTH_UPDATE</button></p>

            <hr></hr>

            {
                mode === ""
                    ? null
                    : <div className="retMode">{retMode()}</div>
            }

            <div className="response">
                RESPONSE
                <hr></hr>
                <div>{status}</div>
                <div>
                    {
                        res.includes("Error Code")
                        ? <div style={{ color: "red" }}>{res}</div>
                        : <div style={{ color: "green" }}>{res}</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default REST
import React, { useState, useEffect } from "react";
import axiosInstance from "../Services/axiosApi";


function Hello(){
    const [message, setMessage] = useState("")

    useEffect(() => {
        axiosInstance.get('hello/')
            .then(response => {
                setMessage(response.data.hello)
                console.log("messageData1: ", JSON.stringify(message, null, 4));
                //const header = localStorage.getItem("access_token");
                //console.log(header);
            })
            .catch(error => {

            })
    })
    return (
        <div>
            <p>{message}</p>
        </div>  
    )
}

    
export default Hello;
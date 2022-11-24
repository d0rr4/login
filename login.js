import React, {useEffect, useState} from "react";
import "./login.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("Login Successful!")
        console.log(e)
    }

    const onFailure = e => {
        alert("Incorrect Username or Password")
        console.log(e)
    }

    return (
        
        <div className="page">    
            <div className="bckgrnd"></div>        
            <div className="cover">
                <div className="textbox">
                    <img src="https://images.squarespace-cdn.com/content/v1/5f974a667b3b17424082088b/1617134420628-8SBINCFLHQ0GQ2QLNJCP/IBCM+Logo+neu.png" />
                    <h2>Login</h2>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />

                    <div className="button" onClick={popup}>Login</div>
                </div>
                <div className="picbox">
                </div>

            </div>

        </div>
    )
}

export default LoginForm
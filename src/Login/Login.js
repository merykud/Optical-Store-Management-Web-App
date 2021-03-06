import React from "react";
import Background from "../Images/back1.jpg"
import Logo_div from "../Logo/Logo_div";
import history from "../history";
import "../Stylesh.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
}from "react-router-dom";

class Login extends React.Component{


    render() {

        const myStyle = {
            backgroundImage: `url(${Background})`,
            width: '100%',
            height: '100%',
            position: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
            zIndex: -1,
        }


        return (

            <div id="root">

                <div id="back_img" style={myStyle}></div>
                <div id="header">
                    <center></center>
                </div>
                <div id="menu">
                    <center>

                    </center>
                </div>


                <div id="body">
                    <center>
                        <div className="first">

                            <div className="main-window">
                                <div className="main-container">
                                    <Logo_div/>
                                    <div className="pt2">

                                        <form  className="main-form"  id="formStyle" method="post">
                                            <div className="input-box">
                                                <div className="ui left icon input" id="formStyle">
                                                    <input type="text" id="formStyle"
                                                           placeholder="Username"></input>
                                                    <i className="user icon"></i>
                                                </div>
                                            </div>

                                            <div className="input-box" id="formStyle">
                                                <div className="ui left icon input">
                                                    <input  type="password" id="inputStyle"
                                                           placeholder="Password"></input>
                                                    <i className="lock icon"></i>
                                                </div>
                                            </div>

                                        </form>

                                    </div>

                                    <div className="pt3">
                                        <button className="ui inverted primary button" id="buttonStyle"
                                                onClick={() => history.push('/home')}>
                                            Log In
                                        </button>
                                    </div>

                                    <div className="pt4">

                                        <div className="sign-up">
                                            <p className="signup-par" id="linkStyle"> Don't have an account?

                                                <Link to="/signup"> Sign Up </Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>

                </div>





            </div>


        );
    }
}

export default Login;
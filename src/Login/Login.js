import React from "react";
import Background from "../Images/back1.jpg"
import Logo_div from "../Logo/Logo_div";
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
            textAlign: "center",
            width: '100%',
            height: '100%',
            position: "absolute",
            minHeight: "100%",
            minWidth: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: -1

        }
        const bd = {
            zIndex: 1,
            position: "relative"
        }
        const formStyle = {

            padding: "fixed",
            margin: "fixed",
            marginTop: "10px",
            opacity: 1
        }
        const inputStyle = {
            paddingTop: "15px"
        }
        const buttonStyle = {
            margin: "fixed",
            marginTop: "2.5%",
            zIndex: "2000"
        }
        const linkStyle={
            margin:"fixed",
            marginTop: "2%"
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

                                        <form style={formStyle} className="main-form" method="post">
                                            <div className="input-box">
                                                <div style={formStyle} className="ui left icon input">
                                                    <input style={inputStyle} type="text"
                                                           placeholder="Username"></input>
                                                    <i className="user icon"></i>
                                                </div>
                                            </div>

                                            <div style={formStyle} className="input-box">
                                                <div className="ui left icon input">
                                                    <input style={inputStyle} type="password"
                                                           placeholder="Password"></input>
                                                    <i className="lock icon"></i>
                                                </div>
                                            </div>

                                        </form>

                                    </div>

                                    <div className="pt3">
                                        <button style={buttonStyle} className="ui inverted primary button">
                                            Log In
                                        </button>
                                    </div>

                                    <div className="pt4">

                                        <div className="sign-up">
                                            <p style={linkStyle} className="signup-par"> Don't have an account?
                                                <Link to="/signup"> Sign Up </Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>

                </div>


                <div id="footer">
                    <center></center>
                </div>


            </div>


        );
    }
}

export default Login;
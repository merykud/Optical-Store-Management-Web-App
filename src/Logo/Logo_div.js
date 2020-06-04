import React from "react";
import logo from "../Images/logo2.png"


class Logo_div extends React.Component{

    render(){
        const myStyle ={
            margin: "fixed",
            marginTop: "10%"
        }
        return (
            <div className="pt1">
                <img style={myStyle} src= {logo} alt="Studio Foto Optik"/>
            </div>
        );
    }
}

export default Logo_div;
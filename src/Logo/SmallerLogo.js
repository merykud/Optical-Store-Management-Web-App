import React from "react";
import logo from "../Images/logo6.png"


class SmallerLogo extends React.Component{

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

export default SmallerLogo;
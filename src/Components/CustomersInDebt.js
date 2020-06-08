import React from "react";
import SideBar from "./SideBar";
import CustomersTable from "./CustomersTable";
import SmallerLogo from "../Logo/SmallerLogo";
import Background from "../Images/back1.jpg";

class CustomersInDebt extends React.Component{
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
        return(

            <div  className="ui internally celled grid">
                <div id="back_img" style={myStyle}></div>
                <div className="row">

                    <SideBar/>

                    <div className="ten wide column">

                        <div id="title_box">
                            <h1>CUSTOMERS IN DEBT</h1>
                        </div>

                    <div className="ten wide column">




                        <CustomersTable></CustomersTable>


                    </div>

                    </div>

                    <div className="wide column">
                        <SmallerLogo/>

                    </div>




                </div>
            </div>







        );
    }

}

export default CustomersInDebt;
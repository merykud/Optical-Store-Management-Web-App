import React from "react";
import Background from "../Images/back1.jpg";
import SmallerLogo from "../Logo/SmallerLogo";
import SideBar from "./SideBar";
import "../Stylesh.css";
import InventoryTable from "./InventoryTable";

class Inventory extends React.Component{
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
                            <h1>EYEGLASSES</h1>
                        </div>

                        <InventoryTable></InventoryTable>



                        <div id="title_box">
                            <h1>OPTICAL LENSES</h1>
                        </div>

                        <InventoryTable></InventoryTable>



                        <div id="title_box">
                            <h1>LENSES</h1>
                        </div>

                        <InventoryTable></InventoryTable>



                        <div id="title_box">
                            <h1>OTHER</h1>
                        </div>

                        <InventoryTable></InventoryTable>



                    </div>

                    <div className="wide column">
                        <SmallerLogo/>



                    </div>




                </div>


            </div>



        );
    }

}
export default Inventory;
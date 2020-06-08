import React from "react";
import SmallerLogo from "../Logo/SmallerLogo";
import "../Stylesh.css";
import Background from "../Images/back1.jpg";
import SideBar from "../Components/SideBar";
import CustomersTable from "./CustomersTable";


class AllCustomers extends React.Component{
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
                            <h1>ALL CUSTOMERS</h1>
                        </div>

                        <div className="row">


                            <div  className="ui input focus" id="customer_input">
                                <input type="text" placeholder="Name"></input>
                            </div>

                            <div  className="two fields" id="inline">

                                <div className="ui input focus" id="customer_input">
                                    <input type="text" placeholder="Surname"></input>
                                </div>
                            </div>

                            <button className="ui blue button" id="customers_search_button">Search</button>

                            </div>


                        <CustomersTable></CustomersTable>


                    </div>



                    <div className="wide column">
                        <SmallerLogo/>



                    </div>



</div>
                </div>






        );
    }

}
export default AllCustomers;
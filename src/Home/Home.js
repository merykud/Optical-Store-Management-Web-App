import React from "react";
import SmallerLogo from "../Logo/SmallerLogo";
import "../Stylesh.css";
import Background from "../Images/back1.jpg";
import SideBar from "../Components/SideBar";
import Table from "../Components/Table.js";

class Home extends React.Component{



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
                            <h1>HOME</h1>
                        </div>

                        <div className="row">


                            <div  className="ui input focus" id="inline_date">
                                <input type="text" placeholder="From"></input>
                            </div>

                            <div  className="two fields" id="inline">
                                <div className="field" id="inline">
                                    <select className="ui fluid search dropdown" name="card[expire-month]">
                                        <option value="">Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className="ui input focus" id="inline_date">
                                    <input type="text" maxLength="4" placeholder="Year"></input>
                                </div>
                            </div>


                            <div  className="ui input focus" id="inline_date_sec">
                                <input type="text" placeholder="To"></input>
                            </div>

                            <div className="two fields" id="inline">
                                <div  className="field" id="inline">
                                    <select className="ui fluid search dropdown" name="card[expire-month]">
                                        <option value="">Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>

                                <div  className="ui input focus" id="inline_date">
                                    <input type="text" maxLength="4" placeholder="Year"></input>
                                </div>
                            </div>

                            <button className="ui blue button" id="inline_date_b">Search</button>


                        </div>

                        <Table></Table>


                        <div className="ui inverted segment" id="total" >Total: </div>

                    </div>

                    <div className="wide column">
                        <SmallerLogo/>



                    </div>




                </div>


            </div>



        );
    }

}
export default Home;
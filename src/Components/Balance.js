import React from "react";
import Background from "../Images/back1.jpg";
import SideBar from "./SideBar";
import SmallerLogo from "../Logo/SmallerLogo";
import {Form} from "semantic-ui-react";
import "../Stylesh.css";


class Balance extends React.Component{
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
                            <h1>BALANCE</h1>
                        </div>

                        <Form>

                            <div className="row">
                                <Form.Group>
                                    <Form.Input label='Spending type' placeholder='Spending type' width={6} />
                                    <Form.Input label='Amount' placeholder='Amount' width={6} />
                                    <Form.Group>
                                        <button className="ui blue button" id="balance_button"><i
                                            className="plus icon"></i>Add</button>

                                    </Form.Group>

                                </Form.Group>
                            </div>


                        </Form>
                        <div className="ui inverted segment" id="total">Balance: </div>

                    </div>

                    <div className="wide column">
                        <SmallerLogo/>



                    </div>




                </div>


            </div>



        );
    }

}

export default Balance;
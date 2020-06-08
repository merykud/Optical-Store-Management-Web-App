import React from "react";
import SideBar from "./SideBar";
import SmallerLogo from "../Logo/SmallerLogo";
import Background from "../Images/back1.jpg";
import "../Stylesh.css";
import {Form} from "semantic-ui-react";


class NewCustomer extends React.Component{
    render(){

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
                            <h1>NEW  CUSTOMER</h1>
                        </div>


                        <Form>
                            <div className="row">
                            <Form.Group>
                                <Form.Input label='First name' placeholder='First Name' width={6} />

                                <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                                <Form.Input label='Date of birth' placeholder='Date of birth' width={6} />
                                <Form.Input label='Phone number' placeholder='Phone number' width={6} />
                            </Form.Group>
                            </div>

                            <div className="row">
                            <Form.Group>
                                <Form.Input label='Left eye diopter' placeholder='Left eye' width={3} />
                                <Form.Input label='Right eye diopter' placeholder='Right eye' width={3} />

                            </Form.Group>
                            </div>


                            <Form.Group>

                                <Form.Input label='Eyeglasses type 1' placeholder='Eyeglasses type' width={6} />
                                <Form.Input label='Amount' placeholder='Amount' width={3} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input label='Eyeglasses type 2' placeholder='Eyeglasses type' width={6} />
                                <Form.Input label='Amount' placeholder='Amount' width={3} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input label='Eyeglasses type 3' placeholder='Eyeglasses type' width={6} />
                                <Form.Input label='Amount' placeholder='Amount' width={3} />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input label='Glass lense diopter 1' placeholder='Diopter' width={3} />
                                <Form.Input label='Amount' placeholder='Amount' width={2} />
                                <Form.Input label='Glass lense diopter 2' placeholder='Diopter' width={3} />
                                <Form.Input label='Amount' placeholder='Amount' width={2} />
                                <Form.Input label='Glass lense type 1' placeholder='Type' width={3} />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input label='Lense type 1' placeholder='Type' width={3} />
                                <Form.Input label='Amount' placeholder='Amount' width={2} />
                                <Form.Input label='Lense type 2' placeholder='Type' width={3} />
                                <Form.Input label='Amount' placeholder='Amount' width={2} />


                            </Form.Group>

                            <Form.Group>
                            <Form.Input label='Gratis' placeholder='Gratis' width={4} />
                            <Form.Input label='Gratis' placeholder='Gratis' width={4} />
                            </Form.Group>


                            <Form.Group>

                            <Form.Field label='  Check ' control='input' type='checkbox' />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input label='Additional Charges' placeholder='Amount' width={4} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input label='Payed' placeholder='Amount payed' width={4} />
                                <Form.Input label='Debt' placeholder='Debt' width={4} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Field label='Additional Comment' control='textarea' width={15}  rows='4' />
                            </Form.Group>


                            <Form.Group id= 'transaction_button'>
                                <button className="ui blue button">Process transaction</button>


                            </Form.Group>








                        </Form>


                    </div>

                    <div className="wide column">
                        <SmallerLogo/>



                    </div>





                </div>


            </div>



        );
    }

}

export default NewCustomer;
import React from "react";
import Background from "../Images/back1.jpg";
import SideBar from "./SideBar";
import CustomersTable from "./CustomersTable";
import SmallerLogo from "../Logo/SmallerLogo";
import {Form} from "semantic-ui-react";
import "../Stylesh.css"

class AddToInventory extends React.Component{

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
                            <h1>ADD TO INVENTORY</h1>
                        </div>



                            <Form>
                                <div className="row">
                                    <h2> ADD EYEGLASSES</h2>
                                    <Form.Group>
                                        <Form.Input label='Eyeglasses type' placeholder='Type name' width={6} />
                                        <Form.Input label='Amount' placeholder='Amount' width={6} />
                                        <Form.Input label='Price' placeholder='Price' width={6} />
                                    </Form.Group>

                                    <h2> ADD OPTICAL LENSES</h2>
                                    <Form.Group>
                                        <Form.Input label='Optical lenses type' placeholder='Type name' width={6} />
                                        <Form.Input label='Amount' placeholder='Amount' width={6} />
                                        <Form.Input label='Price' placeholder='Price' width={6} />

                                    </Form.Group>

                                    <h2> ADD LENSES</h2>
                                    <Form.Group>
                                        <Form.Input label='Lenses type' placeholder='Type name' width={6} />
                                        <Form.Input label='Amount' placeholder='Amount' width={6} />
                                        <Form.Input label='Price' placeholder='Price' width={6} />

                                    </Form.Group>

                                    <h2> ADD OTHER</h2>
                                    <Form.Group>
                                        <Form.Input label='Type' placeholder='Type name' width={6} />
                                        <Form.Input label='Amount' placeholder='Amount' width={6} />
                                        <Form.Input label='Price' placeholder='Price' width={6} />

                                    </Form.Group>

                                    <Form.Group id= 'add_button'>
                                        <button className="ui blue button"><i className="plus icon"></i>ADD</button>


                                    </Form.Group>
                                </div>




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

export default AddToInventory;
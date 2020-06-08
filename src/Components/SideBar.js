import React from "react";
import history from "../history";
import { Dropdown, Menu } from 'semantic-ui-react';

class SideBar extends React.Component{
    render(){


        return(

            <div className="three wide column">

                <div className="ui vertical blue pointing menu">
                    <a className="item" onClick={() => history.push('/home')}>
                        Home
                    </a>



                    <Dropdown text='Customers' pointing='left' className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => history.push('/newcustomer')}>New customer</Dropdown.Item>
                            <Dropdown.Item onClick={() => history.push('/allcustomers')}>All customers</Dropdown.Item>
                            <Dropdown.Item onClick={() => history.push('/customersindebt')}>Customers in debt</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                        <Dropdown text='Inventory' pointing='left' className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => history.push('/addtoinventory')} >Add to inventory</Dropdown.Item>
                                <Dropdown.Item onClick={() => history.push('/inventory')} >Check inventory</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    <a className="item" onClick={() => history.push('/balance')}>
                        Balance
                    </a>



                </div>


            </div>

        );
    }

}

export default SideBar;
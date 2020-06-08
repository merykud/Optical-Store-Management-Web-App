import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login/Login";
import Signup from "./Signup/Signup.js"
import Home from "./Home/Home";
import history from "./history";
import Inventory from "./Components/Inventory";
import Balance from "./Components/Balance";
import NewCustomer from "./Components/NewCustomer";

import Customers from "./Components/Customers";



import {
    Router,
    Route,
    Switch,
    Link,
    Redirect
}from 'react-router-dom';
import AllCustomers from "./Components/AllCustomers";
import CustomersInDebt from "./Components/CustomersInDebt";
import AddToInventory from "./Components/AddToInventory";


const App =() => {

        return (

            <Router history={history}>
                <Switch>

                <Route  exact path="/" component={Login}/>
                <Route   path="/login" component={Login}/>
                <Route   path="/signup" component={Signup}/>
                <Route   path="/home" component={Home}/>
                <Route   path="/inventory" component={Inventory}/>
                <Route   path="/customers" component={Customers}/>
                <Route   path="/balance" component={Balance}/>
                <Route   path="/newcustomer" component={NewCustomer}/>
                <Route   path="/allcustomers" component={AllCustomers}/>
                <Route   path="/customersindebt" component={CustomersInDebt}/>
                <Route   path="/addtoinventory" component={AddToInventory}/>

                </Switch>
            </Router>

        );

    }


ReactDOM.render(<App/>, document.querySelector('#root'));
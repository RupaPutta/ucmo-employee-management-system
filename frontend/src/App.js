import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';
import CreateDepartmentComponent from './components/CreateDepartmentComponent';
import ViewDepartmentComponent from './components/ViewDepartmentComponent';
import UpdateDepartmentComponent from './components/UpdateDepartmentComponent';
import ListPayrollComponent from './components/ListPayrollComponent';
import CreatePayrollComponent from './components/CreatePayrollComponent';
import ViewPayrollComponent from './components/ViewPayrollComponent';
import ListCheckInCheckOutComponent from './components/ListCheckInCheckOutComponent';
import ViewCheckInCheckOutComponent from './components/ViewCheckInCheckOutComponent';
import CreateCheckInCheckOutComponent from './components/CreateCheckInCheckOutComponent';
import ListAdminComponent from './components/ListAdminComponent';
import ListHolidayComponent from './components/ListHolidayComponent';
import FooterComponent from './components/FooterComponent';

import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <Navbar />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/departments" component = {ListDepartmentComponent}></Route>
                          <Route path = "/add-department/:id" component = {CreateDepartmentComponent}></Route>
                          <Route path = "/view-department/:id" component = {ViewDepartmentComponent}></Route>
                          <Route path = "/update-department/:id" component = {UpdateDepartmentComponent}></Route>
                          <Route path = "/payrolls" component = {ListPayrollComponent}></Route>
                          <Route path = "/add-payroll/:id" component = {CreatePayrollComponent}></Route>
                          <Route path = "/view-payroll/:id" component = {ViewPayrollComponent}></Route>
                          <Route path = "/checkInCheckOuts" component = {ListCheckInCheckOutComponent}></Route>
                          <Route path = "/view-checkincheckout/:id" component = {ViewCheckInCheckOutComponent}></Route>
                          <Route path = "/add-checkincheckout/:id" component = {CreateCheckInCheckOutComponent}></Route>
                          <Route path = "/admins" component = {ListAdminComponent}></Route>
                          <Route path = "/holidays" component = {ListHolidayComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}
export default App;

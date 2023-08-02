import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';
import CreateDepartmentComponent from './components/CreateDepartmentComponent';
import ViewDepartmentComponent from './components/ViewDepartmentComponent';
import UpdateDepartmentComponent from './components/UpdateDepartmentComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
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
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}
export default App;

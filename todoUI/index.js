// import React from 'react';
// import ReactDOM from 'react-dom';
// import logos from './Acuity-logo.svg';
// import './index.css';
// import TodoApp from './TodoApp';
// import registration from './registration';
// import reportWebVitals from './reportWebVitals';
// import Login from './Login';

// import {BrowserRouter as Router, Route,NavLink,Switch} from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>

// <img src = {logos} width = "800" alt = "800" className = "logos"></img>
// <div className = "box"><p>click below to login.</p>
// <NavLink to="/Login"><b>Login</b></NavLink> </div>

// <p>click below to register.</p>
// <NavLink to="/registration"><b>Register</b></NavLink>

// <Switch>
// <Route path="/registration" component={registration}/>
// <Route path="/Login" component={Login}/>

// </Switch></Router>
// </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registration from './registration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Registration />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



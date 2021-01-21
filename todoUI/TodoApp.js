import React, {Component, useState}from 'react';
import logo from './BEAT Logo_Light-1.svg';
import "./TodoApp.css";
//import "./server.js";
import axios from 'axios';

import { findAllByTestId } from '@testing-library/react';

window.onload = function () {
  //var usid = localStorage.getItem("userid");

}
function deleteIt(){}

// class TodoApp extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       newItem : "",
//       list : []
     
//     };
    
//   }
  
 

//   addItem(todoValue) {
//     if(todoValue!== ""){
//       const newItem = {
//         id: Date.now(),
//         value : todoValue,
//         isDone : false,
//       };

//       const list = [...this.state.list];
//       list.push(newItem);

//       this.setState( {
//         list,
//         newItem: ""
//       });
//     }
//   }


//   deleteItem(id) {
//     const list = [...this.state.list];
//     const updatedList = list.filter(item => item.id !== id);
//     this.setState({list: updatedList})
//   }

//   updateInput (input){
//     this.setState({newItem:input});
//   }
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.usid = 901;
    this.state = {
      newItem: "",
      list: [],
      list1: []
    };
  }
  deleteItem() {
    deleteIt();
    //how delete query will look like  https://localhost:44358/api/Todoes/901?item=movie
  }
  insert() {
    var items = document.getElementById("task").value
    var axios = require('axios');
    var data = JSON.stringify({
      "uid": this.usid,
      "items": items
    });
    var config = {
      method: 'post',
      url: 'https://localhost:44358/api/todoes',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }//end fxn insert
  getItems = e => {
    e.preventDefault()
    let list1=[...this.state.list1]
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://localhost:44358/api/todoes/' + this.usid,
      headers: {}
    };
    function fetchusers(response) {
      const lis = JSON.stringify(response.data);
      console.log("li" + lis);
      list1 = lis;//response.data;
      console.log('array' + list1);
    }//end fxn fetch users
    axios(config)
      .then(response => fetchusers(response))
      .catch(function (error) {
        console.log(error);
      });
    console.log("hey" + list1);
  } //end getItems
  handleSubmit = event => {
    event.preventDefault()
    this.insert()
    var todoValue = document.getElementById("task").value
    if (todoValue !== "") {
      const newItem = {
        uid: this.usid,
        items: todoValue
        //  isDone : false
      };
      console.log(this.state.list1);
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
      console.log(this.state.list);
      //      this.getItems
    }// end if
  }//end handle submit

 

  render(){
    return(
      <div>
      <head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta></head>
     

      <div>
        <img src = {logo} width = "200" alt = "300" className = "logo"></img>
        <h1 className = "app-title">want to add chores?</h1>
  <div className = "container"> add an item...<br/><br/>
  
  <input type = "text"
  className = "input-text"
  id = "task"
  placeholder = "let's get going..."
  required
  
 
      />
      <button 
      type = "submit"
      className = "btn"
     onClick = {this.handleSubmit}
    disabled = {!this.state.newItem.length}>
        add me
      </button>
      <button className= "btn" onClick = {this.getItems}>chores till now</button>

     
      <div className = "list">

        <ul>
          
          {this.state.list1.map(item => {
            return(
              <li key = {item.uid}>
                <input type = "checkbox"
                
                name = "idDone"
                checked = {item.isDone}
                onChange = {() => {}} 
                />

                {item.value}
                <button
                className = "btn"
                onClick = {this.deleteItem}>done</button>
                </li>
                );
                
            })}

          {/* <li>
            <input type = "checkbox" name = "" id = ""/> Morning StandUp
            <button className = "btn"
> Delete</button><br/>
          </li> */}
          
        </ul>
      
  </div><br/>
  </div>
      </div>
      </div>
      
    );
  }
}

export default TodoApp;


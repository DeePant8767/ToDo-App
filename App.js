import React from 'react';
import logo from './OIP.png';
import "./App.css";
import { findAllByTestId } from '@testing-library/react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list : []
    };
  }

  addItem(todoValue) {
    if(todoValue!== ""){
      const newItem = {
        id: Date.now(),
        value : todoValue,
        isDone : false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState( {
        list,
        newItem: ""
      });
    }
  }


  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  updateInput (input){
    this.setState({newItem:input});
  }

  render(){
    return(
      <div>
        <img src = {logo} width = "200" alt = "300" className = "logo"></img>
        <h1 className = "app-title">TODO APP</h1>
  <div className = "container"> Add An Item...<br/>
  <input type = "text"
  className = "input-text"
  placeholder = "Write a Todo"
  required
  value = {this.state.newItem}
  onChange = {e => this.updateInput(e.target.value)}
      />
      <button 
      className = "btn"
      onClick = {() => this.addItem(this.state.newItem)}
      disabled = {!this.state.newItem.length}>
        ADD TODO
      </button>
      <div className = "list">

        <ul>
          {this.state.list.map(item => {
            return(
              <li key = {item.id}>
                <input type = "checkbox"
                name = "idDone"
                checked = {item.isDone}
                onChange = {() => {}} 
                />

                {item.value}
                <button
                className = "btn"
                onClick = {() => this.deleteItem(item.id)}>Delete</button>
                </li>

            
            );
            })}

          <li>
            <input type = "checkbox" name = "" id = ""/> Morning StandUp
            <button className = "btn"
> Delete</button><br/>
          </li>
        </ul>
      </div>
  </div>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AlunoHomepage from './components/Aluno/AlunoLogado/AlunoHomepage';
import Home from './Home'


import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.handleLoginChange = this.handleLoginChange.bind(this);
  this.handleLoginChangeOnclick = this.handleLoginChangeOnclick.bind(this);
  this.state = {loginStatus: "loggedOff"};
}
  componentWillMount(){
    let oldStorage = localStorage.getItem("loginNavegador") || " ";
    if (oldStorage == " ") this.setState({loginStatus: "loggedOff"})
    else this.setState({loginStatus: oldStorage})
    console.log(oldStorage);
  }

  handleLoginChangeOnclick(newLoginStatus,optStatus,e){
    e.preventDefault();
    this.setState({loginStatus: newLoginStatus})
    localStorage.setItem("loginNavegador", newLoginStatus)
    console.log(this.state);
    localStorage.setItem("emailSessao", optStatus);
    console.log(localStorage.getItem("emailSessao"))

  }
  handleLoginChange(newLoginStatus, optStatus){

    this.setState({loginStatus: newLoginStatus})
    localStorage.setItem("loginNavegador", newLoginStatus)
    localStorage.setItem("emailSessao", optStatus);

    console.log(this.state);
    console.log(localStorage.getItem("emailSessao"))

  }


  render() {
    return (
      <div>
        <Route path="/"  render={() => <Home handleFromParent={this.handleLoginChange} handleLogout={this.handleLoginChange} loginState={this.state.loginStatus}/>}/>
      </div>
    );
  }
}

export default App;

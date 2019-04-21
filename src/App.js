import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
        val:0,
    }
}
  componentDidMount(){
    this.setState({val:this.state.val+1});
    console.log(this.state.val);
   
    setTimeout(()=>{
    this.setState({val:this.state.val+1});
    console.log(this.state.val);
  },3000);
    setTimeout(()=>{
      this.setState({val:this.state.val+1});
      console.log(this.state.val);
    },100)
    
    this.setState({val:this.state.val+1});
    console.log(this.state.val);
}
  render() {
    const {val} =this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>{val}</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

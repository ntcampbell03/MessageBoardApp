import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';

class Child extends 

class MessageBoard extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      message: '',
      array: []
    }
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = event => {
    this.state.array.push(this.state.message);
    this.setState({
      message: ''
    });

    event.preventDefault()
  }

  render() {
    const header = 'Message Board';
    
    return(
      <div>
        <div>
          <div className ="header">{header}</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className ="board">
            <ol>
              {this.state.array.map(message => (
                <div key={message}>{message} </div>
              ))}
            </ol>
          </div>
          <div>
            <label className='label'>Message here:</label>
          </div>
          <div>
            <textarea value = {this.state.message} onChange={this.handleMessageChange} className="input"/>
          </div>
          <button type='submit' className='button'>Submit</button>
        </form>
      </div>
    );
  }
}


class Program extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <MessageBoard />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Program />);

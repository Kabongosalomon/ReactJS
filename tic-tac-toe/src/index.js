import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    /*
    React components can have state by setting this.state in their constructors. 
    this.state should be considered as private to a React component that it’s defined in. 
    Let’s store the current value of the Square in this.state, and change it when the Square is clicked
    */
   constructor(props) {
       /*
        In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
        All React component classes that have a constructor should start with a super(props) call.
       */
       super(props);
       this.state = {
           value: null,
       };
   }
    render() {
      return (
        <button className="square" 
            onClick={() => this.setState({value: 'X'})}>
            { this.state.value }
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
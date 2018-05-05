import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

class App extends React.Component {

  state = {
    makeAware: 'unaware',
    name: 'Supriya',
    age: 23,
  }


  handleEvent = (event) => {
    event.preventDefault();
    this.setState({makeAware: 'aware'});
  }

  render() {

    const { name, age } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          Hi { name }, this is my first react application
          and in five years I will be { age + 5 } years old.
        </p> */}
        <Status makeAware={this.state.makeAware}/>
        <button type="button" onClick={this.handleEvent}>click me!</button>
        <ToDo />
      </div>
    );
  }
}

// class Status extends React.Component {
//   render() {
//     return <p>I am {this.props.makeAware} of what is happening.</p>
//   }
// }

// a dumb component
const Status = (props) => <p>I am {props.makeAware} of what is happening.</p>;

export default App;

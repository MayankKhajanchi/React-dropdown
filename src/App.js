import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      here: ""
    }  
    this.handle = this.handle.bind(this);
    this.display = this.display.bind(this);
    this.drop = this.drop.bind(this);
  }
  handle = event => {
    this.setState({
      here: event.target.value.toUpperCase(),
    })
  }
  display = x => {
    alert("This is your text -- " + this.state.here);
    x.preventDefault();
  }
  drop = () => {
    const x = [1,2,3,4,5];
    const y = x.map((number) => <option key={number.toString()}>{number}</option>)
    return y;
  }
  new = () => {
    const x = document.getElementById("select");
    const y = [1,2,3,4,5];
    const z = y.map((number) => <option key={number.toString()}>{number}</option>)
    x.appendChild(z);
    alert(z);
  }
  render() {
    const z = [6,7,8,9,10];
    return (
      <div className="App">
        
        <select id="select" onClick={this.new}>
          
        </select>
        
        <form>
          <textarea onChange={this.handle}/>
          <input type="submit" onClick={this.display}/>
        </form>
        
        <p>
          {this.state.here}
        </p>

      </div>
    );
  }
}

export default App;

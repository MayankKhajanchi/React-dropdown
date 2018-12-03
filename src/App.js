import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      togg: false,
      z: [1,2,3,4,5],
      def: 'Select a number'
    }
    this.togg = this.togg.bind(this);
  }
  display = e => {
    e.preventDefault();
    alert(this.state.def);
    this.setState({
      togg: false,
      def: 'Select a number'
    })
  }
  togg = () => {
    this.setState({
      togg: !this.state.togg
    })
  }
  change = (e) => {
    this.setState({
      def: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <form>
        <select onClick={this.togg}>
          <option>{this.state.def}</option>
            {this.state.togg ? "": this.state.z.map((num) => <option key={num} onClick={this.change} value={num}>{num}</option>)}
          </select>
          <input type="submit" onClick={this.display}/>
        </form>

      </div>
    );
  }
}

export default App;

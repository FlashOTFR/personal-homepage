import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="App">
      <Cockpit />
    </div>
     );
  }
}
 
export default App;

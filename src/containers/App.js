import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit';
import TLink from '../components/TLink';


class App extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="App">
      <Cockpit />
      <TLink 
      description='A place where idiots and some smart people all act superior to one another' 
      linkurl ='http://www.reddit.com' />

      <TLink 
      description='Watch them vids, dawggggggg' 
      linkurl ='http://www.hulu.com' />

      <TLink 
      description='It is still vids, it is just googlier' 
      linkurl ='http://www.youtube.com' />
    </div>
     );
  }
}
 
export default App;

import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit';
import TLink from '../components/TLink';
import Links from '../components/Links';


class App extends Component {
  state = { 
    links: [
      {id: '001', description: 'A place where idiots and some smart people all act superior to one another',  linkurl: 'http://www.reddit.com'},
      {id: '002', description: 'Watch them vids, dawggggggg' ,  linkurl: 'http://www.hulu.com'},
      {id: '003', description: 'It is still vids, it is just googlier',  linkurl: 'http://www.youtube.com'},
      {id: '004', description: 'Ya gotta learn them SKILLZ',  linkurl: 'http://www.udemy.com'}

    ]
   }
  render() { 
    return ( 
    <div className="App">
      <Cockpit />
      <Links links={this.state.links} />
    </div>
     );
  }
}
 
export default App;

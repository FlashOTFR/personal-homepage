import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit';
import Links from '../components/Links';


class App extends Component {
  state = { 
    links: [
      {id: '001', linkurl: 'http://www.reddit.com'},
      {id: '002', linkurl: 'http://www.hulu.com'},
      {id: '003', linkurl: 'http://www.youtube.com'},
      {id: '004', linkurl: 'http://www.udemy.com'},
      {id: '005', linkurl: 'http://www.gmail.com'},
      {id: '006', linkurl: 'http://www.usaa.com'},
      {id: '007', linkurl: 'http://www.github.com'},
      {id: '008', linkurl: 'http://www.linkedin.com'},
      {id: '009', linkurl: 'http://www.indeed.com'},
      {id: '010', linkurl: 'http://www.dice.com'}
    ]
   }
  render() { 
    return ( 
    <div className="App">
      <Cockpit links={this.state.links}/>
      {/* <Links  /> */}
    </div>
     );
  }
}
 
export default App;

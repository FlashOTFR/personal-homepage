import React, { Component } from 'react';
import './style.css';


class Time extends Component {
    state = {
        date: new Date()
    }

    callMe() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }

    render() {
        return (
            <div className='time'>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {this.callMe()}
            </div>
        )
    }
}

export default Time;
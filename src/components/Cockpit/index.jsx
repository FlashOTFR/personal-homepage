import React from 'react';
import './style.css';
import pic from '../../assets/picture-min.jpg';
import Time from '../Time';


const Cockpit = (props) => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                    <h1>WELCOME RANDY</h1>
                </div>
            </div>

            <div className="row move">
                <div className="col-md-4 time-box">
                    <Time />
                </div>
                <div className="col-md-4">
                    <img src={pic} className="profpic" />
                </div>
                <div className="col-md-4 quote-box">
                    <h2>sup</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Cockpit;
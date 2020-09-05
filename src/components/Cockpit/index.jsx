import React from 'react';
import './style.css';
import pic from '../../assets/picture-min.jpg';
import Time from '../Time';
import Links from '../Links';



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
                    <div className="row">
                        <div className="col-md-12">
                    <Time />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">

                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src={pic} className="profpic" />
                </div>
                <div className="col-md-4 quote-box">

                </div>
            </div>

            <div className="row link-space">
                <div className="col-md-12 link-list">
                    <Links links={props.links} />
                </div>
            </div>
        </div>
     );
}
 
export default Cockpit;
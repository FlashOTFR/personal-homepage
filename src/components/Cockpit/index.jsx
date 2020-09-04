import React from 'react';
import './style.css';
import pic from '../../assets/picture-min.jpg';


const Cockpit = (props) => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                    <h1>WELCOME RANDY</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    
                </div>
                
                <div className="col-md-4">
                    <img src={pic} className="profpic" />
                </div>

                <div className="col-md-4">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Cockpit;
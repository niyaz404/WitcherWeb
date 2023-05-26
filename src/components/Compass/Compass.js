import React from 'react';
import '../Compass/Compass.css'
import compass from '../../assets/img/compass.svg'

const Compass = (props) => ( 
    <div className="compass-container" ref={props.compass}>
        <img src={compass} />
    </div>
);

export default Compass;

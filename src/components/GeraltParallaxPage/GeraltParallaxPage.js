import React from 'react';
import useEffect from 'react';
import '../GeraltParallaxPage/GeraltParallaxPage.css'
import backImg from '../../assets/img/img1/back1.png'
import middleImg from '../../assets/img/img1/middle1.png'
import frontImg from '../../assets/img/img1/front1.png'
import sparks from '../../assets/img/img1/sparks1.png'

const GeraltParallaxPage = (props) => (             
    <div 
    className="main-page">
        <div className="layers">
          <div className="layer title-layer"></div>
          <div className="layer layer-back" style={{backgroundImage: 'url('+backImg+')'}}></div>
          <div className="layer layer-middle" style={{backgroundImage: 'url('+middleImg+')'}}></div>
          <div className="layer layer-front" style={{backgroundImage: 'url('+frontImg+')'}}></div>
          <div className="layer layer-sparks" style={{backgroundImage: 'url('+sparks+')'}}></div>
        </div>
        <div className="delimiter"></div>
    </div>
);



export default GeraltParallaxPage;

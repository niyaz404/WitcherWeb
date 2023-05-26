import React from 'react';
import useEffect from 'react';
import './AboutWitcherPage.css'
import backImg from '../../assets/img/img2/back2.png'
import clouds from '../../assets/img/img2/clouds.png'
import griph from '../../assets/img/img2/griph.png'
import logo from '../../assets/img/img1/middle1.png'

const AboutWitcherPage = (props) => (             
    <div className="second-page">
        <div className="layers2" id="layers2">
          <div className="layer2 layer-text2">
            <img src={logo}/>
            {/* <h2>Witcher 3. Wild Hunt</h2> */}
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nobis nemo. Similique quos incidunt illo? Recusandae, unde reiciendis maxime vero dolores perspiciatis? Explicabo, facere assumenda. Ipsam quaerat omnis sequi minima!</h3>
          </div>
          <div className="layer2 layer-back2" style={{backgroundImage: 'url('+backImg+')'}}></div>
          <div className="layer2 layer-clouds" style={{backgroundImage: 'url('+clouds+')'}}></div>
          <div className="layer2 layer-griph" style={{backgroundImage: 'url('+griph+')'}}></div>
        </div>
        <div className="delimiter2"></div>
      </div>
);



export default AboutWitcherPage;

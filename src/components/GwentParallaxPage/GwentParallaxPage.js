import React from 'react';
import {useEffect} from 'react';
import '../GwentParallaxPage/GwentParallaxPage.css'
import gera from '../../assets/img/gwent1/gera.png'
import ciri from '../../assets/img/gwent1/ciri.png'
import logo from '../../assets/img/gwent1/logo.png'
let api;

function GwentParallaxPage(props){ 
    useEffect(()=> {
        props.gwentPage.current.style.cssText+=`--gwentPageOffset:${Math.trunc(props.gwentPage.current.offsetTop)}px`; 
        addEventListener();
        return () => removeEventListeners();
    });

    const addEventListener = ()=>{
        window.addEventListener("resize", resizeHandler);
    }

    const removeEventListeners = ()=>{
        window.removeEventListener("resize", resizeHandler);
    }
    const resizeHandler = (e)=>{
        props.gwentPage.current.style.cssText+=`--gwentPageOffset:${Math.trunc(props.gwentPage.current.offsetTop)}px`; 
      }
    return (             
    <div className="gwent-page" ref={props.gwentPage}>
        <div className="layers3" id="layers3">
          <div className="layer3 layer-back3"></div>
          <div className="layer3 layer-gera" style={{backgroundImage: 'url('+gera+')'}}></div>
          <div className="layer3 layer-ciri" style={{backgroundImage: 'url('+ciri+')'}}></div>
          <div className="layer3 layer-logo" style={{backgroundImage: 'url('+logo+')'}}></div>
          {/* <div className="layer3 dark-logo" id="dark-layer1"></div> */}
        </div>
        
    </div>
);
}

export default GwentParallaxPage;

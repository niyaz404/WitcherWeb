import React from 'react';
import {useEffect} from 'react';
import './WolfParallaxPage.css'
import backImg from '../../assets/img/img4/geraciri.jpg'
import frontImg from '../../assets/img/img4/wolf-bg.png'

function WolfParallaxPage(props){ 
  useEffect(()=> {
      props.wolfParallaxPage.current.style.cssText+=`--wolfPageOffset:${Math.trunc(props.wolfParallaxPage.current.offsetTop)}px`; 
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
      props.wolfParallaxPage.current.style.cssText+=`--wolfPageOffset:${Math.trunc(props.wolfParallaxPage.current.offsetTop)}px`; 
    }
  return (               
    <div 
    className="after-sticky-page" ref={props.wolfParallaxPage}>
        <div className="layers4">
          <div className="layer4 title-layer">
          </div>
          <div className="layer4 layer-back4" style={{backgroundImage: 'url('+backImg+')'}}></div>
          <div className="layer4 layer-front4" style={{backgroundImage: 'url('+frontImg+')'}}></div>
        </div>
        <div className="delimiter3"></div>
    </div>
);}

export default WolfParallaxPage;

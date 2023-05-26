import React from 'react';
import { useRef, useEffect, useState,useLayoutEffect } from "react";
import './App.css';
import Header from './components/Header/Header'
import Compass from './components/Compass/Compass';
import GeraltParallaxPage from './components/GeraltParallaxPage/GeraltParallaxPage'
import AboutWitcherPage from './components/AboutWitcherPage/AboutWitcherPage';
import StickyPage from './components/StickyPage/StickyPage'
import WolfParallaxPage from './components/WolfParallaxPage/WolfParallaxPage';
import GwentParallaxPage from './components/GwentParallaxPage/GwentParallaxPage';
import AboutGwentPage from './components/AboutGwentPage/AboutGwentPage';
import GwentCardPage from './components/GwentCardPage/GwentCardPage';
import GwentSliderPage from './components/GwentSliderPage/GwentSliderPage';
import GwentHorizontalPage from './components/GwentHorizontalPage/GwentHorizontalPage';

let body = document.body;
let stickyPageoffsetTop;
let stickyPageScrollToY;
let hPageoffsetTop;
let hPagescrollToY;

function App() {  

const compass = useRef(null);
const gwentPage = useRef(null);
const wolfParallaxPage = useRef(null);
const stickyPage = useRef(null);
const stickyFirst = useRef(null);
const stickyFirstImg = useRef(null);
const stickyFrontLayer = useRef(null);
const hWrapper = useRef(null);
const hContent = useRef(null);
const hLine = useRef(null);

const [size, setSize] = useState({});
  const content = useRef();

function getHorizontalScrollLength(){
  let childrenCount = Array.from(hLine.current.children).length;
  return hLine.current.offsetWidth * ((childrenCount - 1)/childrenCount);
}
function getStickyScrollLength(){
  let childrenCount = Array.from(stickyFirst.current.children).length;
  return stickyFirst.current.offsetHeight * ((childrenCount - 1)/childrenCount);
}
useEffect(()=> {
  hPageoffsetTop = hContent.current.offsetTop;
  hPagescrollToY=hPageoffsetTop+getHorizontalScrollLength();
  stickyPageoffsetTop=stickyPage.current.offsetTop;
  stickyPageScrollToY = stickyPageoffsetTop + getStickyScrollLength();
  addEventListeners();
  
  return () => removeEventListeners();
});

const addEventListeners = ()=>{
  window.addEventListener("resize", resizeHandler);
  window.addEventListener('scroll',scrollHandlers);
}
const removeEventListeners = ()=>{
  window.removeEventListener('scroll', scrollHandlers);
  window.removeEventListener('resize', resizeHandler);
}
const resizeHandler = (e)=>{
  hPageoffsetTop = hContent.current.offsetTop;
  hPagescrollToY=hPageoffsetTop + getHorizontalScrollLength();
}
const OnWheel = (e) => {
  compass.current.style.cssText+=`transform:rotate(${Math.trunc(window.scrollY/10)}deg);`;
  if(window.scrollY < stickyPage.current.offsetTop){
    stickyFrontLayer.current.style.opacity=1;
  }else if(window.scrollY >= stickyPage.current.offsetTop && window.scrollY <= (stickyPage.current.offsetTop +window.innerHeight)){  
      stickyFirstImg.current.style.height = 100 +'vh';
      stickyFirstImg.current.style.width =100 +'vw';
      stickyFrontLayer.current.style.opacity=1 - stickyFirst.current.offsetTop/(stickyFirst.current.offsetHeight/2);
  }else if(window.scrollY >= (stickyPage.current.offsetTop +window.innerHeight*0.5) && window.scrollY <= (stickyPage.current.offsetTop +window.innerHeight*1.5)){
      stickyFirstImg.current.style.height = ((1 - (window.scrollY - (stickyPage.current.offsetTop + window.innerHeight))/window.innerHeight)*100)+'vh';
      stickyFirstImg.current.style.width = ((1 - (window.scrollY - (stickyPage.current.offsetTop + window.innerHeight))/window.innerHeight)*100)+'vw';
  }
  else{
      stickyFrontLayer.current.style.opacity=0;
      stickyFirstImg.current.style.height = 50 +'vh';
      stickyFirstImg.current.style.width =50 +'vw';
  }
  if(window.scrollY>=hPageoffsetTop && window.scrollY<=hPagescrollToY){        
      hLine.current.style.left=`${(window.scrollY - hPageoffsetTop)*-1}px`;
  }
};

function onScroll(e){
  e.preventDefault();
  body.style.cssText+=`--scrollTop:${Math.trunc(window.scrollY)}px`;  
}

const scrollHandlers = e=>{
  onScroll(e)
  OnWheel(e)
};

return(    
    <main id="smooth-wrapper">
      <Header/>
      <Compass compass={compass}></Compass>
      <div className="content" id="smooth-content" ref={content}>
        <GeraltParallaxPage></GeraltParallaxPage>
        <AboutWitcherPage></AboutWitcherPage>
        <WolfParallaxPage wolfParallaxPage={wolfParallaxPage}></WolfParallaxPage>
        <StickyPage stickyPage={stickyPage} stickyFirst={stickyFirst} stickyFrontLayer={stickyFrontLayer} stickyFirstImg={stickyFirstImg}></StickyPage>
        <AboutGwentPage></AboutGwentPage>
        <GwentParallaxPage gwentPage={gwentPage}></GwentParallaxPage>
        <GwentHorizontalPage hContent={hContent} hLine={hLine} hWrapper={hWrapper}></GwentHorizontalPage>
        <GwentCardPage></GwentCardPage> 
        <GwentSliderPage></GwentSliderPage>       
      </div>          
    </main>  
  );
}

export default App;


//gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const main = useRef();
//   const smoother = useRef();

//   const scrollTo = () => {
//     smoother.current.scrollTo('.box-c', true, 'center center');
//   };

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // create the smooth scroller FIRST!
//       smoother.current = ScrollSmoother.create({
//         smooth: 4, // seconds it takes to "catch up" to native scroll position
//         effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
//       });
//       ScrollTrigger.create({
//         trigger: '.second-page',
//         pin: true,
//         start: 'center center',
//         end: '+=300',
//         markers: true,
//       });
//     }, main);
//     return () => ctx.revert();
//   }, []);

// function getCssProperty(elem, property){
//   return window.getComputedStyle(elem,null).getPropertyValue(property);
// }
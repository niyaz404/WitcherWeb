import React, { useRef } from 'react';
import {useEffect} from 'react';
import '../GwentHorizontalPage/GwentHorizontalPage.css'
import factions from '../../assets/img/horizontalGwent/frac.jpg'
import north from '../../assets/img/horizontalGwent/north.jpeg'
import nilf from '../../assets/img/horizontalGwent/nilf2.jpeg'
import elf from '../../assets/img/horizontalGwent/elf2.jpeg'
import beast from '../../assets/img/horizontalGwent/beasts.jpeg'
import skellige from '../../assets/img/horizontalGwent/skellige2.jpeg'
import { clearConfig } from '../../libs/G1/js/purify.min';

let hWrapper;
let child;
let offsetTop;
let scrollToY;

function GwentHorizontalPage(props){
    useEffect(()=> {
    addEventListeners(); 
  
  return () => removeEventListeners();
});
    const addEventListeners = ()=>{
    window.addEventListener("resize", resizeHandler);
    }
    const removeEventListeners = ()=>{
    window.removeEventListener('resize', resizeHandler);
    }
    const resizeHandler = (e)=>{
        if(window.scrollY>=offsetTop && window.scrollY<=scrollToY){
            window.scrollTo(0,window.scrollY - widthDif);
        }
    }
    return(    
            <div className="horizontal-page">
                <div className="vertical-content">
                    <div className="choose-faction">
                        <div className="img"><img src={factions}/></div>
                        <div className="text">
                            <h1>Choose a faction</h1>
                            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                        </div>
                    </div>                    
                </div>
                <div className="horizontal-content" id="horizontal-content" ref={props.hContent}>
                    <div className="horizontal-wrapper" id="horizontal-wrapper" ref={props.hWrapper}>
                        <div className="horizontal-line" id="horizontal-line" ref={props.hLine}>
                            <div className="faction-element">
                                <div className="faction-text">
                                    <h1>Northern Realms</h1>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                                </div>
                                <div className="faction" style={{backgroundImage: 'url('+north+')'}}></div>
                            </div>
                            <div className="faction-element">
                                <div className="faction-text">
                                    <h1>Nilfgaard</h1>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                                </div>
                                <div className="faction" style={{backgroundImage: 'url('+nilf+')'}}></div>
                            </div>
                            <div className="faction-element">
                                <div className="faction-text">
                                    <h1>Scoia'tael</h1>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                                </div>
                                <div className="faction" style={{backgroundImage: 'url('+elf+')'}}></div>
                            </div>
                            <div className="faction-element">
                                <div className="faction-text">
                                    <h1>Monsters</h1>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                                </div>
                                <div className="faction" style={{backgroundImage: 'url('+beast+')'}}></div>
                            </div>
                            <div className="faction-element">
                                <div className="faction-text">
                                    <h1>Skellige</h1>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur iste distinctio! Aspernatur, dolores vero? Aliquid, ratione totam? Alias ipsum numquam illo tenetur similique iusto sapiente illum, vitae consectetur repudiandae! Amet error praesentium atque ex aspernatur? Perspiciatis fuga animi voluptatem sit est qui aperiam.</h3>
                                </div>
                                <div className="faction" style={{backgroundImage: 'url('+skellige+')'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default GwentHorizontalPage;

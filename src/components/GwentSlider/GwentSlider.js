import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './GwentSlider.css'
import GwentCard from '../GwentCard/GwentCard'
import Modal from "../Modal/Modal"
import left from '../../assets/img/gwentSlider/left-arrow-icon.png'
import right from '../../assets/img/gwentSlider/right-arrow-icon.png'
let api;

let cards=[];
let leftCards=[];
let rightCards=[];
let selectedCards=[];
let cardDataset = [];
const isLeft = -1;
const isSelected = 0;
const isRight = 1;
let modalContent;
let videoSrc;

function GwentSlider(props) {

    useEffect(() => {
        cards = Array.from(props.container.current.children);
        leftCards = cards.filter((item) => { return item.className.indexOf("left") >= 0 });
        rightCards = cards.filter((item) => { return item.className.indexOf("right") >= 0 });
        selectedCards = cards.filter((item) => { return item.className.indexOf("selected") >= 0 });
        SetIndex();
    })

    function Left(e) {
        if (selectedCards.length > 0) {
            selectedCards[0].classList.remove('selected');
            selectedCards[0].classList.add('left');
            leftCards.push(selectedCards.pop());
            leftCards[leftCards.length - 1].style.cssText += `--cardIndex:${leftCards.length - 1}`;
        }
        if (rightCards.length > 0) {
            rightCards[rightCards.length - 1].classList.remove('right');
            rightCards[rightCards.length - 1].classList.add('selected');
            selectedCards.push(rightCards.pop());
            selectedCards[0].style.cssText += `--cardIndex:${0}`;
        }
    }
    function Right(e) {
        if (selectedCards.length > 0) {
            selectedCards[0].classList.remove('selected');
            selectedCards[0].classList.add('right');
            rightCards.push(selectedCards.pop());
            rightCards[rightCards.length - 1].style.cssText += `--cardIndex:${rightCards.length - 1}`;
        }
        if (leftCards.length > 0) {
            leftCards[leftCards.length - 1].classList.remove('left');
            leftCards[leftCards.length - 1].classList.add('selected');
            selectedCards.push(leftCards.pop());
            selectedCards[0].style.cssText += `--cardIndex:${0}`;
        }
    }
    function SetIndex() {
        for (let i = 0; i < leftCards.length; i++) {
            leftCards[i].style.cssText += `--cardIndex:${i}`;
        }
        for (let i = 0; i < rightCards.length; i++) {
            rightCards[i].style.cssText += `--cardIndex:${rightCards.length - 1 -i}`;
        }
        rightCards=rightCards.reverse();
    }
    function openModal(id){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.gwent.one/?key=data&language=ru&id=${id}&response=html&html=href.keywords.linkname`,false);        
        xhr.send();
        modalContent=xhr.responseText;

        xhr.open('GET', `https://api.gwent.one/?key=data&language=ru&id=${id}&response=json&html=href.keywords.linkname`);
        xhr.responseType='json';
        xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8"); 
        xhr.onload=async ()=> {
            let response = xhr.response.response[0].attributes;
            setSelectedFaction(response.faction.toLowerCase());
            setSelectedPower(response.power);
            setSelectedProvision(response.provision);
          }  
        xhr.send();
        setSelectedId(id);
        //modalContent+=`<div class="video-wrap" data-provision=${selectedProvision} data-faction=${selectedFaction} data-power=${selectedPower}><video src="https://gwent.one/video/card/premium/${id}.webm" type="video/webm" autoPlay="autoplay"></video><div class="card-frame"></div><div class="card_provision"><div class="card-prov"></div></div><div class="card-power-back"><div class="card-power"></div></div></div>`;
        videoSrc=`https://gwent.one/video/card/premium/${id}.webm`;
        setModalActive(true);
    }

    function closeModal(){
        setModalActive(false);
        videoSrc = "";
    }

    const [modalActive,setModalActive] = useState(false);
    const [selectedId,setSelectedId] = useState();
    const [selectedFaction,setSelectedFaction] = useState();
    const [selectedPower,setSelectedPower] = useState();
    const [selectedProvision,setSelectedProvision] = useState();
    const onClick=(event)=> { if(event.currentTarget.className.indexOf("selected") >= 0) openModal(event.currentTarget.id)};

    return (
        <div className="gwent-slider">
            <div className="arrow left-arrow" onClick={e => Left(e)}>
                {/* <img src={left} /> */}
                <span className="material-icons-outlined expand">expand_more</span>
                </div>
            <div className="card-container" ref={props.container}>
                {
                    props.cardIds.map(id=>{return(
                        <GwentCard key={id} cardId={id} id={id} state='left' onClick={(event)=>onClick(event)}></GwentCard>
                    )})
                }
            </div>
            <div className="arrow right-arrow" onClick={e => Right(e)}>
                {/* <img src={right} /> */}
                <span className="material-icons-outlined expand">expand_more</span>
            </div>
            <Modal isActive={modalActive} faction={selectedFaction} provision={selectedProvision} power={selectedPower} videoSrc={videoSrc} setActive={closeModal} content={modalContent} cardId={selectedId}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default GwentSlider;
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './GwentSlider.css'
import GwentCard from '../GwentCard/GwentCard'
import GwentCardInfo from '../GwentCardInfo/GwentCardInfo'
import Modal from "../Modal/Modal"

let leftCards=[];
let rightCards=[]
let currentCard;
let cardInfo;

function GwentSlider(props) {
    const [cards, setCards] = useState([])
    const [current,setCurrent] = useState(-1);
    const [modalActive,setModalActive] = useState(false);
    const [selectedCard,setSelectedCard] = useState();
    const onClick=(event)=> { console.log(event.currentTarget); if(event.currentTarget.className.indexOf("selected") >= 0) openModal(event.currentTarget.id)};


    const setCurrentState = function(newCurrent){
        if((newCurrent<current && newCurrent < -1) || (newCurrent>current && newCurrent>cards.length))
            return;
        setCurrent(newCurrent);
    }
    const setCardsState = function(rightDeck,_currentCard,leftDeck){
        if(rightDeck.length + leftDeck.length !== cards.length && _currentCard === undefined){
            setCards([...cards]);
        }
        else if(_currentCard === null || _currentCard === undefined){
            setCards([...rightDeck,...leftDeck]);
        } else
        setCards([...rightDeck,_currentCard,...leftDeck]);
    }

    useEffect(()=>{
        let index = props.cardIds.length;
        let newCards = props.cardIds.map(id=>{return {id:id,state:"left",index: index--}});
        setCards([...newCards]);

    },[props.cardIds]);

    function SwipeRight(){  
        let newCurrent = current + 1;      
        let filteredcards =cards.filter((item, idx)=>(idx!==newCurrent));
        let index = 0;
        rightCards=filteredcards.slice(0,newCurrent).map(el => ({...el, state: 'right', index:index++}));
        index = cards.length - newCurrent;
        leftCards=filteredcards.slice(newCurrent).map(el => ({...el, state: 'left',index:index--}));
        if(newCurrent<cards.length){
            currentCard={
                ...cards[newCurrent],
                state:'selected'
            }
        }
        else currentCard=null;        
        setCurrentState(newCurrent);
        setCardsState(rightCards,currentCard,leftCards);
    }
    function SwipeLeft(){
        let newCurrent = current - 1;
        let index = 0;        
        let filteredcards =cards.filter((item, idx)=>(idx!==newCurrent));
        rightCards=filteredcards.filter( (item,idx)=> idx<newCurrent).map(el => ({...el, state: 'right',index:index++}));
        index = cards.length - newCurrent;
        leftCards=filteredcards.filter( (item,idx)=> idx>=newCurrent).map((el) => ({...el, state: 'left',index:index--}));
        if(newCurrent>=0){
            currentCard = cards[newCurrent];
            currentCard={
                ...currentCard,
                state:'selected'
            }
        }else currentCard=null;
        setCurrentState(newCurrent);
        setCardsState(rightCards,currentCard,leftCards);
    }
    function openModal(id){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.gwent.one/?key=data&language=ru&id=${id}&response=html&html=href.keywords.linkname`,false);        
        xhr.send();
        cardInfo=xhr.responseText;

        xhr.open('GET', `https://api.gwent.one/?key=data&language=ru&id=${id}&response=json&html=href.keywords.linkname`);
        xhr.responseType='json';
        xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8"); 
        xhr.onload=async ()=> {
            let response = xhr.response.response[0].attributes;
            let card={
                id:id,
                faction:response.faction.toLowerCase(),                
                rarity:response.rarity.toLowerCase(),
                power:response.power,
                provision:response.provision,
                description:cardInfo
            }
            setSelectedCard(<GwentCardInfo card={card} props={selectedCard}></GwentCardInfo>);
          }  
        xhr.send();
        
        setModalActive(true);
    }

    return (
        <div className="gwent-slider">
            <div className="arrow left-arrow" onClick={e => SwipeLeft(e)}>
                <span className="material-icons-outlined expand">expand_more</span>
                </div>
            <div className="card-container" >
                {
                    cards.map(card=>{return(
                        <GwentCard key={card.id} id={card.id} cardId={card.id} state={card.state} index={card.index} onClick={(event)=>onClick(event)}></GwentCard>
                    )})
                }
            </div>
            <div className="arrow right-arrow" onClick={e => SwipeRight(e)}>
                <span className="material-icons-outlined expand">expand_more</span>
            </div>
            <Modal isActive={modalActive} setActive={setModalActive} content={selectedCard}></Modal>
        </div>
    );
}

export default GwentSlider;
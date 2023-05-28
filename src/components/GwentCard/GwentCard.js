import React from 'react';
import { useEffect, useState } from 'react';
import './GwentCard.css'
import card from '../../assets/img/horizontalGwent/card.jpg'

function GwentCard(props) {
    const style = { "--cardIndex": props.index };
    const [data, setData] = useState({});

    useEffect(() => {        
        getCard();        
    },[])
    async function getCard() {
        return fetch(`https://api.gwent.one/?key=data&id=${props.cardId}&response=html&html=href.keywords`).then(res => res.text()).then(res => {  
        setData(res);
        })
    }
    return (
        <div key={props.id} id={props.id} className={'card ' + props.state} style={style} onClick={(e)=>props.onClick(e)}  state={props.state} dangerouslySetInnerHTML={{__html:`<img src=${card} /> `+data}}></div>
    );
}

export default GwentCard;

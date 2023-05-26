import React from 'react';
import { useEffect, useState } from 'react';
import './GwentCard.css'
import card from '../../assets/img/horizontalGwent/card.jpg'

function GwentCard(props) {
    const [data, setData] = useState({});

    const [state, setState] = useState({});

    const handleMove = (_state) => {
        setState(_state);
    };
    useEffect(() => {
        getCard(props.cardId);
        setState('left');
    },[])
    async function getCard(id) {
        return fetch(`https://api.gwent.one/?key=data&id=${id}&response=html&html=href.keywords`).then(res => res.text()).then(res => {
            setData(res);
        })
    }
    return (
        <div key={props.cardId} id={props.id} className={'card ' + props.state}  onClick={(e)=>props.onClick(e)}  state={props.state} dangerouslySetInnerHTML={{__html:`<img src=${card} /> `+data}}></div>
    );
}

export default GwentCard;

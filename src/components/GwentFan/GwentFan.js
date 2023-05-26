import React from 'react';
import { useEffect } from 'react';
import './GwentFan.css'
import GwentCard from '../GwentCard/GwentCard'


function GwentFan(props) {

    useEffect(() => {
    })
    let index=1;

    return (
        <div className="deck">
            {
                props.cardIds.map(id=>{return(
                    <GwentCard key={id} cardId={id} id={'card'+index++} state={''}></GwentCard>
                )})
            }
        </div>
    );
}

export default GwentFan;
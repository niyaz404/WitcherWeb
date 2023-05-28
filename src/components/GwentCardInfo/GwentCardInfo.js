import React from 'react';
import { useEffect, useState } from 'react';
import './GwentCardInfo.css'

function GwentCardInfo({card}) {
    console.log(card);
    return (
        <div className="card-info">
            <div className="card-description" dangerouslySetInnerHTML={{__html:card.description}}></div>
            <div className="video-wrap" data-rarity={card.rarity} data-provision={card.provision} data-faction={card.faction} data-power={card.power}>
                <video src={`https://gwent.one/video/card/premium/${card.id}.webm`} type="video/webm" autoPlay="autoplay"></video>
                <div className="card-frame"></div>
                <div className="card_provision">
                    <div className="card-prov"></div>
                </div>
                <div className="card-power-back">
                    <div className="card-power"></div>
                </div>
                <div className="card-rarity"></div>
            </div>
        </div>
    );
}

export default GwentCardInfo;

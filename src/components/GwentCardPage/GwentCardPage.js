import React from 'react';
import {useEffect, useRef} from 'react';
import '../GwentCardPage/GwentCardPage.css'
import GwentFan from '../GwentFan/GwentFan'
import bg from '../../assets/img/gwent2/gw.jpg'

function GwentCardPage(props) {
    const fanCardIds = [112102,112104,112101,112106,112108,201660]
    
    return (             
    <div className="gwent-page3">
        <div className="cards-bg">
            <img src={bg} />
            <GwentFan cardIds={fanCardIds}></GwentFan>
        </div>
        <div className="delimiter"></div>     
    </div>
);}

export default GwentCardPage;

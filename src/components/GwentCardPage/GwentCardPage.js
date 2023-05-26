import React from 'react';
import {useEffect, useRef} from 'react';
import '../GwentCardPage/GwentCardPage.css'
import GwentSlider from '../GwentSlider/GwentSlider'
import GwentFan from '../GwentFan/GwentFan'
import G1api from '../../libs/G1/js/G1api.js'
import '../../libs/G1/css/G1card.css.map'
import bg from '../../assets/img/gwent2/gw.jpg'
import card from '../../assets/img/horizontalGwent/card.jpg'

function GwentCardPage(props) {
    const fanCardIds = [112102,112104,112101,112106,112108,201660]
    const sliderCardIds = [112101,112104,112106,112108,112204,112208,112206,112205,112209,152107,112211,132102,132305,202195,132104];
    const container = useRef(null);
    
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

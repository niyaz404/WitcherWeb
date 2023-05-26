import React from 'react';
import {useEffect, useRef} from 'react';
import '../GwentSliderPage/GwentSliderPage.css'
import GwentSlider from '../GwentSlider/GwentSlider'
import bg from '../../assets/img/gwent2/gw.jpg'
import card from '../../assets/img/horizontalGwent/card.jpg'
import gunter from '../../assets/img/gunter.jpg'
import end from '../../assets/img/end.jpg'
import cards from '../../assets/img/141.jpg'
import cards2 from '../../assets/img/cards2.jpg'
import cards3 from '../../assets/img/cards3.jpg'


function GwentSliderPage(props) {
    const sliderCardIds = [112101,112104,112106,112108,112204,112208,112206,112205,112209,152107,112211,132102,132305];
    //const sliderCardIds = [{id: 112101, state: 'left'}]
    const container = useRef(null);
    
    return (             
    <div className="slider-page">
        <img src={gunter} className="slider-bg"/>
        <GwentSlider container={container} cardIds={sliderCardIds}></GwentSlider>       
    </div>
);}

export default GwentSliderPage;

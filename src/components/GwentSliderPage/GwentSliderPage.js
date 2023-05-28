import React from 'react';
import {useEffect, useRef} from 'react';
import '../GwentSliderPage/GwentSliderPage.css'
import GwentSlider from '../GwentSlider/GwentSlider'
import gunter from '../../assets/img/gunter.jpg'


function GwentSliderPage(props) {
    const sliderCardIds = [112101,112104,112106,112108,112204,112208,112206,112205,112209,152107,112211,132102,132305];
    const container = useRef(null);
    
    return (             
    <div className="slider-page">
        <img src={gunter} className="slider-bg"/>
        <GwentSlider container={container} cardIds={sliderCardIds}></GwentSlider>       
    </div>
);}

export default GwentSliderPage;

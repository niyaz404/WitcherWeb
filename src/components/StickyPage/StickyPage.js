import React from 'react';
import {useRef} from 'react';
import '../StickyPage/StickyPage.css'
import slide1 from '../../assets/img/img3/amaz.jpg'
import slide2 from '../../assets/img/img3/amaz2.jpg'
import slide3 from '../../assets/img/img3/amaz3.jpg'
import slide4 from '../../assets/img/img3/amaz4.jpg'
import slide5 from '../../assets/img/img3/amaz5.jpg'


function StickyPage(props) {    
    
    return (             
    <div className="sticky-page" ref={props.stickyPage} >
        <div className="sticky-container" id="sticky-container">
            <div className="sticky-first" ref={props.stickyFirst}>                
                <div className="sticky-first-img" style={{backgroundImage: 'url('+slide1+')'}} ref={props.stickyFirstImg}>
                    <div className="front-layer"ref={props.stickyFrontLayer}>
                        <div className="dimmed"></div>
                        <div className="sticky-title"><h1>Amazing World</h1></div>
                    </div>
                </div>        
            </div>
        </div>
        <img className="sticky-img" src={slide2} />
        <img className="sticky-img" src={slide3} />
        <img className="sticky-img" src={slide4} />
        <img className="sticky-img" src={slide5} />
    </div>
);}



export default StickyPage;

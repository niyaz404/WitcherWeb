import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Modal.css'

function Modal(props) {
    return (
        <div className={props.isActive?"modal active":"modal"} onClick={()=>props.setActive()}>
            <div className={props.isActive?"modal-content active":"modal-content"} onClick={e=>e.stopPropagation()} 
            //dangerouslySetInnerHTML={{__html:props.children + `<div class="video-wrap" data-provision=${props.card} data-faction=${props.card} data-power=${props.card}><video src="${props.videoSrc}" type="video/webm" autoPlay="autoplay"></video><div class="card-frame"></div><div class="card_provision"><div class="card-prov"></div></div><div class="card-power-back"><div class="card-power"></div></div></div>`}}>    
            //dangerouslySetInnerHTML={{__html:props.children}}
                >
                    {props.content}
            </div>
        </div>
    );
}

export default Modal;
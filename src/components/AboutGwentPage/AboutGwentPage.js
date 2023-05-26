import React from 'react';
import useEffect from 'react';
import '../AboutGwentPage/AboutGwentPage.css'
import G1api from '../../libs/G1/js/G1api.js'
import '../../libs/G1/css/G1card.css.map'
import gera from '../../assets/img/gwent2/gera.jpg'
import ciri from '../../assets/img/gwent2/ciri.jpg'
import nit from '../../assets/img/gwent2/nit.jpg'
import yen from '../../assets/img/gwent2/yen.jpg'
let api;

const AboutGwentPage = (props) => (             
    <div className="gwent-page2">
        <div className="article">
            <div className="article-text">
                <h1>GWENT</h1>
                <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi tempora necessitatibus? Molestias ipsa quasi iste rerum nam perferendis officia quis perspiciatis. Quo illo architecto, aperiam accusantium rerum at necessitatibus!</h2></div>
            <div className="article-imgs">
                <img className="article-img article-img-left" id="article-img1" src={ciri}/>
                <img className="article-img article-img-right" id="article-img2" src={nit}/>
                <img className="article-img article-img-left" id="article-img3" src={gera}/>
                <img className="article-img article-img-right" id="article-img4" src={yen}/>
            </div>
        </div>
    </div>
);

window.addEventListener( 'load', () => {
	api = new G1api();
	//api.listen('.G1-load');
} );

export default AboutGwentPage;

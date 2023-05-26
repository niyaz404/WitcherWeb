import React from 'react';
import '../Header/Header.css'

const Header = (props) => (             
   <header>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> 
      <div className="header-logo">
            WITCHER
      </div>
      <div className="header-nav">
            <div className="header-nav-item">
               <a href="">HOME</a>
            </div>
            <div className="header-nav-item">                
               <a className="noLink" href="">Gwent</a>
               <span className="material-icons-outlined expand">expand_more</span>
               <div className="submenu">
                  <div className="submenu-item">Card 1</div>
                  <div className="submenu-item">Card 2</div>
                  <div className="submenu-item">Card 3</div>
               </div>                
            </div>
            <div className="header-nav-item">
               <a className="noLink" href="">Glossary</a>
               <span className="material-icons-outlined expand">expand_more</span>
               <div className="submenu">
                  <div className="submenu-item">Character 1</div>
                  <div className="submenu-item">Character 2</div>
                  <div className="submenu-item">Character 3</div>
               </div>                
            </div>
            <div className="header-nav-item">
               <a href="">bestiary</a>
            </div>
            <div className="header-nav-item">
               <a href="">Community</a>
            </div>
            <button className="header-nav-button">Modal</button>
      </div>
   </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

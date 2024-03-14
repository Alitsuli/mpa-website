import React from 'react';
import '../App.css';
import './style/MainPage.css';
import { Button } from './Button';
import Typed from "react-typed";

function MainPage() {
  return (
    <div id="home" className="intro route bg-image background">

    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="hero-container">
          <h1 className="intro-title mb-4">Rakentamisen moniosaaja, jonka haluat omallekin työmaallesi.</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <Typed
                strings={[
                  "Pintaremontti ",
                  "Sauna- ja kylpyhuoneremontit",
                  "Keittiöremontti",
                  "Huoneistoremontti",
                  "Muu Korjausrakentaminen"
                ]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                Ota yhteyttä!
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default MainPage;
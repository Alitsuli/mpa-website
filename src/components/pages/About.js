import React from "react";
import mohsen from "../style/img/mohsen.jpeg";
import '../style/About.css';
import ContactInfo from '../ContactInfo';
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${mohsen})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hei!👋</h1>
        <br/>
        <br/>
        <p>
         MPA rakennus oy, missä laatu ja kokemus kohtaavat! Tarjoamme monipuolisia rakennusalan palveluita, erityisesti erikoistuen laatta töihin. Yli 10 vuoden kokemuksella varmistamme laadukkaat ja kestävät ratkaisut jokaiseen projektiin. Lisäksi tarjoamme ammattitaitoista palvelua betoni- ja puuelementtirakennusten korjauksissa. Oli kyseessä sitten uudisrakentaminen tai remontointi, meiltä löydät ratkaisut tarpeisiisi. Ota yhteyttä ja pyydä tarjous jo tänään!
        </p>
        <br/>
        <br/>
        <ContactInfo/>
      </div>
    </div>
  );
}

export default About;
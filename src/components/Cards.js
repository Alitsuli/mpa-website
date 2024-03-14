import React from 'react';
import './style/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projektit</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images3/IMG_7789.jpeg'
              text='Takka '
              path='/services'
            />
            <CardItem
              src='images3/e8f98972-e241-4724-aff3-752bf6df1030.JPG'
              text='Terassi'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images3/cdc59e80-17d4-4ff9-a11b-84c1211526a7.JPG'
              text='Kyplyhuone'
              path='/services'
            />
            <CardItem
              src='images3/2979f21e-2e36-4105-8124-27627ed40122.JPG'
              text='Piha'
              path='/services'
            />
            <CardItem
              src='images3/8686f14a-51ad-4011-a2f8-0493fb8387f4.JPG'
              text='Sauna'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
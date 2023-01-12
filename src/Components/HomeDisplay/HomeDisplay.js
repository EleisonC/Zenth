import React from 'react';
import './HomeDisplay.css';
import CarouselSlider from '../Carousel/Carousel';


function HomeDisplay() {
  return (
    <div className="container">
      <div className="section1">
        <div className="featuredSection">
          <div className="featuredFigure">
              <img className="featuredImage" src={require('./images/person-holding-nike-sb-suede-low-top-sneaker-1503009.jpg')} alt=""/>
              <div className="shopNote">
                <h1>NEW RELEASES</h1>
                <a href="/">Shop Now</a>
              </div>
          </div>
        </div>
        <div className="Info">
            <h3>SuperStar Shoes</h3>
            <p>View All</p>
        </div>
        <CarouselSlider />
      </div>
    </div>
  );
}

export default HomeDisplay;

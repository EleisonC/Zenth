import React from 'react';
import './Carousel.css';
import { Card } from 'react-bootstrap';
import Slider from "react-slick"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Add constants for screen size breakpoints
function CarouselSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <Slider 
      {...settings}
      >
        <Card>
          <Card.Img vatiant='top' src={require('../HomeDisplay/images/close-up-photo-of-adidas-shoes-1661470.jpg')} alt=""/>
          <Card.Body>
            <div className="itemInfo">
              <p>SuperStar Shoes</p>
              <p>15,000 RWF</p>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img vatiant='top' src={require('../HomeDisplay/images/close-up-photo-of-adidas-shoes-1661470.jpg')} alt=""/>
          <Card.Body>
            <div className="itemInfo">
              <p>SuperStar Shoes</p>
              <p>15,000 RWF</p>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img vatiant='top' src={require('../HomeDisplay/images/close-up-photo-of-adidas-shoes-1661470.jpg')} alt=""/>
          <Card.Body>
            <div className="itemInfo">
              <p>SuperStar Shoes</p>
              <p>15,000 RWF</p>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img vatiant='top' src={require('../HomeDisplay/images/close-up-photo-of-adidas-shoes-1661470.jpg')} alt=""/>
          <Card.Body>
            <div className="itemInfo">
              <p>SuperStar Shoes</p>
              <p>15,000 RWF</p>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img vatiant='top' src={require('../HomeDisplay/images/close-up-photo-of-adidas-shoes-1661470.jpg')} alt=""/>
          <Card.Body>
            <div className="itemInfo">
              <p>SuperStar Shoes</p>
              <p>15,000 RWF</p>
            </div>
          </Card.Body>
        </Card>
      </Slider>
  );
}

export default CarouselSlider;

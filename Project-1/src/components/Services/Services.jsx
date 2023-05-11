import React from 'react'
import "./Services.scss"
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/pic-3.png";
import img2 from "../../assets/pic-4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
  return (
    <div>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus="false"
        showArrows="false"
        interval={3000}
        showThumbs="false"
        showIndicators="true">
            <div>
                <img src={img1} alt="Item-1" />
                <p className='legend'>Full Stack Developer</p>
            </div>

            <div>
                <img src={img2} alt="Item-2" />
                <p className='legend'>Machine Learning Models</p>
            </div>
        
        
        
        
        </Carousel>
    </div>
  );
}

export default Services;

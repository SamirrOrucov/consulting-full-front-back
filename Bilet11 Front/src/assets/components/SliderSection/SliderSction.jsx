import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./slider.scss"
function SliderSction() {  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='SliderContainer'>
        <Slider {...settings}>
          <div className='imgs'>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="textBox">
                <h2>We help to grow  your Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam quam fuga?</p>
                <button>OUR SERVICES</button>
            </div>
          </div>
          <div className='imgs'>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="textBox">
                <h2> You help to us for grow  our Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam quam fuga?</p>
                <button>OUR SERVICES</button>
            </div>
          </div>
          <div className='imgs'>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp" />
            <div className="textBox">
                <h2>He help to them grow  their Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam quam fuga?</p>
                <button>OUR SERVICES</button>
            </div>
          </div>
        </Slider>
      
    
    </div>
  )
}

export default SliderSction
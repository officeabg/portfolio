import React from 'react'
import Swiper from 'react-id-swiper'
import { Link } from 'gatsby'
import './slider.scss'

class Slider3 extends React.Component {
  render() {
    const params = {
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1924: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1279: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    }
    return (
      <Swiper {...params}>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg2.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg3.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg4.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg5.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliologo/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/lg/sliderLg6.png"
              alt=""
            />
          </Link>
        </div>
      </Swiper>
    )
  }
}

export default Slider3

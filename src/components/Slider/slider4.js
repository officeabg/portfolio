import React from 'react'
import Swiper from 'react-id-swiper'
import { Link } from 'gatsby'
import './slider1.scss'

class Slider4 extends React.Component {
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
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1279: {
          slidesPerView: 2,
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
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm2.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm3.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm4.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm5.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliopm1/">
            <img
              className="float-left img-fluid slider4-img"
              src="http://yeya.ro/img/slider/pm/sliderPm6.png"
              alt=""
            />
          </Link>
        </div>
      </Swiper>
    )
  }
}

export default Slider4

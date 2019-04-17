import React from 'react'
import Swiper from 'react-id-swiper'
import { Link } from 'gatsby'
import './slider.scss'

class Slider2 extends React.Component {
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
          spaceBetween: 20,
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
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi3.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi4.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi5.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi6.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliouix/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/ui/sliderUi7.png"
              alt=""
            />
          </Link>
        </div>
      </Swiper>
    )
  }
}

export default Slider2

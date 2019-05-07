import React from 'react'
import Swiper from 'react-id-swiper'
import { Pagination, Navigation, Autoplay } from 'swiper/dist/js/swiper.esm'
import { Link } from 'gatsby'
import './slider.scss'

class Slider1 extends React.Component {
  render() {
    const params = {
      modules: [Pagination, Navigation, Autoplay], // Add nescessary modules here
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      shouldSwiperUpdate: true,
      rebuildOnUpdate: true,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
      },
    }
    return (
      <Swiper {...params}>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb2.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb3.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb4.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb5.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/portfoliow/">
            <img
              className="float-left img-fluid slider-img"
              src="http://yeya.ro/img/slider/web/sliderWeb6.png"
              alt=""
            />
          </Link>
        </div>
      </Swiper>
    )
  }
}

export default Slider1

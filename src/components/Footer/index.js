import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div>
    <section className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2">
                <p>&nbsp;</p>
              </div>
              <div className="col-md-7 ">
                <div className="logo-part">
                  <br />
                  <br />
                  <div className="swoosh">
                    <div className="swoosh-bar"> </div>
                    <img src="http://yeya.ro/img/logo-sm.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <a href="#"> Web Development</a>
                  </li>
                  <li>
                    <a href="#"> Web Design</a>
                  </li>
                  <li>
                    <a href="#"> Logo Creation</a>
                  </li>
                  <li>
                    <a href="#"> Frontend Development</a>
                  </li>
                  <li>
                    <a href="#"> UI/UX Design </a>
                  </li>
                  <li>
                    <a href="#"> Frontend Prototyping</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <Link to="/#" className="btn btn-three">
                  About
                </Link>
                <br />
                <Link to="/#skills" className="btn btn-three">
                  Skills
                </Link>
                <br />
                <Link to="/#portfolio-web" className="btn btn-three">
                  Portfolio
                </Link>
                <br />
                <Link to="/cv" className="btn btn-three">
                  CV
                </Link>
                <br />
                <Link to="/#contact" className="btn btn-three">
                  Contact
                </Link>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-2">&nbsp;</div>
        </div>
      </div>
    </section>
  </div>
)

export default Footer

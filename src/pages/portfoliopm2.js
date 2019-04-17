import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'
let data = require('../../content/data/pm2.json')
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'

class PortfolioWeb extends React.Component {
  render() {
    const popupboxConfig = {
      fadeIn: true,
      fadeInSpeed: 500,
    }
    return (
      <Layout>
        <Meta site={siteMetadata} title="Portfolio Web" />
        <section id="web">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">Portfolio Web Development</h1>
                  <br />
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div id="filter-wrap">
                  <div className="page-wrap">
                    <ul className=" gallery-wrap list">
                      {data.map(x => (
                        <li key={x.index} className="gallery-item">
                          <a href="#" onClick={this.openPopupbox}>
                            <div className="gallery-link">
                              <div className="gallery-name">
                                <h5>{x.celeb}</h5>
                              </div>
                              <img
                                className="headshot"
                                src={x.orig}
                                width="550"
                                alt=""
                              />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/portfoliopm1">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/portfoliopm1">
                  1
                </a>
              </li>
              <li className="page-item active">
                <span className="page-link">
                  2<span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item active">
                <span className="page-link-disabled">Next</span>
              </li>
            </ul>
          </nav>
        </section>
      </Layout>
    )
  }
}

export default PortfolioWeb

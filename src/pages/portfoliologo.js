import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'
import '../scss/logo.scss'
let data = require('../../content/data/logo.json')

class PortfolioWeb extends React.Component {
  render() {
    return (
      <Layout>
        <Meta site={siteMetadata} title="Portfolio Web" />
        <section id="web">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">Portfolio Logo Design</h1>
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
                          <div className="gallery-link">
                            <div className="gallery-name">
                              <h5>{x.galleryDepartment}</h5>
                            </div>
                            <img
                              className="headshot"
                              src={x.image}
                              width="550"
                              alt=""
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PortfolioWeb

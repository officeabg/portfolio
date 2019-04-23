import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'
import styles from '../scss/portfolio.css'
let data = require('../../content/data/pm2.json')
import Modal from 'react-responsive-modal'

class PortfolioWeb extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      index: -1,
    }
  }
  render() {
    const { open } = this.state
    return (
      <Layout>
        <Meta site={siteMetadata} title="Portfolio Web" />
        <section id="portfoliopm1">
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
                          <a href={x.link}>
                            <div className="gallery-link">
                              <div className="gallery-name">
                                <h5>{x.celeb}</h5>
                              </div>
                              <img
                                className="headshot"
                                src={x.orig}
                                width="550"
                                alt=""
                                onClick={() =>
                                  this.setState({
                                    open: true,
                                    index: x,
                                  })
                                }
                              />
                            </div>
                          </a>
                        </li>
                      ))}
                      <Modal
                        open={open}
                        onClose={() => this.setState({ open: false })}
                        center
                        classNames={{
                          transitionEnter: styles.transitionEnter,
                          transitionEnterActive: styles.transitionEnterActive,
                          transitionExit: styles.transitionExitActive,
                          transitionExitActive: styles.transitionExitActive,
                        }}
                        animationDuration={500}
                      >
                        <div className="modDal">
                          <div className="row">
                            <div className="col-lg-1 col-sm-1" />
                            <div className="col-lg-3 col-sm-10">
                              <img
                                className="img-fluid rounded portfoliom"
                                src={this.state.index.orig}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-7 col-sm-10">
                              <img
                                className="img-fluid rounded"
                                src={this.state.index.image}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-1 col-sm-1" />
                          </div>
                        </div>
                      </Modal>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
          <div className="no-gutters">
            <div className="row">
              <div className="col-lg-2 col-sm-2" />
              <div className="col-lg-8 col-sm-8">
                <ul className="pag d-flex justify-content-center">
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
              </div>
              <div className="col-lg-2 col-sm-2" />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PortfolioWeb

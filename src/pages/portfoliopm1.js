import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'
let data = require('../../content/data/pm1.json')
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
                                    index: x.index,
                                  })
                                }
                              />
                            </div>
                          </a>
                          {console.log(this.state.index)}
                        </li>
                      ))}
                      <Modal
                        open={open}
                        onClose={() => this.setState({ open: false })}
                        center
                      >
                        <img
                          className="headshot"
                          src={this.state.index.image}
                          width="1000"
                          alt=""
                        />
                      </Modal>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
          <nav>
            <ul className="pagination">
              <li className="page-item active">
                <span className="page-link-disabled">Previous</span>
              </li>
              <li className="page-item active">
                <span className="page-link">
                  1<span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item">
                <a className="page-link" href="/portfoliopm2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/portfoliopm2">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </Layout>
    )
  }
}

export default PortfolioWeb

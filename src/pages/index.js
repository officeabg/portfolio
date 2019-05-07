import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'
import '../../node_modules/devicon/devicon.css'
import Typing from 'react-typing-animation'
import Slider1 from 'components/slider/slider1'
import Slider2 from 'components/slider/slider2'
import Slider3 from 'components/slider/slider3'
import Slider4 from 'components/slider/slider4'

class Profile extends React.Component {
  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
  }
  render() {
    const { location, data } = this.props

    return (
      <Layout>
        <Meta site={siteMetadata} title="Profile" />
        <header className="text-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">&nbsp;</div>
              <div className="col-lg-4">
                <div id="typewriter">
                  <Typing>
                    <Typing.Speed ms={1} />
                    <span className="var-highlight">var</span> me =
                    <span> &#123; </span>
                    <br />
                    &nbsp;&nbsp; greeting:
                    <span className="string-highlight">'Welcome!',</span>
                    <br />
                    &nbsp;&nbsp; firstName:
                    <span className="string-highlight">'Alex',</span>
                    <br />
                    &nbsp;&nbsp; lastName:
                    <span className="string-highlight">'Bunduc',</span>
                    <br />
                    &nbsp;&nbsp; country:
                    <span className="string-highlight">'Romania',</span>
                    <br />
                    &nbsp;&nbsp; city:
                    <span className="string-highlight">'Bucharest',</span>
                    <br />
                    &nbsp;&nbsp; interests:[
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'JavaScript',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'HTML',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'CSS',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'React',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'GraphQL',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'MongoDB',</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string-highlight">'Meteor'</span>
                    <br />
                    &nbsp;&nbsp; ], <br />
                    &nbsp;&nbsp; availableForHire:
                    <span className="string-highlight">'true'</span>
                    <br />
                    };
                    <br />
                  </Typing>
                </div>
              </div>

              <div className="col-lg-3 portrait">
                <img
                  className="float-left img-fluid"
                  src="http://yeya.ro/img/me2sm.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </header>

        <section id="cv">
          <div className="header">
            <div className="container-fluid">
              <div className="row text-white">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8">
                  <div className="section-heading heading-black">
                    <h1 className="name text-left">Alex Bunduc</h1>
                    <h5>Front End Developer</h5>
                    <br />
                  </div>
                  <p className="cv-p">
                    I believe I can change the world, writing code. If I am not
                    going to change it dramatically by myself, then I am sure
                    that I am going to change it collectively with all the other
                    coders in the whole wide world by writing code in the same
                    direction... to the future.
                  </p>
                  <p className="cv-p">
                    Experienced Frontend Developer with more than 10 years of
                    experience. Frontend Development with technologies: HTML,
                    CSS, JavaScript, React. BackEnd experience with Meteor,
                    MongoDB, GraphQL. Experienced graphic designer Adobe
                    Photoshop print & web. Designed, developed & managed over 30
                    websites, portfolio below.
                  </p>

                  <div className="row cv-p">
                    <div className="col-md-4">
                      <div className="personal-details">
                        <h5>OCTOBER 30, 1979</h5>
                        <small>BIRTH</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="personal-details">
                        <h5>BUCHAREST Romania</h5>
                        <small>LOCATION</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="personal-details">
                        <h5>
                          ENGLISH <span> (Highly proficient)</span>
                        </h5>
                        <small>LANGUAGE</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="skills">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">Skills</h1>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row justify-content-md-center text-white skill-align">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-4">
                <div className="skills">
                  <h5>HTML</h5>
                  <div className="svgskill">
                    <i className="devicon-html5-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '100%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>JavaScript</h5>
                  <div className="svgskill">
                    <i className="devicon-javascript-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '70%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>CSS</h5>
                  <div className="svgskill">
                    <i className="devicon-css3-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '100%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>React</h5>
                  <div className="svgskill">
                    <i className="devicon-react-original" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '50%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>GraphQL</h5>
                  <div className="svgskill">
                    <img src="../img/graphql-white.png" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '50%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="skills">
                  <h5>Boostrap</h5>
                  <div className="svgskill">
                    <i className="devicon-bootstrap-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '100%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>UiKit</h5>
                  <div className="svgskill">
                    <img src="../img/uikit1.png" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '100%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>jQuery</h5>
                  <div className="svgskill">
                    <i className="devicon-jquery-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '90%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>Git</h5>
                  <div className="svgskill">
                    <i className="devicon-git-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '100%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                  <h5>MongoDB</h5>
                  <div className="svgskill">
                    <i className="devicon-mongodb-plain" />
                  </div>
                  <div className="health">
                    <span className="skill-bar" style={{ width: '55%' }}>
                      <span className="shade warm" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
        <section id="portfolio-web">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">Portfolio Web Development</h1>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row text-white">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <Slider1 />
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
        <section id="portfolio-ui">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">Portfolio UI/UX</h1>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row text-white">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <Slider2 />
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
        <section id="portfolio-lg">
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
            <div className="row text-white">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <Slider3 />
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
        <section id="portfolio-pm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <div className="section-heading heading-black">
                  <h1 className="name text-left">
                    Portfolio Photo Manipulation
                  </h1>
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
            <div className="row text-white">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <Slider4 />
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Profile

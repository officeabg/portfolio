import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../scss/main.scss'

class Cv extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout>
        <Meta site={siteMetadata} title="Profile" />
        <div id="print-wrapper">
          <section id="cv" className="bg-light">
            <div className="header">
              <div className="container-fluid">
                <div className="row text-white">
                  <div className="col-md-2" />
                  <div className="col-md-3">
                    <div className="profile-img">
                      <img
                        src="http://yeya.ro/img/cv-me.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="name-wrapper">
                      <h1 className="name text-left text-b">
                        Alexandru Bunduc
                      </h1>
                      <h5 className="text-b">Front End Developer</h5>
                      <hr />
                    </div>
                    <p className="cv-p text-b">
                      Experienced Frontend Developer with more than 10 years of
                      experience. Frontend Development with technologies: HTML,
                      CSS, JavaScript, React. BackEnd experience with Meteor,
                      MongoDB, GraphQL. Experienced graphic designer Adobe
                      Photoshop print & web. Designed, developed & managed over
                      30 websites.
                    </p>
                    <hr />
                    <div className="row text-white">
                      <div className="col-md-3">
                        <div className="personal-details">
                          <span className="text-b">October 30, 1979</span>
                          <br />
                          <small className="text-b">BIRTH</small>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="personal-details">
                          <span className="text-b">Bucharest Romania</span>
                          <br />
                          <small className="text-b">LOCATION</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="personal-details">
                          <span className="text-b">
                            ENGLISH
                            <span className="text-b">(Highly proficient)</span>
                          </span>
                          <br />
                          <small className="text-b">LANGUAGE</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2" />
                </div>
              </div>
            </div>
          </section>
          <section id="skills" className="white-b up">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="section-heading">
                      <h1 className="text-b heading-black">Skills</h1>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
              </div>
              <div className="row justify-content-md-center text-white skill-align">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-4">
                  <div className="skills">
                    <h5 className="text-b">HTML</h5>
                    <div className="svgskill">
                      <i className="devicon-html5-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '100%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">JavaScript</h5>
                    <div className="svgskill">
                      <i className="devicon-javascript-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '70%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">CSS</h5>
                    <div className="svgskill">
                      <i className="devicon-css3-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '100%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">React</h5>
                    <div className="svgskill">
                      <i className="devicon-react-original" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '50%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">GraphQL</h5>
                    <div className="svgskill">
                      <img src="../img/graphql-white.png" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '50%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="skills">
                    <h5 className="text-b">Boostrap</h5>
                    <div className="svgskill">
                      <i className="devicon-bootstrap-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '100%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">UiKit</h5>
                    <div className="svgskill">
                      <img src="../img/uikit1.png" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '100%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">jQuery</h5>
                    <div className="svgskill">
                      <i className="devicon-jquery-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '90%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">Git</h5>
                    <div className="svgskill">
                      <i className="devicon-git-plain" />
                    </div>
                    <div className="healthcv">
                      <span className="skill-bar" style={{ width: '100%' }}>
                        <span className="shade warm" />
                      </span>
                    </div>
                    <h5 className="text-b">MongoDB</h5>
                    <div className="svgskill">
                      <i className="devicon-mongodb-plain" />
                    </div>
                    <div className="healthcv">
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
          <section id="experience" className="bg-light up">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="section-heading">
                      <h1 className="text-b heading-black">Experience</h1>
                    </div>
                  </div>
                  <div className="row contact text-white">
                    <h1 className="name text-left text-b">Freelancer @ YeYa</h1>
                    <h5 className="text-left text-b">
                      &nbsp; &nbsp; &nbsp; 2007-Present
                    </h5>
                    <hr />
                    <p className="cv-p text-b">
                      Managing freelance jobs and everything from sales pitches,
                      presentations, finding appropriate solutions for different
                      tasks too hard coding. I cover most of the IT solutions
                      and I can provide fast, services that are included in our
                      offer. As a designer, I have a perfect connection with
                      open-source development platforms like Joomla, Wordpress,
                      Magento, and others, as well as plain HTML, CSS &
                      Javascript based websites. Ability to work with frameworks
                      like Blaze, React, Bootstrap, Uikit, and others.
                    </p>
                    <hr />
                  </div>
                  <div className="row contact text-white">
                    <h1 className="name text-left text-b">
                      Sales Manager @ Datagram
                    </h1>
                    <h5 className="text-left text-b">
                      &nbsp; &nbsp; &nbsp; 2006-2007
                    </h5>
                    <hr />
                    <p className="cv-p text-b">
                      Overseeing up to 4 members of account managers for
                      different areas of IT solutions provided. Impact sales
                      through coaching, counseling, and influencing others to
                      accomplish desired outcomes Responsible for developing
                      revenue streams in line with company strategy, focusing on
                      site-specific sales and margin growth, and critical cost
                      control Assisting the Management team in pricing and
                      preparing tender submissions and written proposals to
                      clients Communicating with clients and development team to
                      reach customers goal on a daily basis. Carrying out team
                      performance analysis.
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
              </div>
            </div>
          </section>
          <section id="education" className="bg-light up">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="section-heading">
                      <h1 className=" heading-black text-b">Education</h1>
                    </div>
                  </div>
                  <div className="row contact text-b">
                    <h1 className="name text-left text-b">
                      Management and Marketing Bachelors Degree
                    </h1>
                    <h5 className="text-left text-b"> 2006</h5>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="section-heading">
                      <h1 className=" heading-black text-b down ">
                        Personal Skills
                      </h1>
                    </div>
                    <hr />
                  </div>
                  <div className="row justify-content-md-center text-white  skill-align">
                    <div className="col-lg-6">
                      <div className="skills">
                        <h5 className="text-b">Creativity</h5>
                        <div className="svgskill">
                          <img src="../img/015-idea-2.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '100%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                        <h5 className="text-b">Organization</h5>
                        <div className="svgskill">
                          <img src="../img/011-thinking.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '70%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                        <h5 className="text-b">Team Player</h5>
                        <div className="svgskill">
                          <img src="../img/013-leadership-1.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '100%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="skills">
                        <h5 className="text-b">Communication</h5>
                        <div className="svgskill">
                          <img src="../img/010-conversation.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '80%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                        <h5 className="text-b">Problem Solving</h5>
                        <div className="svgskill">
                          <img src="../img/006-idea-3.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '90%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                        <h5 className="text-b">Social Ability</h5>
                        <div className="svgskill">
                          <img src="../img/024-empathy.png" />
                        </div>
                        <div className="healthcv">
                          <span className="skill-bar" style={{ width: '100%' }}>
                            <span className="shade warm" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </section>
          <div className="row text-white down hideprint">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4 down d-flex justify-content-center">
              <div className="button-download">
                <button
                  className="btn btn-three float-left"
                  onClick={() => window.print()}
                  value="print my cv!"
                >
                  PRINT MY CV
                </button>
                <form
                  className="float-left"
                  method="get"
                  action="/Alex-Bunduc-CV.pdf"
                >
                  <button
                    type="submit"
                    id="create-pdf"
                    className="btn btn-three float-left"
                  >
                    DOWNLOAD MY CV
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">&nbsp;</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Cv

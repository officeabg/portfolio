import React from 'react'
import './style.scss'

class Web extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/">
              <div className="btn btn-three">
                <span>About</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#skills">
              <div className="btn btn-three">
                <span>Skills</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#portfolio">
              <div className="btn btn-three">
                <span>Portfolio</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="cv">
              <div className="btn btn-three">
                <span>CV</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#contact">
              <div className="btn btn-three">
                <span>Contact</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Web

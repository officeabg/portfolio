import React from 'react'
import './style.scss'

class Mobile extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="menu-cont" id="toggle">
        <div className="overlayMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="/"
                onClick={showMenu}
              >
                <div className="btn btn-three">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="/#skills"
                onClick={showMenu}
              >
                <div className="btn btn-three">
                  <span>Skills</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="/#portfolio"
                onClick={showMenu}
              >
                <div className="btn btn-three">
                  <span>Portfolio</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="cv"
                onClick={showMenu}
              >
                <div className="btn btn-three">
                  <span>CV</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="/#contact"
                onClick={showMenu}
              >
                <div className="btn btn-three">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Mobile

import React from 'react'
import './style.scss'
import { If, Else } from 'rc-if-else'
class Navi extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
    }
  }
  render() {
    const showMenu = () => {
      this.setState(prevState => ({
        showMenu: !prevState.showMenu,
      }))
    }

    const { location, title } = this.props
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container-fluid">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <div className="swoosh logotop">
              <div className="swoosh-bar"> </div>
              <img src="http://yeya.ro/img/logo-sm.png" alt="" width="220" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={showMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
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
                <a className="nav-link js-scroll-trigger" href="#skills">
                  <div className="btn btn-three">
                    <span>Skills</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio-web">
                  <div className="btn btn-three">
                    <span>Portfolio</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="cv.php">
                  <div className="btn btn-three">
                    <span>CV</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  <div className="btn btn-three">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <If condition={this.state.showMenu}>
            <div className="overlayMenu">
              <div className="menu-cont" id="toggle">
                <div className="overlayMenu">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link js-scroll-trigger"
                        href="#wrap"
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
                        href="#skills"
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
                        href="#portfolio"
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
                        href="cv.php"
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
                        href="#contact"
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
            </div>
          </If>
        </div>
      </nav>
    )
  }
}

export default Navi

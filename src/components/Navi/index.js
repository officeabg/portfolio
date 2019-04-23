import React from 'react'
import './style.scss'
import { If, Else } from 'rc-if-else'
import { Link } from 'gatsby'

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
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <div className="swoosh logotop">
              <div className="swoosh-bar"> </div>
              <img src="http://yeya.ro/img/logo-sm.png" alt="" width="220" />
            </div>
          </Link>
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
                <Link className="nav-link js-scroll-trigger" to="/#">
                  <div className="btn btn-three">
                    <span>About</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#skills">
                  <div className="btn btn-three">
                    <span>Skills</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  to="/#portfolio-web"
                >
                  <div className="btn btn-three">
                    <span>Portfolio</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cv">
                  <div className="btn btn-three">
                    <span>CV</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/#contact">
                  <div className="btn btn-three">
                    <span>Contact</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <If condition={this.state.showMenu}>
            <div className="overlayMenu">
              <div className="menu-cont" id="toggle">
                <div className="overlayMenu">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        to="/"
                        onClick={showMenu}
                      >
                        <div className="btn btn-three">
                          <span>About</span>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        to="/#skills"
                        onClick={showMenu}
                      >
                        <div className="btn btn-three">
                          <span>Skills</span>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        to="/#portfolio"
                        onClick={showMenu}
                      >
                        <div className="btn btn-three">
                          <span>Portfolio</span>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        to="/cv"
                        onClick={showMenu}
                      >
                        <div className="btn btn-three">
                          <span>CV</span>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link js-scroll-trigger"
                        to="/#contact"
                        onClick={showMenu}
                      >
                        <div className="btn btn-three">
                          <span>Contact</span>
                        </div>
                      </Link>
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

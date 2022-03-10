import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons"

import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Layout = ({ children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <header>
        <div className="container">
          <nav
            id="content-desktop"
            className="navbar navbar-expand-md no-gutters"
          >
            <div className="col-2 text-left">
              <Link to={`/`} title={`Home`}>
                <StaticImage
                  placeholder="blurred"
                  quality={100}
                  src="../../static/logo.png"
                  height="80"
                  alt="logo"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav4"
              aria-controls="navbarNav4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center col-md-8"
              id="navbarNav4"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold"
                    to={`/about/`}
                    title={`About`}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold"
                    to={`/services/`}
                    title={`Services`}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold"
                    to={`/ministries/`}
                    title={`Ministries`}
                  >
                    Ministries
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase font-weight-bold"
                    href={`https://live.mindenbaptist.org/`}
                    title={`Online`}
                  >
                    Online
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase font-weight-bold"
                    href={`https://www.paypal.com/donate/?token=BM1n9-nwXwHflt5KsnIa3e93XzTHF7pMp3ldIsTYnGAJBtMrCr_rkhpHt5P2TPywxQpFPm&country.x=AU&locale.x=AU`}
                    title={`Tithe`}
                  >
                    Tithe
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`https://www.facebook.com/mindenbaptistchurch`}
                  title={`Facebook`}
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`https://www.youtube.com/channel/UCG9cNMHHrNMCvkh1jc_FFRA`}
                  title={`YouTube`}
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`https://www.instagram.com/valleyyouth/`}
                  title={`Instagram`}
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`https://goo.gl/maps/A5SCdgxuEL3utUqT9`}
                  title={`Location`}
                >
                  <FontAwesomeIcon icon={faMapMarker} size="1x" />
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href={`mailto:office@mindenbaptist.org`}
                  title={`Email`}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </a>
              </li>
            </ul>
          </nav>

          <nav id="content-mobile" className="nav-mobile">
            <div className="container">
              <input id="responsive-menu" type="checkbox" />
              <label for="responsive-menu">
                <Link to={`/`} title={`Home`}>
                  <StaticImage
                    placeholder="blurred"
                    quality={100}
                    src="../../static/logo.png"
                    height="80"
                    alt="logo"
                  />
                </Link>{" "}
                <span id="menu-icon"></span>
              </label>
              <div id="overlay"></div>
              <ul>
                <li>
                  <Link to={`/about/`} title={`About`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={`/services/`} title={`Services`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={`/ministries/`} title={`Ministries`}>
                    Ministries
                  </Link>
                </li>
                <li>
                  <a href={`https://live.mindenbaptist.org/`} title={`Online`}>
                    Online
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.paypal.com/donate/?token=BM1n9-nwXwHflt5KsnIa3e93XzTHF7pMp3ldIsTYnGAJBtMrCr_rkhpHt5P2TPywxQpFPm&country.x=AU&locale.x=AU`}
                    title={`Tithe`}
                  >
                    Tithe
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="fdb-block footer-large bg-dark">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>Minden Baptist Church</h1>
              <p className="paragraph-text">
                <div>978 Lowood-Minden Road Minden,</div>
                <div>Queensland, 4311 Australia</div>
              </p>
              <p className="paragraph-text">  
                <div>Senior Pastor Bruce Eckersley: +61 427 560 884</div>
                <div>bruce@mindenbaptist.org</div>
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <p className="lead">
                <a
                  href={`https://www.facebook.com/mindenbaptistchurch`}
                  className="mx-2 link"
                  title={`Facebook`}
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                  href={`https://www.youtube.com/channel/UCG9cNMHHrNMCvkh1jc_FFRA`}
                  className="mx-2 link"
                  title={`YouTube`}
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
                <a
                  href={`https://www.instagram.com/valleyyouth/`}
                  className="mx-2 link"
                  title={`Instagram`}
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
                <a
                  href={`https://goo.gl/maps/A5SCdgxuEL3utUqT9`}
                  className="mx-2 link"
                  title={`Location`}
                >
                  <FontAwesomeIcon icon={faMapMarker} size="1x" />
                </a>
                <a
                  href={`mailto:office@mindenbaptist.org`}
                  className="mx-2 link"
                  title={`Email`}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </a>
              </p>
              <p className="paragraph-text">
              <div>Copyright © 2021 Minden Baptist Church.</div>
              <div>All Rights Reserved.</div>
              </p>
              <div>
                <button className="return" onClick={handleClick}>
                  Back to top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout

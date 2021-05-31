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
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <Link href="/index.html">
                <StaticImage
                  layout="fixed"
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
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
                    className="nav-link text-uppercase font-weight-bold underline"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold underline"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold underline"
                    href="/ministries"
                  >
                    Ministries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold underline"
                    href="https://live.mindenbaptist.org/"
                  >
                    Online
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase font-weight-bold underline"
                    href="https://www.paypal.com/donate/?token=BM1n9-nwXwHflt5KsnIa3e93XzTHF7pMp3ldIsTYnGAJBtMrCr_rkhpHt5P2TPywxQpFPm&country.x=AU&locale.x=AU"
                  >
                    Tithe
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li className="nav-item">
                <Link
                  className="nav-link underline"
                  href="https://www.facebook.com/mindenbaptistchurch"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link underline"
                  href="https://www.youtube.com/channel/UCG9cNMHHrNMCvkh1jc_FFRA"
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link underline"
                  href="https://www.instagram.com/valleyyouth/"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link underline"
                  href="https://goo.gl/maps/A5SCdgxuEL3utUqT9"
                >
                  <FontAwesomeIcon icon={faMapMarker} size="1x" />
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link underline"
                  href="mailto:office@mindenbaptist.org"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="fdb-block footer-large bg-dark">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h3>Minden Baptist Church</h3>
              <Link>
                978 Lowood-Minden Road
                Minden, Queensland, 4311
                Australia
                Interim Pastor: +61 413 616 370
              </Link>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <p className="lead">
                <Link
                  href="https://www.facebook.com/mindenbaptistchurch"
                  className="mx-2"
                >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCG9cNMHHrNMCvkh1jc_FFRA"
                  className="mx-2"
                >
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </Link>
                <Link
                  href="https://www.instagram.com/valleyyouth/"
                  className="mx-2"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </Link>
                <Link href="https://goo.gl/maps/A5SCdgxuEL3utUqT9" className="mx-2">
                  <FontAwesomeIcon icon={faMapMarker} size="1x" />
                </Link>
                <Link href="mailto:office@mindenbaptist.org" className="mx-2">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </Link>
              </p>
              <Link>
                Copyright © 2020 Minden Baptist Church. All Rights Reserved.
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout

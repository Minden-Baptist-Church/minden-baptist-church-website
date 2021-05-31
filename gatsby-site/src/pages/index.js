import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Notice from "../components/notice"

export default function Home() {
  return (
    <>
      <div id="header-background">
        <Layout>
          <section id="hero">
            <div className="hero-container">
              <h1>
                <strong>Minden Baptist Church</strong>
              </h1>
              <h2>Join us this Sunday from 9:30AM | 978 Lowood-Minden Road</h2>
              <div>
                <Link
                  className="come-along text-uppercase font-weight-bold"
                  href="/services"
                >
                  <strong>Come Along</strong>
                </Link>
                <Link
                  className="watch-online text-uppercase font-weight-bold"
                  href="https://live.mindenbaptist.org/"
                >
                  <strong>Watch Online</strong>
                </Link>
              </div>
            </div>
          </section>

          <Notice />
          <section className="fdb-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-5">
                  <h1>Welcome</h1>
                  <p className="lead">
                    Minden Baptist is a contemporary, friendly and family
                    oriented congregation with ministries to all demographics.
                    We look forward to connecting with you! We hope you have a
                    warm and enjoyable experience as we worship and fellowship
                    in Christ together.
                  </p>
                </div>
                <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                  <StaticImage
                    quality={100}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="bible"
                    className="img-fluid"
                    src="../../static/bible.jpg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">
                  <StaticImage
                    quality={100}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="chatting"
                    className="img-fluid rounded-0"
                    src="../../static/chatting.svg"
                  />
                </div>
                <div className="col-12 ml-auto col-md-6 col-lg-5">
                  <h1>Watch Online</h1>
                  <p className="lead">
                    Can't make it to Minden this Sunday? Join with us Online
                    instead!
                  </p>
                  <Link
                    className="custom-button mt-4 mb-5 mb-md-0"
                    href="https://live.mindenbaptist.org/"
                  >
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-5">
                  <h1>Podcasts</h1>
                  <p className="lead">
                    Catch up or re-listen to any sermon from our wide library of
                    engaging, relevant and challenging messages.
                  </p>
                  <p className="mt-5 mt-sm-4">
                    <Link
                      className="custom-button"
                      href="https://www.youtube.com/channel/UCG9cNMHHrNMCvkh1jc_FFRA/videos"
                    >
                      Listen
                    </Link>
                  </p>
                </div>
                <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                  <StaticImage
                    quality={100}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="headphones"
                    className="img-fluid"
                    src="../../static/headphones.svg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                  <h1>Discover Minden</h1>
                  <p className="lead">
                    Minden Baptist Church was founded in 1882 and operates under
                    the Baptist Union. Please feel free to learn more about
                    Minden Baptist Church, it's values, history and beliefs.
                  </p>
                  <p className="mt-5 mt-sm-4">
                    <Link className="custom-button" href="/about">
                      Discover
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                  <h1>Ministries</h1>
                  <p className="lead">
                    Minden has ministries that extend to all demographics. Get
                    involved and explore what God can do through you.
                  </p>
                  <p className="mt-5 mt-sm-4">
                    <Link className="custom-button" href="/ministries">
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  )
}

import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Notice from "../components/notice"
import Seo from "../components/seo"

const ValleyYouth = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Valley Youth" />

          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Valley Youth</strong>
              </h1>
              <h2>Join us on Friday Nights from 7-9PM</h2>
            </div>
          </section>
          <Notice />
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>About Valley Youth!</h1>
                  <p className="lead">
                    Valley Youth is expanding and to be more effective in
                    ministering to the different needs of youth. Recently we
                    have decided to introduce two groups: VY IGNITE and VY
                    WILDFIRE. Our Mission Statement is:
                  </p>
                  <p className="lead">
                    One Community - One Truth - One Mission.
                  </p>
                </div>
                <iframe
                  title="Valley Youth Video"
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/ffb45jL9W_k"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>One Community</h1>
                  <p className="lead">
                    We believe that every person is important and that everyone
                    is welcome whether you believe in Jesus or not. Valley Youth
                    is a safe place where we aim to extend God's love to all
                    youth by showing equality to all youth as Christ commanded.
                    "Love your neighbour as yourself" - Matthew 22:39
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>One Truth</h1>
                  <p className="lead">
                    We believe that the Bible is the inspired Word of God and
                    all of it is useful for equipping our youth to live a life
                    that exalts God and brings glory to Him. "All Scripture is
                    breathed out by God and is profitable for teaching, for
                    reproof, for correction, and for training in righteousness,
                    that the man of God may be complete, equipped for every good
                    work" - 2 Tim 3:16-17
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>One Mission</h1>
                  <p className="lead">
                    We believe that we are called to play a part in God's
                    mission. "Therefore go and make disciples of all nations." -
                    Matthew 28:19
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                  <h1>So come on down and have a great time!</h1>
                  <p className="mt-5">
                    <Link
                      className="btn btn-primary"
                      href="https://goo.gl/maps/xiJDBADyzw9kuZ1p8"
                    >
                      Directions
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

export default ValleyYouth

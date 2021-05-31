import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Notice from "../components/notice"
import Seo from "../components/seo"

const ValleyKidz = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Valley Kidz" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Valley Kids</strong>
              </h1>
              <h2>
                Enabling Kids to engage with God and grow stronger in their
                Faith
              </h2>
            </div>
          </section>
          <Notice />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-5">
                <h1>About Valley Kidz</h1>
                <p className="lead">
                  Valley Kidz is a kids’ zone for those in Kindy to Grade 6. It
                  seeks to allow kids to engage with God and encourage them to
                  become true disciples of Jesus.
                </p>
              </div>
              <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                <StaticImage
                  quality={80}
                  placeholder="blurred"
                  alt="whats in the bible"
                  className="img-fluid"
                  src="../../static/whats-in-the-bible.jpg"
                />
              </div>
            </div>
          </div>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>Faith</h1>
                  <p className="lead">
                    Valley Kidz is a safe and fully supervised environment,
                    resourced by a committed team of leaders who love kids and
                    desire to see them grow in Jesus. Just imagine what God can
                    do in their lives as they begin to see themselves as God
                    created them to be. Valley Kidz is just one way of ensuring
                    kids know they are important to us at MB Church!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>Curriculum</h1>
                  <p className="lead">
                    We are currently enjoying the What’s in the Bible?
                    Curriculum. Families are able to continue the conversation,
                    with the Take Home sheets, during the following week.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>Join Valley Kidz!</h1>
                  <p className="lead">
                    Valley Kidz takes place in the church hall each Sunday
                    morning during the morning service during the school term.
                    Kids head out with the Valley Kidz Team after the first
                    worship song ready to engage in their Multi-Age Large Group
                    time and then break up into their Age appropriate groups.
                    For more information contact Tracey Jones on 0422 599 205.
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

export default ValleyKidz

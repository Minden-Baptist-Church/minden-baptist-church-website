import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ValleyYouth = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="MB Youth" />

          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>MB Youth</strong>
              </h1>
              <h2>Join us on Friday Nights from 7-9PM</h2>
            </div>
          </section>
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>About MB Youth!</h1>
                  <p className="lead">
                    MB Youth is expanding and to be more effective in
                    ministering to the different needs of youth.
                  </p>
                  <p className="lead">
                    One Community - One Truth - One Mission.
                  </p>
                </div>
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
                    is welcome whether you believe in Jesus or not. MB Youth
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
                    <a
                      className="btn btn-primary"
                      href={`https://goo.gl/maps/xiJDBADyzw9kuZ1p8`}
                      title={`Location`}
                    >
                      Directions
                    </a>
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

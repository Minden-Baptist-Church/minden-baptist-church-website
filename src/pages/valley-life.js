import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Notice from "../components/notice"
import Seo from "../components/seo"

const ValleyLife = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Valley Life" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Valley Life</strong>
              </h1>
              <h2>
                Traverse the gap between living daily life and living for good
                and for God!
              </h2>
            </div>
          </section>
          <Notice />
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>About Valley Life!</h1>
                  <p className="lead">
                    We are all about building strong relationships and
                    encouraging one another as we journey through our lives. Our
                    mission is to reach, support, build up, connect with,
                    encourage and discuss with a generation that will impact our
                    world! We endeavour to help young adults traverse the gap
                    between living daily life and living for good and for God! I
                    hope that we can connect soon but for now here's an
                    explanation of our vision and focus.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>Love</h1>
                  <p className="lead">
                    Love is at the core of our purpose and meaning. Love
                    transcends everything! It is our mission and longing that
                    love is the centre of everything that we do, say and think.
                    It is ultimately the love that Christ has shown to us
                    through his brutally beautiful death that enables and
                    empowers us to love all people!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>Relate</h1>
                  <p className="lead">
                    We strongly believe that to live a flourishing life, the way
                    life was designed to be, we must live in community. One of
                    our purposes is to relate! At Valley Life we endeavour to
                    help young adults traverse the gap between living a Godly
                    life and living day to day. Living life alone is really
                    hard! Living life together is less hard and much more
                    enriching!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col col-sm-10 col-md-8 text-left">
                  <h1>Disciple</h1>
                  <p className="lead">
                    We are committed to the call on our lives given to us by our
                    Lord Jesus Christ. Things Jesus didn't say: work your way to
                    heaven, be good enough to get to me, just try to be a good
                    person. What Jesus did say: Confess with your lips and heart
                    that Jesus is Lord and believe that his life, death, burial
                    and resurrection conquered death to pay for ransom for your
                    transgressions. Make disciples. Our focus is to build and
                    fashion strong, unashamed disciples for Christ!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                  <h1>
                    If you would like to join Valley Life, please don't hesitate
                    to visit our Church!
                  </h1>
                  <p className="mt-5">
                    <Link
                      className="btn btn-primary"
                      to={`https://goo.gl/maps/xiJDBADyzw9kuZ1p8`}
                      title={`Location`}
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

export default ValleyLife

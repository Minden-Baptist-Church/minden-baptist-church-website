import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Ministries = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Ministries" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Ministries</strong>
              </h1>
              <h2>Minden's Outreach Programs</h2>
            </div>
          </section>
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center pb-5">
                <div className="col-12 text-center">
                  <h1>Life at Minden</h1>
                  <h3>Participate in the Ministries of MB Church!</h3>
                </div>
              </div>

              <div className="row text-left align-items-center pt-5 pb-md-5">
                <div className="col-4 col-md-5">

                </div>

                <div className="col-12 col-md-5 m-md-auto">
                  <h2>
                    <strong>MB Young Adults</strong>
                  </h2>
                  <p className="lead">
                    MB Young Adults endeavours to help Young Adults traverse the gap
                    between living daily life and living for good and for God!
                  </p>
                  <p>
                    <Link href="/mb-young-adults">
                      Learn More <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="row text-left align-items-center pt-5 pb-md-5">
                <div className="col-4 col-md-5 m-md-auto order-md-5">

                </div>

                <div className="col-12 col-md-5">
                  <h2>
                    <strong>MB Youth</strong>
                  </h2>
                  <p className="lead">
                    We are a community of young people that meet together as
                    often as possible. Our main time that we all come together
                    is at MB Youth on Friday night's from 7-9pm. This is held
                    in our air-conditioned back hall at Minden Baptist Church.
                  </p>
                  <p>
                    <Link href="/mb-youth">
                      Learn More <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="row text-left align-items-center pt-5">
                <div className="col-4 col-md-5">

                </div>

                <div className="col-12 col-md-5 m-md-auto">
                  <h2>
                    <strong>MB Kids</strong>
                  </h2>
                  <p className="lead">
                    MB Kids is a kids’ zone for those in Kindy to Grade 6.
                    It seeks to allow kids to engage with God and encourage them
                    to become true disciples of Jesus. MB Kids is a safe and
                    fully supervised environment, resourced by a committed team
                    of leaders who love kids and desire to see them grow in
                    Jesus.
                  </p>
                  <p>
                    <Link to={`/mb-kids/`} title={`MB Kids`}>
                      Learn More <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="row align-items-center m-md-auto">
                <div className="col-4 col-md-5 m-md-auto order-md-5">
                  <StaticImage
                    quality={80}
                    placeholder="blurred"
                    alt="music play"
                    className="img-fluid"
                    src="../../static/musicplay.svg"
                  />
                </div>

                <div className="col-12 col-md-5">
                  <h2>
                    <strong>MusicPlay</strong>
                  </h2>
                  <p className="lead">
                    Musicplay is a vibrant, welcoming and fun place where
                    parents/carers and their children (5 years old or under) can
                    play and learn together. It aims to provide an environment
                    where children can learn to interact with other children and
                    be given play experiences that develop them intellectually,
                    creatively, physically and socially.
                  </p>
                  <p>
                    <Link to={`/musicplay/`} title={`MusicPlay`}>
                      Learn More <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="row text-left align-items-center pt-5">
                <div className="col-4 col-md-5">

                </div>

                <div className="col-12 col-md-5 m-md-auto">
                  <h2>
                    <strong>MB Women</strong>
                  </h2>
                  <p className="lead">
                    At MB Women, our hope is for you to be blessed as you
                    become one with us as we fellowship in Jesus precious name.
                    As women, our roles vary across each generation; as we plan
                    for our time together, we hope to meet you wherever you are
                    along the way, to minister, encourage, to love and honour
                    you as a woman of God.
                  </p>
                  {/* <p>
                    <Link to={`/mb-women/`} title={`MB Women`}>
                      Learn More <i className="fa fa-angle-right"></i>
                    </Link>
                  </p> */}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  )
}

export default Ministries

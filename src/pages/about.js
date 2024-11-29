import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="About" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>About Minden</strong>
              </h1>
              <h2>Learn more about Minden Baptist Church</h2>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h1>Vision Statement</h1>

                  <div className="row text-center pt-4">
                    <div className="col-12 col-md-6">
                      <p className="lead ">
                        To know God deeply and to make Him known widely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h1>Mission Statement</h1>

                  <div className="row text-center pt-4">
                    <div className="col-12 col-md-6">
                      <p className="lead">
                        Loving One Another, Building Friendships, Making
                        Disciples.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                  <h1>Minden's History</h1>
                  <p className="lead">
                    Minden Baptist Church was founded in 1882 and is a member of
                    the Queensland Baptist Union.
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
                    <Link
                      className="btn btn-primary"
                      to={`/ministries/`}
                      title={`Ministries`}
                    >
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

export default About

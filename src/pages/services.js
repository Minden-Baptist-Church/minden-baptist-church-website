import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Services = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Services" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Location & Times</strong>
              </h1>
              <h2>Join us this Sunday from 9:30AM | 978 Lowood-Minden Road</h2>
            </div>
          </section>
          <section className="fdb-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-5">
                  <h1>Church Services</h1>
                  <h3>
                    9:30AM Sundays 978 Lowood-Minden Road, Minden, Queensland,
                    4311, Australia
                  </h3>
                  <div>
                    <a
                      id="get-directions"
                      className="text-uppercase font-weight-bold"
                      href={`https://goo.gl/maps/A5SCdgxuEL3utUqT9`}
                      title={`Location`}
                    >
                      <strong>Get Directions</strong>
                    </a>
                    <Link
                      id="about-us"
                      className="text-uppercase font-weight-bold"
                      to={`/about/`}
                      title={`About`}
                    >
                      <strong>About Minden</strong>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                  <StaticImage
                    quality={80}
                    placeholder="blurred"
                    alt="blob"
                    className="img-fluid"
                    src="../../static/blob.svg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row text-center">
                <div className="col-12">
                  <h1>Service Information</h1>
                  <h4>Join the entire Church Family this Sunday from 9:30AM</h4>
                </div>
              </div>
              <div className="row text-left mt-5">
                <div className="col-12 col-md-4">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="location"
                        className="img-fluid"
                        src="../../static/location.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>Directions</strong>
                      </h3>
                      <p>
                        Locate your way to Minden Baptist Church this Sunday.
                      </p>
                      <a
                        className="text-uppercase font-weight-bold"
                        href={`https://goo.gl/maps/A5SCdgxuEL3utUqT9`}
                        title={`Location`}
                      >
                        <strong>Directions</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="car"
                        className="img-fluid"
                        src="../../static/car.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>Car Parking</strong>
                      </h3>
                      <p>
                        Plentiful on-site free parking close to the auditorium.
                      </p>
                      <a
                        className="text-uppercase font-weight-bold"
                        href={`https://goo.gl/maps/A5SCdgxuEL3utUqT9`}
                        title={`Location`}
                      >
                        <strong>View</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="baby carriage"
                        className="img-fluid"
                        src="../../static/baby-carriage.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>Parents Room</strong>
                      </h3>
                      <p>
                        A Parents Room is accessible from the main auditorium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-left pt-3 pt-sm-4 pt-md-5">


                <div className="col-12 col-md-4 pt-3 pt-sm-6 pt-md-5">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="brick"
                        className="img-fluid"
                        src="../../static/brick.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>Kids Church</strong>
                      </h3>
                      <p>
                        Let our dedicated team look after your kids on Sundays!
                      </p>
                      <Link
                        className="text-uppercase font-weight-bold"
                        to={`/mb-kids/`}
                        title={`MB Kids`}
                      >
                        <strong>Learn More</strong>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 pt-3 pt-sm-6 pt-md-5">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="video"
                        className="img-fluid"
                        src="../../static/video.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>Watch Online</strong>
                      </h3>
                      <p>
                        Can't make it this Sunday? Feel free to watch online!
                      </p>
                      <a
                        className="text-uppercase font-weight-bold"
                        href={`https://www.youtube.com/@mindenbaptistchurch/streams`}
                        title={`Online`}
                      >
                        <strong>Watch</strong>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-md-4 pt-3 pt-sm-6 pt-md-5">
                  <div className="row">
                    <div className="col-3">
                      <StaticImage
                        quality={80}
                        placeholder="blurred"
                        alt="cross"
                        className="img-fluid"
                        src="../../static/cross.svg"
                      />
                    </div>
                    <div className="col-9">
                      <h3>
                        <strong>About Us</strong>
                      </h3>
                      <p>
                        Our vision, values, team, history and what we believe.
                      </p>
                      <Link
                        className="text-uppercase font-weight-bold"
                        to={`/about/`}
                        title={`About`}
                      >
                        <strong>Discover</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.332759026325!2d152.54151045292076!3d-27.54958848293928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b96beb309a5ce4b%3A0xfe71a1b0bda7cb35!2sMinden%20Baptist%20Church!5e0!3m2!1sen!2sau!4v1592297585810!5m2!1sen!2sau"
              width="100%"
              height="600px"
              frameborder="0"
            ></iframe>
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
                    <Link className="btn btn-primary" to={`/about/`} title={`About`}>
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
                    <Link className="btn btn-primary" to={`/ministries/`} title={`Ministries`}>
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

export default Services

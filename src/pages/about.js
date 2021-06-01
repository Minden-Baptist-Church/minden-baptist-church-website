import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Notice from "../components/notice"
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

          <Notice />
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>Church at Minden</h1>
                  <p className="lead">
                    Minden Baptist is a contemporary, friendly and family
                    oriented congregation with ministries to all demographics.
                    We look forward to connecting with you! We hope you have a
                    warm and enjoyable experience as we worship and fellowship
                    in Christ together.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                  <h1>Location & Times</h1>
                  <p className="lead">
                    Come and join us! Minden Baptist Church aims to create a
                    relaxed and welcoming environment free to encounter and
                    connect with God.
                  </p>
                  <p className="mt-5 mt-sm-4">
                    <Link className="btn btn-primary" to={`/services/`} title={`Services`}>
                      Service Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h1>Church Vision</h1>

                  <div className="row text-left pt-4">
                    <div className="col-12 col-md-6">
                      <p className="lead">
                        Our heart is to be a "Philadelphia" (brotherly love)
                        type church which means brotherly love. We value
                        learning the whole Scriptures from Genesis through to
                        the gospel of Jesus Christ and beyond to the book of
                        Revelation. We value expositional teaching whole books
                        at a time, verse by verse.
                      </p>

                      <p className="lead">
                        If we can't love each other then how can we love others?
                        I believe that is what Jesus was talking about when he
                        said, "Love your neighbour as yourself."
                      </p>

                      <p className="lead">
                        Once we are truly loving each other and a loving
                        community is in the church's dna then friendships and
                        relationships with others will be the result.
                      </p>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="lead">
                        In turn this will create a platform for making disciples
                        of Jesus Christ which is our ultimate goal as
                        Christians.
                      </p>

                      <p className="lead">
                        As Christians we endeavour to keep the unity of the
                        Spirit in the bond of peace as the part of the body of
                        Christ here. But we also want to reach out to the
                        community around us.
                      </p>

                      <p className="lead">
                        MB Church has a rich history having being established
                        orginially as a German speaking church in 1882 in the
                        Minden area for German settlers who came to Brisbane
                        looking for a new life. But now in the 21st century the
                        church is reaching out to a new community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row text-left align-items-center pt-5 pb-md-5">
                <div className="col-4 col-md-5">
                  <StaticImage
                    quality={80}
                    placeholder="blurred"
                    alt="hug"
                    className="img-fluid"
                    src="../../static/hug.jpg"
                  />
                </div>
                <div className="col-12 col-md-5 m-md-auto">
                  <h2>
                    <strong>Loving One Another</strong>
                  </h2>
                  <p className="lead">
                    This part of the statement has its basis in John 13:35
                    stating, "By this all men will know that you are My
                    disciples, if you have love for one another."
                  </p>

                  <p className="lead">
                    As part of a loving community in Christ we are instructed to
                    put others first, not gossip but to positively encourage
                    each other and to stir each other to good works and
                    fruitfulness.
                  </p>
                </div>
              </div>
              <div className="row text-left align-items-center pt-5 pb-md-5">
                <div className="col-4 col-md-5 m-md-auto order-md-5">
                  <StaticImage
                    quality={80}
                    placeholder="blurred"
                    alt="friends"
                    className="img-fluid"
                    src="../../static/friendgroup.jpg"
                  />
                </div>
                <div className="col-12 col-md-5">
                  <h2>
                    <strong>Building Friendships</strong>
                  </h2>
                  <p className="lead">
                    Part of our mission is to be friendly to the outside
                    community. As we love each other in the church community
                    first this will lead to us loving those outside secondly.
                    This love and friendliness will lead to a whole range of
                    fruit.
                  </p>

                  <p className="lead">
                    This second part of the vision statement is encapsulated by
                    the verse in Mark 12:31, "You shall love your neighbour as
                    yourself." Being friendly is the key to establishing
                    relationships with people and it is part of our mission in
                    the road to making disciples.
                  </p>
                </div>
              </div>
              <div className="row text-left align-items-center pt-5">
                <div className="col-4 col-md-5">
                  <StaticImage
                    quality={80}
                    placeholder="blurred"
                    alt="worship"
                    className="img-fluid"
                    src="../../static/worship.jpg"
                  />
                </div>
                <div className="col-12 col-md-5 m-md-auto">
                  <h2>
                    <strong>Making Disciples</strong>
                  </h2>
                  <p className="lead">
                    It is the responsibility of each believer, motivated by the
                    love of Christ and empowered by the Holy Spirit, to witness
                    for Christ and to live sacrificially for the proclamation of
                    the Gospel into all the world.
                  </p>
                  <p className="lead">
                    It is our vision that if not personally involved that we
                    systematically and sacrificially support the church and
                    missions both local and overseas.
                  </p>
                  <p className="lead">
                    Making disciples is summed up in Matthew 28:19-20 where we
                    are commanded to "make disciples of all nations, baptising
                    them in the name of the Father and the Son and the Holy
                    Spirit."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="fdb-block">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h1>What We Believe</h1>

                  <div className="row text-left pt-4">
                    <div className="col-12 col-md-6">
                      <p className="lead">
                        The church subscribes to an evangelical Christian
                        position.
                      </p>
                      <p className="lead">
                        We believe the following statements of faith are
                        immutable:
                      </p>
                      <p className="lead">
                        We believe in one God, eternally existing in three
                        persons: Father, Son and Holy Spirit.
                      </p>
                      <p className="lead">
                        We believe that Jesus of Nazareth was the Son of God,
                        fully God and yet fully man. He was conceived by the
                        Holy Spirit and born of the virgin Mary. He was without
                        sin and offered himself as the perfect sacrifice on the
                        cross at Calvary thereby satisfying His Father and
                        paying for the sins of the whole world. He rose from the
                        dead after three days and three nights, appeared to over
                        500 witnesses and ascended to His Father in heaven.
                      </p>
                      <p className="lead">
                        We believe in His premillenial return and that He will
                        reign as King and Lord of all.
                      </p>
                      <p className="lead">
                        We believe that the Holy Spirit is a person co-equal
                        with the Father and the Son. He personally indwells the
                        believer upon his conversion and He gives all believers
                        spiritual gifts for the benefit of the body of Christ.
                      </p>
                    </div>

                    <div className="col-12 col-md-6">
                      <p className="lead">
                        We believe that the Holy Spirit is a person co-equal
                        with the Father and the Son. He personally indwells the
                        believer upon his conversion and He gives all believers
                        spiritual gifts for the benefit of the body of Christ.
                      </p>
                      <p className="lead">
                        We believe that the 66 books of the Bible are the
                        inspired word of God and that the scriptures were
                        inerrant in their original form.
                      </p>
                      <p className="lead">
                        We believe in the fall of man, resulting in his complete
                        and universal separation from God, and his need of
                        salvation to restore that relationship with God.
                      </p>
                      <p className="lead">
                        We believe that it is a command for the new believer to
                        be baptised by immersion.
                      </p>
                      <p className="lead">
                        We believe that salvation is a free gift of God,
                        entirely apart from human works and that a person is
                        justified (declared righteous before God) by personal
                        faith in the Lord Jesus Christ of Nazareth.
                      </p>
                      <p className="lead">
                        We believe that the saved have eternal life with the
                        Lord, and the unsaved are cast into the Lake of Fire
                        where God's wrath remains on them.
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

export default About

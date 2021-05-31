import * as React from "react"

import Layout from "../components/layout"
import Notice from "../components/notice"
import Seo from "../components/seo"

const MusicPlay = () => {
  return (
    <>
      <div id="header-background">
        <Layout>
          <Seo title="Music Play" />
          <div id="header"></div>
          <section id="hero">
            <div className="hero-container mx-auto">
              <h1>
                <strong>Musicplay</strong>
              </h1>
            </div>
          </section>
          <Notice />
          <section className="fdb-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col col-md-8 text-center">
                  <h1>About Musicplay</h1>
                  <p className="lead">
                    Musicplay is a vibrant, welcoming and fun place where
                    parents/carers and their children (5 years old or under) can
                    play and learn together. It aims to provide an environment
                    where children can learn to interact with other children and
                    be given play experiences that develop them intellectually,
                    creatively, physically and socially.
                  </p>
                  <p className="lead">
                    Musicplay also provides a friendly welcoming atmosphere for
                    parents/carers. Join us on Thursday mornings 9.00am-11.00am
                    during the school term. Each session consists of structured
                    music and a story time. We enjoy morning tea together, which
                    is provided, and then the children have time for free play,
                    games & crafts. The cost is $4 per session - irrespective of
                    the number of children attending.
                  </p>
                  <h1>Contact</h1>
                  <p className="lead">
                    For more information email Kellie Kinnear at
                    kellie@mindenbaptist.org or call Kellie on - 0433 057 969.
                  </p>
                  <p className="lead">
                    Make sure you check out the MusicPlay facebook site for up
                    todate information on each week in case of cancellations
                    etc.
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

export default MusicPlay

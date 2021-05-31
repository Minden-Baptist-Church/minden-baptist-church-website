import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Notice = () => {
  return (
    <>
      <div className="bg-dark">
        <Layout>
          <Seo title="Notice" />
          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-left">
                  <h1>COVID-19 Updates</h1>
                  <h3>Current Status:</h3>
                  <p className="lead">
                    Minden Baptist Church is following the Queensland Government
                    Stage 3 Road Map Compliance and is resuming it's Sunday
                    Church Services as of the 12th of July.
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

export default Notice

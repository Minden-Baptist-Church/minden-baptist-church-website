import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
      <div className="bg-dark">
        <Layout>
          <Seo title="404" />
          <section className="fdb-block bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-left">
                  <h1>404: Page not found.</h1>
                  <p className="lead">
                    The page you are looking for doesn't exist.
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

export default NotFoundPage

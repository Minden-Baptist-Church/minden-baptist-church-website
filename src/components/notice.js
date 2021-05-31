import React from "react"

import { Link } from "gatsby"

const Notice = () => {
  return (
    <>
    <div className="notice">
      <div className="notice-container">
        <Link href="/notice">
          <strong>COVID-19 Update:</strong> Learn more about how Minden is handling the current health crisis.
        </Link>
      </div>
    </div>
    </>
  )
}

export default Notice
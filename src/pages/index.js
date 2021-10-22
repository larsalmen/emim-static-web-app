import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Grattis!</h1>

    <p>
      <Link to="/grattis/">Grattis!</Link> <br />
    </p>
  </Layout>
)

export default IndexPage

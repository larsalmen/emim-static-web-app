import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Grattis = () => (
  <Layout>
    <Seo title="Grattis" />
    <h1>Grattis Emilia!</h1>
    <Link to="/">Hem</Link>
  </Layout>
)

export default Grattis

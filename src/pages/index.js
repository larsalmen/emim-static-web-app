import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="animate-pulse pt-20">
    <h1 class="font-mono">Émim</h1>
    <p class="font-mono"> More to come.</p>
    </div>
  </Layout>
)

export default IndexPage

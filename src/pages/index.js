import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import Container from "../components/Containers/Container"
import About from "./About"

const IndexPage = () => (
  <Layout>
    <Header/>
    <Container>
      <About/>
    </Container>
  </Layout>
)

export default IndexPage

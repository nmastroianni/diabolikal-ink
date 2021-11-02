import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <h2>Main Content</h2>
    </Layout>
  )
}

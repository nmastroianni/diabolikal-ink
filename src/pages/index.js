import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import CallToBook from "../components/CallToBook"
import WelcomeMessage from "../components/WelcomeMessage"
import DoubleWideImages from "../components/DoubleWideImages"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CallToBook />
      <WelcomeMessage />
      <DoubleWideImages>
        {/* Use Only 2 Images */}
        <StaticImage
          src="../images/inking.jpg"
          alt="tattoo artist inking"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/chair.jpg"
          alt="tattoo chair"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </DoubleWideImages>
    </Layout>
  )
}

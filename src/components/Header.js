import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Header({ logo }) {
  return (
    <header className="h-[151px] bg-black flex justify-center items-center">
      <StaticImage
        src="../images/header-logo.jpg"
        alt="Diabolikal Ink Tattoo Parlour"
        placeholder="tracedSVG"
      />
    </header>
  )
}

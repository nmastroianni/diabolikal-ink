import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <div className="relative h-[618px]">
      <StaticImage
        src="../images/hero-image.jpg"
        alt=""
        className="absolute inset-0"
      />
    </div>
  )
}

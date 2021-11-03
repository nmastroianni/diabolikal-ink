import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      {/* Green Portion */}
      <div className="py-8 md:px-6 text-center bg-primary grid md:grid-cols-2 place-items-center">
        {/* Footer Logo */}
        <StaticImage
          src="../images/footer-logo.jpg"
          alt=""
          placeholder="tracedSVG"
        />
        {/* End Footer Logo */}
        {/* Business Details */}
        <div className="">
          {/* Social Icons */}
          <ul className="grid gap-y-8 md:grid-cols-2 place-items-center mb-6">
            <li className="text-black ">
              <a href="https://www.facebook.com/diabolikalink/">
                <FaFacebook className="w-8 md:w-6 h-8 md:w-6" />
                <span className="sr-only">Visit our Facebook page</span>
              </a>
            </li>
            <li className="text-black ">
              <a href="https://www.instagram.com/diabolikalink/">
                <FaInstagram className="w-8 md:w-6 h-8 md:w-6" />
                <span className="sr-only">Visit our Instagram feed</span>
              </a>
            </li>
          </ul>
          {/* End Social Icons */}
          <p className="text-white text-[18pt] text-center">778-547-3300</p>
          <p className="text-center md:text-left text-black text-[18pt]">
            INFO@DIABOLIKALINK.COM <br />
            5674 176ST, CLOVERDALE <br />
            BC, V3S 4C6
          </p>
        </div>
        {/* End Business Details */}
      </div>
      {/* End Green Portion */}
      {/* Black Portion */}
      <div className="grid md:grid-cols-2 place-items-center py-3 md:px-6 text-[12pt] md:text-[18pt] bg-black text-white">
        <p>All rights reserved 2021. Vancouver Web Design, Raw Media Inc.</p>
        <ul>
          <li className="inline">
            <a
              href="https://policies.google.com/privacy?hl=en-CA"
              className="hover:underline"
            >
              Privacy
            </a>{" "}
            |
          </li>
          <li className="inline ml-1.5">
            <a
              href="https://policies.google.com/technologies/cookies?hl=en-ca"
              className="hover:underline"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
      {/* End Black Portion */}
    </footer>
  )
}

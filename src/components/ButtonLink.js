import * as React from "react"
import { Link } from "gatsby"

export default function ButtonLink({ path, linkText }) {
  return (
    <Link to={path} className="bg-black px-8 py-4 text-white text-[22px]">
      {linkText}
    </Link>
  )
}

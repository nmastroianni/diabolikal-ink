import * as React from "react"
import { Link } from "gatsby"
export default function Navigation() {
  const menu = [
    {
      text: "home",
      path: "/"
    },
    {
      text: "gallery",
      path: "/gallery/"
    },
    {
      text: "booking",
      path: "/booking/"
    },
    {
      text: "about",
      path: "/about/"
    },
    {
      text: "contact",
      path: "/contact/"
    }
  ]
  return (
    <nav className="h-[86px] bg-primary text-[22px] grid place-items-center">
      <ul className="flex flex-wrap justify-center">
        {menu.map(item => {
          return (
            <li key={`${item.text}`}>
              <Link href={`${item.path}`} className="py-[16px] px-[26px]">
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

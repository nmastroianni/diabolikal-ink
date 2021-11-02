import * as React from "react"
import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"

export default function Layout({ data, children }) {
  return (
    <div id="layout-wrapper" className="font-metal">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

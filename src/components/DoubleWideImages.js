import * as React from "react"

export default function DoubleWideImages({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black bg-black">
      {children}
    </div>
  )
}

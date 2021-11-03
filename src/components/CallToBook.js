import * as React from "react"
import ButtonLink from "./ButtonLink"

export default function CallToBook() {
  return (
    <div className="h-[225px] bg-primary w-full flex flex-col justify-evenly items-center">
      <h2 className="uppercase text-[36px]">Book Your Consultation Now</h2>
      <ButtonLink path="/booking/" linkText="Click Here" />
    </div>
  )
}

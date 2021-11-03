import * as React from "react"

export default function WelcomeMessage() {
  return (
    <div className="h-[431px] bg-black text-white text-center flex flex-col items-center justify-evenly">
      <div className="max-w-xl">
        <h2 className="text-[38px]">Tattoo Artist Wanted</h2>
        <p className="text-[20px]">Shoot us an email to inquire</p>
      </div>
      <div className="max-w-xl">
        <p className="text-[24px]">Welcome To</p>
        <h2 className="text-[38px]">Diabolikal Ink Tattoo Parlour</h2>
      </div>
      <div className="max-w-5xl">
        <p className="text-[18px]">
          This one of a kind Tattoo Shop is located in Cloverdale. Placed among
          older artistic merchant shops, Diabolikal Ink provides a comfortable
          and a professional experience with an emphasis on great customer
          service.
        </p>
      </div>
      <div className="max-w-5xl">
        <p className="text-[18px]">
          Come to Diabolikal Ink not just for a Tattoo but a life changing
          experience.
        </p>
      </div>
    </div>
  )
}

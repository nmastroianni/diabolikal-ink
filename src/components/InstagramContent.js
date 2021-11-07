import * as React from "react"
import { HiPlay } from "react-icons/hi"

export default function InstagramContent({
  caption,
  media_url,
  media_type,
  permalink,
  thumbnail_url
}) {
  // Todo -> Carousel should have icon indicating there's more content to be viewed
  if (media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM") {
    return (
      <div>
        <a href={permalink}>
          <img
            src={media_url}
            alt={caption}
            className="filter md:brightness-75 hover:brightness-100 rounded transition duration-300 ease-in-out hover:scale-105"
          />
        </a>
      </div>
    )
  } else if (media_type === "VIDEO") {
    return (
      <div className="relative">
        <a href={permalink}>
          <img
            src={thumbnail_url}
            alt={caption}
            className="filter brightness-75 rounded"
          />
          <HiPlay className="w-24 h-24 text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out hover:scale-125" />
        </a>
      </div>
    )
  }
}

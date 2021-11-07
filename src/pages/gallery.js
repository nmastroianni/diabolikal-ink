import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import InstagramContent from "../components/InstagramContent"

export default function Gallery() {
  const [data, setData] = useState(null)
  // const [next, setNext] = useState(null)
  // const [previous, setPrevious] = useState(null)

  function getInstagramContent(url) {
    fetch(`/api/test`, {
      method: `POST`,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(setData)
  }

  useEffect(() => {
    getInstagramContent()
  }, [])

  return (
    <Layout>
      <h1 className="text-[36pt] text-center">Gallery</h1>
      {data === null && <p>Loading...</p>}
      {data !== null ? (
        <div className="max-w-screen-lg mx-auto p-3">
          <div className="text-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-3">
            {data.data.map(item => {
              return (
                <InstagramContent
                  key={item.id}
                  media_url={item.media_url}
                  media_type={item.media_type}
                  permalink={item.permalink}
                  thumbnail_url={item.thumbnail_url}
                />
              )
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  )
}

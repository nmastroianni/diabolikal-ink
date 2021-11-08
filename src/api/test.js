import fetch from "node-fetch"
export default async function testHandler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed")
  } else {
    let url =
      req.body.url || `${process.env.IG_GRAPH_URL}${process.env.NMIG}&limit=8`

    try {
      const result = await fetch(url, { method: "GET" }).then(res => {
        return res.json()
      })
      res.status(200).json(result)
    } catch (error) {
      console.log(error)
    }
    // res.status(200).json({ hello: `world` })
  }
}

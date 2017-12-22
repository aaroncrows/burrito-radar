const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')

const { PORT = 9292, NODE_ENV } = process.env
app.use(cors())

// Don't use as static server other than production
// dev server should be used
if (NODE_ENV === 'production') app.use(express.static('./build'))

app.post('/graphql', bodyParser.json(), (req, res) => {
  const token = process.env.API_KEY

  request.post('https://api.yelp.com/v3/graphql', {
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(req.body)
  }, (err, r) => {
    if (err) return res.json(err)
    r = JSON.parse(r.body)

    res.json(r)
  })
})

app.listen(PORT, () => console.log(`up on ${PORT}`))


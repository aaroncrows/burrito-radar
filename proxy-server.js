const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')

// load keys locally for development
require('./scripts/keys')

app.use(cors())
app.use(express.static('./build'))
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

app.listen(9292, () => console.log('proxy up on 9292'))


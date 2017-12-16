require('./scripts/keys')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')
let token
const { YELP_CLIENT_SECRET: secret, YELP_CLIENT_ID: id } = process.env

app.use(cors())

app.post('/graphql', bodyParser.json(), (req, res) => {
  request.post('https://api.yelp.com/oauth2/token', {
      form: {
        client_id: id,
        client_secret: secret,
        grant_type: 'client_credentials'
      }
  }, (err, r, b) => {
    if (err) return res.json(err)
    b = JSON.parse(b)
    const token = b.access_token
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
})

app.listen(9292, () => console.log('stupid proxy up on 9292'))


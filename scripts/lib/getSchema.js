// adapted from https://github.com/apollographql/relay-modern-hello-world/blob/master/scripts/getSchema.js
const request = require('request');
const fs = require('fs');
const { YELP_CLIENT_SECRET: secret, YELP_CLIENT_ID: id } = process.env

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

request.post('https://api.yelp.com/oauth2/token', {
    form: {
      client_id: id,
      client_secret: secret,
      grant_type: 'client_credentials'
    }
}, (err, r, b) => {
  if (err) return console.log(err)
  b = JSON.parse(b)
  const token = b.access_token
  request.post('https://api.yelp.com/v3/graphql', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'query': introspectionQuery }),
  }, (err, r) => {
    if (err) return console.log(error)
    r = JSON.parse(r.body)

    const schemaString = printSchema(buildClientSchema(r.data));
    fs.writeFileSync('schema.graphql', schemaString);
  })
})

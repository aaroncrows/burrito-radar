export const testYelpFetch = () => {
  return fetch('/yelp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql'
    },
    data: `{
        business(id: "garaje-san-francisco") {
          name
          id
          rating
          url
        }
      }`
  })
    .catch(console.log)
    .then(r => r.json())
    .then(console.log, console.log)
}

export const authYelp = () => {
  return fetch('http://localhost:9292/auth')
    .catch(e => console.log('auth fetch error', e))
    .then(r => r.json())
    .then(r => {
      console.log(r)
      const body = JSON.parse(r.body)
      const token = body.access_token
      fetch('http://localhost:9292/yelp')
        .then(res => console.log(res))
    })
}


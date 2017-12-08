const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const sfQuery = `{
          business(id: "garaje-san-francisco") {
              name
              id
              rating
              url
            }
          }`


const fetchQuery = (operation, variables, cacheConfig, uploadables) =>
  fetch('http://localhost:9292/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: sfQuery,
      variables
    })
  }).then(r => r.json())

const source = new RecordSource()
const store = new Store(source)
const network = Network.create(fetchQuery)
const handlerProvider = null

const environment = new Environment({
  handlerProvider, // Can omit.
  network,
  store,
})

export default environment

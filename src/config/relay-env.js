import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const fetchQuery = (operation, variables, cacheConfig, uploadables) =>
  fetch('http://localhost:9292/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(r => r.json())

const source = new RecordSource()
const store = new Store(source)
const network = Network.create(fetchQuery)

const environment = new Environment({
  network,
  store,
})

export default environment

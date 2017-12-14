import { graphql, createRefetchContainer } from 'react-relay'

import BusinessListPresentation from './BusinessListPresentation'

const BusinessList = createRefetchContainer(
  BusinessListPresentation,
  graphql`fragment BusinessList on Query {
    search(term: "burrito" latitude: 45.511736 longitude: -122.678801 sort_by: "distance") {
      business {
        id
        ...BusinessCard
      }
    }
  }`,
  graphql`fragment BusinessList on Query {
    search(term: "burrito" latitude: 45.511736 longitude: -122.678801 sort_by: "distance") {
      business {
        id
        ...BusinessCard
      }
    }
  
  }`
)

export default BusinessList

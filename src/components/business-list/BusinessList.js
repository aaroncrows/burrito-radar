import { graphql, createFragmentContainer } from 'react-relay'

import BusinessListPresentation from './BusinessListPresentation'

const BusinessList = createFragmentContainer(
  BusinessListPresentation,
  graphql`fragment BusinessList on Business
  @relay (plural: true) {
    id
    ...BusinessCard
  }`
)

export default BusinessList

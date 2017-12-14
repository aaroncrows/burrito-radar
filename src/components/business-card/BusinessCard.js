import BusinessCardPresentation from './BusinessCardPresentation'

import { createFragmentContainer, graphql } from 'react-relay'

const BusinessCard = createFragmentContainer(
  BusinessCardPresentation,
    graphql`
      fragment BusinessCard on Business {
        name
        rating
        url
      }
    `
)

export default BusinessCard

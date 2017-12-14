import BusinessCardPresentation from './business-card'

import { createFragmentContainer, graphql } from 'react-relay'

const BusinessCard = createFragmentContainer(
  BusinessCardPresentation,
    graphql`
      fragment businessCard on Business {
        name
        rating
        url
        display_phone
      }
    `
)

export default BusinessCard

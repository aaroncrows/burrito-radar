import BusinessCardPresentation from './BusinessCardPresentation'

import { createFragmentContainer, graphql } from 'react-relay'

const BusinessCard = createFragmentContainer(
  BusinessCardPresentation,
    graphql`
      fragment BusinessCard on Business {
        name
        rating
        url
        photos
        hours {
          is_open_now
          open {
            start
            end
          }
        }
      }
    `
)

export default BusinessCard

import React from 'react'
import RootPresentation from './root-presentation'
import { QueryRenderer, graphql } from 'react-relay'

import environment from '../../config/relay-env' 

const Root = () => (<QueryRenderer
  environment={environment}
  query={graphql`
    query rootQuery {
      business {
        name
      }
    }
  `}
  render={RootPresentation}
/>)

export default Root 
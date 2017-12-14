import React from 'react'
import RootPresentation from './root-presentation'
import { QueryRenderer, graphql } from 'react-relay'

// import css globals
import './root.scss'

import environment from '../../config/relay-env' 

const Root = () => (<QueryRenderer
  environment={environment}
  query={graphql`
    query rootQuery {
      business(id: "coava-coffee-roasters-portland-4") {
        ...BusinessCard
      }
    }
  `}
  render={RootPresentation}
/>)

export default Root 

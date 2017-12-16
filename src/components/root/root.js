import React, { Component } from 'react'
import RootPresentation from './root-presentation'
import { QueryRenderer, graphql } from 'react-relay'

// import css globals
import './root.scss'

import environment from '../../config/relay-env' 

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: 'Portland'
    }

    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(term) {
    this.setState({ term })
  }

  render() {
    const { term } = this.state

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query rootQuery($term: String) {
            search(location: $term term: "burrito" sort_by: "distance") {
              business {
                ...BusinessList
              }
            }
          }
        `}
        render={relayThings => <RootPresentation updateSearch={this.updateSearch} {...relayThings}/>}
        variables={{ term }}
      />
    )
  }
}

export default Root 

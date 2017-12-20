import React, { Component } from 'react'
import RootPresentation from './root-presentation'
import { QueryRenderer, graphql } from 'react-relay'

// import css globals
import './root.scss'

import environment from '../../config/relay-env' 

class Root extends Component {
  state = {
    location: 'Portland'
  }

  updateSearch = ({ location, latitude, longitude }) => {
    this.setState({ location, latitude, longitude })
  }

  currentLocation = () => {
    const { location, latitude, longitude } = this.state

    return { location, latitude, longitude }
  }

  render() {
    const { location, latitude, longitude } = this.state

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query rootQuery(
            $latitude: Float,
            $longitude: Float,
            $location: String
          ) {
            search(
              location: $location
              latitude: $latitude
              longitude: $longitude
              term: "burrito"
              sort_by: "distance"
              limit: 10
            ) {
              business {
                ...BusinessList
              }
            }
          }
        `}
        render={
          relayThings => 
            <RootPresentation
              updateSearch={this.updateSearch}
              currentLocation={this.currentLocation}
              {...relayThings}
            />
        }
        variables={{ location, latitude, longitude }}
      />
    )
  }
}

export default Root 

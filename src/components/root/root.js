import React, { Component } from 'react'
import RootPresentation from './root-presentation'
import { QueryRenderer, graphql } from 'react-relay'

// import css globals
import './root.scss'

import environment from '../../config/relay-env' 

class Root extends Component {
  state = {
    location: 'Portland',
    fetching: false,
    locationError: false
  }

  setFetching = fetching => {
    this.setState({ fetching })
  }

  updateSearch = location => {
    this.setState({ locationError: false })
    if (location) return this.setState({ location, latitude: undefined, longitude: undefined })
    // the geolocation needs to set off the loading state there should be a
    // better way to handle this

    this.setState({ fetching: true })
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      // use this rather than the method so two renders aren't triggered
      this.setState({ latitude, longitude, location: undefined, fetching: false })
    }, err => {
      this.setState({ locationError: true, fetching: false })
    })
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
              isFetching={this.state.fetching}
              locationError={this.state.locationError}
              {...relayThings}
            />
        }
        variables={{ location, latitude, longitude }}
      />
    )
  }
}

export default Root 

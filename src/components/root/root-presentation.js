import React, { Component } from 'react'

import { root } from './root.scss'
import BusinessCard from '../business-card/BusinessCard'

import LocationForm from '../location-form'
import BusinessList from '../business-list/BusinessList'

const RootPresentation = ({ error, props, updateSearch, currentLocation, isFetching, locationError }) => {
  let content

  if (locationError) {
    content = <h1>I can't get your location would you like to enter one?</h1>
  } else if (props && !isFetching) {
    content = (<div>
      <BusinessList  currentLocation={currentLocation} data={props.search.business} />
    </div>)
  } else {
    content = <h1>loading</h1>
  }

  return (
    <div className={`container ${root}`}>
      <h2>Burrito Radar</h2>
      <LocationForm search={updateSearch}/>
      {content}
    </div>
  )
}

export default RootPresentation

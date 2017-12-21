import React, { Component } from 'react'

import { root } from './root.scss'
import BusinessCard from '../business-card/BusinessCard'

import LocationForm from '../location-form'
import BusinessList from '../business-list/BusinessList'

const RootPresentation = ({error, props, updateSearch, currentLocation, isFetching}) => (
  <div className={`container ${root}`}>
    <h2>Burrito Radar</h2>
    <LocationForm search={updateSearch}/>
    {props && !isFetching ?
        <div>
          <BusinessList  currentLocation={currentLocation} data={props.search.business} />
        </div>
        : <h1>loading</h1>}
  </div>
)

export default RootPresentation

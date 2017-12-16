import React, { Component } from 'react'

import { root } from './root.scss'
import BusinessCard from '../business-card/BusinessCard'

import LocationForm from '../location-form'
import BusinessList from '../business-list/BusinessList'

const RootPresentation = ({error, props, updateSearch}) => (
  <div className={`container ${root}`}>
    <LocationForm search={updateSearch}/>
    {props ?
        <div>
          <BusinessList  data={props.search.business} />
        </div>
        : <h1>loading</h1>}
  </div>
)

export default RootPresentation

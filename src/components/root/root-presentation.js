import React from 'react'

import { root } from './root.scss'
import BusinessCard from '../business-card/BusinessCard'

import LocationForm from '../location-form'
import BusinessList from '../business-list/BusinessList'

const RootPresentation = ({error, props}) => {
  console.log('root', error, props)
  return (
    <div className={`container ${root}`}>
      <LocationForm />
      {props ?
          <div>
            <BusinessCard data={props.business} />
            <BusinessList data={props} />
          </div>
          : <h1>loading</h1>}
    </div>
  )
}

export default RootPresentation

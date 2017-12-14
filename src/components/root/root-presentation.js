import React from 'react'

import { root } from './root.scss'
import BusinessCard from '../business-card/BusinessCard'

import LocationForm from '../location-form'

const RootPresentation = ({error, props}) => {
  console.log(props)
  console.log(error, props)
  return (
    <div className={`container ${root}`}>
      <LocationForm />
      {props ?
          <BusinessCard data={props.business} />
          : <h1>loading</h1>}
    </div>
  )
}

export default RootPresentation

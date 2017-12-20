import React, { Component } from 'react'
import BusinessCard from '../business-card/BusinessCard'

import { businessList } from './business-list.scss'

const BusinessListPresentation = ({ data, currentLocation }) => (
  <ul className={businessList}>
    {data.map(b => (
      <li key={b.id}>
        <BusinessCard key={b.id} data={b} currentLocation={currentLocation} />
      </li>
    ))
    }
  </ul>
)

export default BusinessListPresentation

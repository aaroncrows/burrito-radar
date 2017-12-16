import React, { Component } from 'react'
import BusinessCard from '../business-card/BusinessCard'

const BusinessListPresentation = ({ data }) => (
  <ul>
    {data.map(b => (
      <li key={b.id}>
        <BusinessCard key={b.id} data={b} />
      </li>
    ))
    }
  </ul>
)

export default BusinessListPresentation

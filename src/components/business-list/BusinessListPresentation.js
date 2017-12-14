import React from 'react'
import BusinessCard from '../business-card/BusinessCard'

const BusinessListPresentation = ({ data }) => {
  return (
    <ul>
      { data.search.business.map(b => (
        <li key={b.id}>
          <BusinessCard key={b.id} data={b} />
        </li>
      ))
      }
    </ul>
  )
}

export default BusinessListPresentation

import React from 'react'
import { businessCard } from './business-card.scss'

const BusinessCardPresentation = ({ data }) => {
  return (
    <div className={`row ${businessCard}`}>
      <div className="image-frame">
        <img className="four columns" src={data.photos[0]} alt={`Photo of ${data.name}`}/>
      </div>
      <a className="eight columns" target="_blank" href={data.url}><h4>{data.name}</h4></a>
    </div>
  )
}

export default BusinessCardPresentation

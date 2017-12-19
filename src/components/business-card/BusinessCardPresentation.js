import React from 'react'
import { businessCard } from './business-card.scss'
import parseHours from '../../lib/parse-hours'

const BusinessCardPresentation = ({ data }) => {
  const today = (new Date()).getDay()
  const hours = data.hours[0] && data.hours[0].open[today]
  const hoursOpen = hours ?
    `Open from ${parseHours(hours.start)} to ${parseHours(hours.end)}.` 
    : 'Hours not available.'

  return (
    <div className={`row ${businessCard}`}>
      <div className="image-frame three columns">
        <img src={data.photos[0]} alt={`Photo of ${data.name}`}/>
      </div>
      <div className="eight columns">
        <a target="_blank" href={data.url}>
          <h4>{data.name}</h4>
        </a>
        <span>{hoursOpen}</span>
      </div>
    </div>
  )
}

export default BusinessCardPresentation

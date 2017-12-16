import React from 'react'
import { locationForm } from './location-form.scss'
const LocationForm = ({ search }) => (
  <form className={`row ${locationForm}`} onSubmit={e => {
    e.preventDefault()
    search({location: e.target.location.value })
  }}>
    <input className="eight columns" type="text" placeholder="location" name="location" />
    <div className="four columns">
      <button type="submit">Submit</button>
      <button onClick={e => {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
          search({ latitude, longitude })
        })
      }}>GPS</button>
    </div>
  </form>
)

export default LocationForm

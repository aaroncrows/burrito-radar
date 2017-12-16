import React from 'react'

const LocationForm = ({ search }) => (
  <form className="flex six" onSubmit={e => {
    e.preventDefault()
    search(e.target.location.value)
  }}>
    <input className="half" type="text" placeholder="location" name="location" />
    <button className="off-sixth" type="submit">Submit</button>
    <button>GPS</button>
  </form>
)

export default LocationForm

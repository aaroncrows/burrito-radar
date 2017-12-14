import React from 'react'

const LocationForm = () => (
  <form className="flex six">
    <input className="half" type="text" placeholder="location" />
    <button className="off-sixth" type="submit">Submit</button>
    <button>GPS</button>
  </form>
)

export default LocationForm

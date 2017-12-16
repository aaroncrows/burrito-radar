import React from 'react'

const BusinessCardPresentation = ({ data }) => {
  return (
    <a target="_blank" href={data.url}><h4>{data.name}</h4></a>
  )
}

export default BusinessCardPresentation

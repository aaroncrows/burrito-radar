import React from 'react'

const BusinessCardPresentation = ({ data }) => {
  return (
    <a target="_blank" href={data.url}><h1>{data.name}</h1></a>
  )
}

export default BusinessCardPresentation

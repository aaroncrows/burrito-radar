import React from 'react'
import { root } from './root.scss'

const RootPresentation = ({error, props}) => {
  let businessDiv = <h1>Loading</h1>
  if (error) {
    businessDiv = <h1>{error.message}<br/>{JSON.stringify(error.source)}</h1>
  } else if (props) {
    businessDiv = <h1>{props.business.name} is great!</h1>
  }

  return (
    <div className={`container ${root}`}>
      {businessDiv}
    </div>
  )
}

export default RootPresentation

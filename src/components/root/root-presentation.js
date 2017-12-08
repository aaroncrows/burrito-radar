import React from 'react'

const RootPresentation = ({error, props}) => {
  console.log('from query render', error, props)
  if (error) {
    return <div>{error.message}<br/>{JSON.stringify(error.source)}</div>;
  } else if (props) {
    return <div>{props.business.name} is great!</div>;
  }
  return <div>Loading</div>;
}

export default RootPresentation

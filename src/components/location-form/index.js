import React, { Component }  from 'react'
import { locationForm } from './location-form.scss'

class LocationForm extends Component {
  state = {
    formError: false
  }

  _handleSubmit = e => {
    const { value: location } = e.target.location
    const { search } = this.props

    e.preventDefault()
    e.target.location.value = ''
    this.setState({ formError: false })

    if (!location) return this.setState({ formError: true })
    search(location)
  }

  _handleClick = e => {
    e.preventDefault()

    this.props.search()
  }
  render() {
    const { formError } = this.state

    return (
      <form className={`row ${locationForm}`} onSubmit={this._handleSubmit}>
        <div className="seven columns">
          <input className={formError ? 'error' : ''} type="text" placeholder="location" name="location" />
          {formError ? <span>Please enter a location</span> : null}
        </div>
        <div className="five columns">
          <button type="submit">Submit</button>
          <button onClick={this._handleClick}>GPS</button>
        </div>
      </form>
    )
  }
}

export default LocationForm

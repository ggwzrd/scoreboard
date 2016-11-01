import React, { Component } from 'react'

class Title extends Component {
  render() {
    const { label } = this.props

    return (
      <h1>{ label }</h1>
    )
  }
}

export default Title

import React, { Component } from 'react'
import './Trophy.sass'

class Trophy extends Component {

  render(){
    const {rank} = this.props
    return (
      <div className="trophy">
        <div className={rank}></div>
      </div>
    )
  }

}

export default Trophy

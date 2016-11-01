import React, { Component } from 'react'
import './Trophy.sass'

class Trophy extends Component {

  rank(){
    const {rank, points} = this.props
    if (points > 10 && rank < 3){
      switch (rank) {
        case 0: return <img src="http://image.flaticon.com/icons/svg/199/199783.svg" />
        break;
        case 1: return <img src="http://image.flaticon.com/icons/svg/250/250570.svg" />
        break;
        case 2: return <img src="http://image.flaticon.com/icons/svg/195/195115.svg" />
        break;
      }
      return <span></span>
    }
  }

  render(){
    return (
      <div className="trophy">
        { this.rank() }
      </div>
    )
  }

}

export default Trophy

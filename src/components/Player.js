import React, { Component } from 'react'
import Trophy from './Trophy'
import './Player.sass'

class Player extends Component {

  plusOne(){
    const {playerId, onChange} = this.props

    onChange(playerId)
  }

  deleteMe(){
    const {onDelete, playerId} = this.props
    onDelete(playerId)
  }

  render() {
    const { avatar, name, points, rank } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <Trophy points={ points } rank={ rank } />
          <h3>
            <span className="score">{ points }</span>
            .&nbsp;
            <span className="name">{ name }</span>
          </h3>
        </div>
         <button onClick={ this.plusOne.bind(this) } >+1</button>
         <button onClick={ this.deleteMe.bind(this) } > x </button>
      </li>
    )
  }
}

export default Player

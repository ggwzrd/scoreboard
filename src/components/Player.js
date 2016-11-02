import React, { Component } from 'react'
import {connect} from 'react-redux'
import deletePlayer from '../actions/delete-player'
import plusOne from '../actions/plus-one'
import Trophy from './Trophy'
import './Player.sass'

export class Player extends Component {

  plusOne(){
    const {playerId, plusOne} = this.props

    plusOne(playerId)
  }

  deleteMe(){
    const {deletePlayer, playerId, key} = this.props
    deletePlayer(playerId)
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
         <button onClick={ this.plusOne.bind(this) } className="plusOne">+1</button>
         <button onClick={ this.deleteMe.bind(this) } className="delete"> x </button>
      </li>
    )
  }
}

export default connect(null, {deletePlayer, plusOne})(Player)

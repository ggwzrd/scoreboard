import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import deletePlayer from '../actions/delete-player'
import plusOne from '../actions/plus-one'
import Trophy from './Trophy'
import setTrophy from '../actions/set-trophy'
import './Player.sass'

export class Player extends Component {

  plusOne(){
    const { setTrophy, plusOne, playerId, points } = this.props
    plusOne(points, playerId)
    setTrophy(playerId)
  }

  trophy(){
    return this.props.hasOwnProperty("trophy") ? this.props.trophy : ""
  }

  deleteMe(event){
    const {playerId, deletePlayer} = this.props
    deletePlayer(playerId)
  }

  render() {
    const { playerId, avatar, name, points, increasePoints } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <Trophy rank={ this.trophy() } />
          <h3>
            <span className="score">{ points }</span>
            .&nbsp;
            <Link className="name" to={ `/players/${playerId}` }>{ name }</Link>
          </h3>
        </div>
         <button onClick={ this.plusOne.bind(this) } className="plusOne">+1</button>
         <button onClick={ this.deleteMe.bind(this) } className="delete"> x </button>
      </li>
    )
  }
}


export default connect(null, {deletePlayer, plusOne, setTrophy})(Player)

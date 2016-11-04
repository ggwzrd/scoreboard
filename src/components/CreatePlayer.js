import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../middleware/api'
import addPlayer from '../actions/add-player'
import './CreatePlayer.sass'

export class CreatePlayer extends Component {

  // nextPlayerIdReduce(){
  //   var d = new Date()
  //   return parseInt("" + Math.floor((Math.random() * 100) + 1) + d.getMilliseconds())
  // }

  save(event) {
    event.preventDefault()

    const { addPlayer } = this.props
    const name = this.refs.name.value
    const newPlayer = {
      name: name,
      avatar: 'https://api.adorable.io/avatars/285/${name}.png',
      points: 0
    }
    api.post('players', newPlayer)
      .then((player) => addPlayer(player))
      .catch((errors) => console.log(errors))
  }

  render() {
    const { avatar, name, points } = this.props

    return (
      <form className="create-player" onSubmit={ this.save.bind(this) }>
        <div className="input">
          <input id="playerName" type="text" name="name" ref="name" />
          <input id="createPlayer" type="submit" value="Create Player" />
        </div>
      </form>
    )
  }
}

export default connect(null, {addPlayer})(CreatePlayer)

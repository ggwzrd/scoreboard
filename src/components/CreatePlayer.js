import React, { Component } from 'react'
import './CreatePlayer.sass'

class CreatePlayer extends Component {
  save(event) {
    event.preventDefault()

    const { onSubmit } = this.props
    const name = this.refs.name.value

    const newPlayer = {
      name: name,
      avatar: `https://api.adorable.io/avatars/285/${name}.png`,
      points: 0
    }
    onSubmit(newPlayer)
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

export default CreatePlayer

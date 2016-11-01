import React from 'react'
import Player from '../components/Player'
import './Scoreboard.sass'

class Scoreboard extends React.Component {

  renderPlayer(player, index) {
    return <Player key={ index } { ...player } rank={ index } onChange={ this.props.plusOne } onDelete={this.props.deletePlayer} />
  }

  render() {
    const { players } = this.props

    return (
    <ul className="scoreboard">
     { players.map(this.renderPlayer.bind(this)) }
    </ul>
    )
  }
}

export default Scoreboard

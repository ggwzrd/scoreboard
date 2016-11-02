import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/Player'
import './Scoreboard.sass'

export class Scoreboard extends React.Component {

  renderPlayer(player, index) {
    return <Player key={ index } { ...player } rank={ index } onChange={ this.props.plusOne } />
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
const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps, {})(Scoreboard)

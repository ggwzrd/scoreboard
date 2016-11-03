import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/Player'
import './Scoreboard.sass'
import Title from '../components/Title'
import CreatePlayer from '../components/CreatePlayer'

export class Scoreboard extends React.Component {

  renderPlayer(player, index) {
    return <Player key={ index } { ...player }/>
  }

  render() {
    const { players } = this.props

    return (
      <div className="scoreboard">
        <Title label="Scoreboard" />
        <CreatePlayer />
        <ul>
          { players.map(this.renderPlayer.bind(this)) }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps, {})(Scoreboard)

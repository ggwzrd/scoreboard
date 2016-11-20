import React from 'react'
import {connect} from 'react-redux'
import appLoading  from '../actions/loading'
import Player from '../components/Player'
import './Scoreboard.sass'
import Title from '../components/Title'
import api from '../middleware/api'
import updatePlayers  from '../actions/update-players'
import CreatePlayer from '../components/CreatePlayer'

export class Scoreboard extends React.Component {
  componentWillMount(){
    this.props.appLoading(true)
  }

  componentDidMount(){
    const { appLoading, updatePlayers } = this.props
    api.get('players')
      .then((players) => {
        updatePlayers(players)
        this.props.appLoading(false)
      })
  }

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

export default connect(mapStateToProps, {appLoading, updatePlayers})(Scoreboard)

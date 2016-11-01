import React from 'react'
import Scoreboard from './containers/Scoreboard'
import Title from './components/Title'
import CreatePlayer from './components/CreatePlayer'
import './App.sass'

const playerData = [
  {
    playerId: 1,
    avatar: 'http://cd.sseu.re/matthew-32094823098.png',
    name: 'Matthew',
    points: 0,
  },
  {
    playerId: 2,
    avatar: 'http://cd.sseu.re/miriam-3409830948.png',
    name: 'Miriam',
    points: 0,
  },
  {
    playerId: 3,
    avatar: 'http://cd.sseu.re/wouter-38249879847.png',
    name: 'Wouter',
    points: 0,
  }
]

class App extends React.Component {
  constructor(props) {
      super()

      this.state = {
        players: playerData
      }
    }

  // add points to player
  plusOne(playerId) {
    const { players } = this.state

    const newPlayers = players.map((player) => {
      if (player.playerId === playerId) {
        return Object.assign({}, player, {
          points: player.points + 1
        })
      }

      return player
    })

    this.setState({
      players: this.sortPlayers(newPlayers)
    })
  }

  // sort players with the hightest score first
  sortPlayers(players) {
    return players.concat().sort((a, b) => {
      return b.points - a.points
    })
  }

  createPlayer(newPlayer){
    const { players } = this.state
    var newPlayerId = players.map(p => p.playerId).sort().reverse()[0] + 1 || 0
    this.setState({
      players: this.sortPlayers(players.concat(
        Object.assign({}, newPlayer, { playerId: newPlayerId })
      ))
    })
  }

  deletePlayer(playerId){
    const {players} = this.state
    var newPlayers = players.filter(p => p.playerId !== playerId)

    this.setState({
      players: this.sortPlayers(newPlayers)
    })
  }

  render() {
    const { players } = this.state

    return (
      <div className="app">
        <Title label="Scoreboard" />
        <Scoreboard players={ players } plusOne={ this.plusOne.bind(this) } deletePlayer = {this.deletePlayer.bind(this)}/>
        <CreatePlayer onSubmit={this.createPlayer.bind(this)} />
      </div>
    )
  }
}

export default App

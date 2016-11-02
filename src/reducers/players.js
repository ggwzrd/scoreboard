import { ADD_PLAYER } from '../actions/add-player'
import { DELETE_PLAYER } from '../actions/delete-player'

export const orderPlayers = (players) => {

  return players.concat().sort((a, b) => {
    return b.points - a.points
  })
}

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_PLAYER :
      return orderPlayers(state.concat(Object.assign({}, payload, {
        playerId: state.map((p) => p.playerId).sort().reverse()[0] + 1 || 0
      })))

    case DELETE_PLAYER:
      return orderPlayers(state.filter((p) => p.playerId !== payload))
    default :
      return state
  }
}

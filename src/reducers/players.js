import { ADD_PLAYER } from '../actions/add-player'
import { DELETE_PLAYER } from '../actions/delete-player'
import { PLUS_ONE } from '../actions/plus-one'

export const orderPlayers = (players) => {
  return players.concat().sort((a, b) => {
    return b.points - a.points
  })
}

export const nextPlayerId = (players) => {
  return players.map((p) => p.playerId).sort().reverse()[0] + 1 || 0
}
export const nextPlayerIdReduce = (players) => {
  debugger
  return players.reduce((pp, np) => {
    return np.playerId > pp ? np.playerId : pp.playerId
  }, 0) + 1
}

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_PLAYER :
      return orderPlayers(state.concat({
        name: payload,
        avatar: `https://api.adorable.io/avatars/285/${payload}.png`,
        points: 0,
        playerId: nextPlayerIdReduce(state)
      }))

    case DELETE_PLAYER:
      return orderPlayers(state.filter((p) => p.playerId !== payload))

    case PLUS_ONE:
      return orderPlayers(state.map((p) => p.playerId === payload ?  p.setState({points: p.points + 1}) : p))
    default :
      return state
  }
}

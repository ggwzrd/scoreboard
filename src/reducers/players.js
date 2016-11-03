import { ADD_PLAYER } from '../actions/add-player'
import { DELETE_PLAYER } from '../actions/delete-player'
import { PLUS_ONE } from '../actions/plus-one'
import { SET_TROPHY } from '../actions/set-trophy'

export const orderPlayers = (players) => {
  return players.concat().sort((a, b) => {
    return b.points - a.points
  })
}

export const nextPlayerId = (players) => {
  return players.map((p) => p.playerId).sort().reverse()[0] + 1 || 0
}
export const nextPlayerIdReduce = (players) => {
  return players.reduce((pp, np) => {
    return np.playerId > pp ? np.playerId : pp.playerId
  }, 0) + 1
}

export const assignTrophy = (players, playerId, trophy) => {
  return players.map((p) => p.playerId === playerId ? Object.assign({}, p, {trophy: trophy }) : p)
}

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_PLAYER :
      return orderPlayers(state.concat({
        name: payload,
        avatar: `https://api.adorable.io/avatars/285/${payload}.png`,
        points: 0,
        playerId: nextPlayerId(state)
      }))

    case PLUS_ONE:
      return orderPlayers(state.map((p) => p.playerId === payload ?  Object.assign({}, p, {points: p.points + 1}) : p))

    case DELETE_PLAYER:
      return orderPlayers(state.filter((p) => p.playerId !== payload))

    case SET_TROPHY:
      if (payload.points > 25)
        return assignTrophy(state, payload.playerId, "gold")
      if(payload.points >= 15)
        return assignTrophy(state, payload.playerId, "silver")
      if(payload.points >= 8){
        return assignTrophy(state, payload.playerId, "bronze")
      }else{
        return state
      }

    default :
      return state
  }
}

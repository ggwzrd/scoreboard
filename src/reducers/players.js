import { ADD_PLAYER } from '../actions/add-player'
import { UPDATE_PLAYERS } from '../actions/update-players'
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

// nextPlayerIdReduce(){
//   var d = new Date()
//   return parseInt("" + Math.floor((Math.random() * 100) + 1) + d.getMilliseconds())
// }

export const assignTrophy = (players, playerId, trophy) => {
  return players.map((p) => p.playerId === playerId ? Object.assign({}, p, {trophy: trophy }) : p)
}

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_PLAYER :
      return orderPlayers(state.concat(payload))
    case UPDATE_PLAYERS:
      return orderPlayers(payload)

    case PLUS_ONE:
      return orderPlayers(state.map((p) => p.playerId === payload ?  Object.assign({}, p, {points: p.points + 1}) : p))

    case DELETE_PLAYER:
      return orderPlayers(state.filter((p) => p.playerId !== payload))

    case SET_TROPHY:
      if (payload.points >= 24)
        return assignTrophy(state, payload.playerId, "gold")
      if(payload.points >= 14)
        return assignTrophy(state, payload.playerId, "silver")
      if(payload.points >= 7){
        return assignTrophy(state, payload.playerId, "bronze")
      }else{
        return state
      }

    default :
      return state
  }
}

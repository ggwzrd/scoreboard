import api from '../middleware/api'
import appLoading from './loading'
import updatePlayers from './update-players'
export const ADD_PLAYER = 'ADD_PLAYER'

export default (player) => {
  return (dispatch) => {
    dispatch(appLoading(true))

    api.post('players', { player })
      .then((player) => {
        dispatch(addPlayer(player))
        dispatch(appLoading(false))
        dispatch(updatePlayers(true))
      })
  }
}

export const addPlayer = (newPlayer) => {
  return {
    type: ADD_PLAYER,
    payload: newPlayer
  }
}

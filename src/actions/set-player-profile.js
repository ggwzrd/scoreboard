export const SET_PLAYER = 'SET_PLAYER'

export default (playerId) => {
  return {
    type: SET_PLAYER,
    payload: playerId
  }
}

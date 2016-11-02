export const ADD_PLAYER = 'ADD_PLAYER'

export default (newPlayer) => {
  return {
    type: ADD_PLAYER,
    payload: newPlayer
  }
}

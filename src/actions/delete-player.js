export const DELETE_PLAYER = 'DELETE_PLAYER'

export default (players) => {
  return {
    type: DELETE_PLAYER,
    payload: players
  }
}

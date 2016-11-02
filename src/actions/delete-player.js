export const DELETE_PLAYER = 'DELETE_PLAYER'

export default (oldPlayer) => {
  return {
    type: DELETE_PLAYER,
    payload: oldPlayer
  }
}

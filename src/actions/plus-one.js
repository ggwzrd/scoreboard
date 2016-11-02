export const PLUS_ONE = 'DELETE_PLAYER'

export default (player) => {
  return {
    type: PLUS_ONE,
    payload: player
  }
}

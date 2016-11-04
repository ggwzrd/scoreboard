export const FETCH_PLAYER = 'FETCH_PLAYER'

export default (player) => {
  return {
    type: FETCH_PLAYER,
    payload: player
  }
}

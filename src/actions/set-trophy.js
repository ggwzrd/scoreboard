export const SET_TROPHY = 'SET_TROPHY'

export default (playerId, points) => {
  return {
    type: SET_TROPHY,
    payload: {playerId: playerId, points: points}
  }
}

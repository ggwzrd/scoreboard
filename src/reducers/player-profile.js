import { SET_PLAYER } from '../actions/set-player-profile'

export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case SET_PLAYER:
      return payload
    default :
      return state
  }
}

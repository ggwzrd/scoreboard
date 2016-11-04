import { FETCH_PLAYER } from '../actions/fetch-player'

export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case FETCH_PLAYER:
      return payload
    default :
      return state
  }
}

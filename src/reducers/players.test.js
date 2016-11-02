import chai, { expect } from 'chai'
import deepFreeze from 'deep-freeze-node'
import players from './players'

import { ADD_PLAYER } from '../actions/add-player'


describe('players', () => {
  describe('initial state', () => {
    const initialState = players()
    expect(initialState).to.eql([])
  })

  describe(ADD_PLAYER, () => {
    const initialState = deepFreeze([
      { name: 'Matthew', points: 4, playerId: 0 }
    ])

    const newPlayer = deepFreeze({ name: 'Miriam', points: 5 })

    const finalState = deepFreeze([
      { name: 'Miriam', points: 5, playerId: 1 },
      { name: 'Matthew', points: 4, playerId: 0 },
    ])

    const action = deepFreeze({
      type: ADD_PLAYER,
      payload: newPlayer
    })

    expect(players(initialState, action)).to.eql(finalState)
  })
})

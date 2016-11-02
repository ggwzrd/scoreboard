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
      { name: 'Matthew', avatar: 'https://api.adorable.io/avatars/285/Matthew.png', points: 4, playerId: 1 }
    ])

    const newPlayer = deepFreeze('Miriam')

    const finalState = deepFreeze([
      { name: 'Matthew', avatar: 'https://api.adorable.io/avatars/285/Matthew.png', points: 4, playerId: 1 },
      { name: 'Miriam', avatar: 'https://api.adorable.io/avatars/285/Miriam.png', points: 0, playerId: 2 },
    ])

    const action = deepFreeze({
      type: ADD_PLAYER,
      payload: newPlayer
    })

    expect(players(initialState, action)).to.eql(finalState)
  })

  describe('nextPlayerId(players)', () => {
    const existingPlayers = deepFreeze({

    })
  })
})

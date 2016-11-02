import chai, { expect } from 'chai'
import deepFreeze from 'deep-freeze-node'
import players from './players'
import { nextPlayerId, orderPlayers } from './players'

import { ADD_PLAYER } from '../actions/add-player'
import { DELETE_PLAYER } from '../actions/delete-player'
import { PLUS_ONE } from '../actions/plus-one'

describe('players', () => {
  describe('initial state', () => {
    const initialState = players()
    it('is an empty array', () => {
      expect(initialState).to.eql([])
    })
  })

  describe(ADD_PLAYER, () => {
    const existingPlayer = {
      playerId: 3,
      name: 'Jane',
      points: 4
    }
    const initialState = deepFreeze([ existingPlayer ])
    const newPlayerName = 'Bram'
    const action = deepFreeze({
      type: ADD_PLAYER,
      payload: newPlayerName
    })
    const finalState = [
      existingPlayer,
      {
        playerId: 4,
        name: newPlayerName,
        avatar: `https://api.adorable.io/avatars/285/${newPlayerName}.png`,
        points: 0
      }
    ]

    it('adds a player', () => {
      expect(players(initialState, action)).to.eql(finalState)
    })
  })

  describe(DELETE_PLAYER, () => {
    const initialState = deepFreeze([
      { playerId: 3 },
      { playerId: 9 },
      { playerId: 1 },
    ])

    const action = deepFreeze({
      type: DELETE_PLAYER,
      payload: 9
    })

    const finalState = [
      { playerId: 3 },
      { playerId: 1 },
    ]

    it('deletes the player', () => {
      expect(players(initialState, action)).to.eql(finalState)
    })
  })

  describe(PLUS_ONE, () => {
    const initialState = deepFreeze([
      { playerId: 3, points: 0 },
      { playerId: 9, points: 0 },
      { playerId: 1, points: 0 },
    ])

    const action = deepFreeze({
      type: PLUS_ONE,
      payload: 9
    })

    const finalState = [
      { playerId: 9, points: 1 },
      { playerId: 3, points: 0 },
      { playerId: 1, points: 0 },
    ]

    it('gives the player an extra point', () => {
      expect(players(initialState, action)).to.eql(finalState)
    })
  })
})

describe('nextPlayerId(players)', () => {
  const existingPlayers = deepFreeze([
    { playerId: 3 },
    { playerId: 9 },
    { playerId: 1 },
  ])

  const nextId = nextPlayerId(existingPlayers)

  it('returns the next available player id', () => {
    expect(nextId).to.eq(10)
  })
})

describe('orderPlayers(players)', () => {
  const initialPlayers = deepFreeze([
    { points: 3 },
    { points: 9 },
    { points: 1 },
  ])

  const result = orderPlayers(initialPlayers)

  const sortedPlayers = [
    { points: 9 },
    { points: 3 },
    { points: 1 },
  ]

  it('returns players sorted by their points, desc', () => {
    expect(result).to.eql(sortedPlayers)
  })
})

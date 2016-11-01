import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Scoreboard from './Scoreboard'
import Player from '../components/Player'

chai.use(chaiEnzyme())

const players = [
  {
    playerId: 4,
    avatar: 'http://cd.sseu.re/matthew-32094823098.png',
    name: 'Matthew',
    points: 0,
  },
  {
    playerId: 3,
    avatar: 'http://cd.sseu.re/miriam-3409830948.png',
    name: 'Miriam',
    points: 0,
  }
]

const scoreboard = shallow(<Scoreboard players={ players } />)

describe('<Scoreboard />', () => {
  it('has a wrapping ul tag', () => {
    expect(scoreboard).to.have.tagName('ul')
  })

  it('has a class "scoreboard"', () => {
    expect(scoreboard).to.have.className('scoreboard')
  })

  describe('players', () => {
    it('renders Players', () => {
      expect(scoreboard).to.have.descendants(Player)
    })

    it('renders both players', () => {
      expect(scoreboard).to.contain(<Player key={0} { ...players[0] } />)
      expect(scoreboard).to.contain(<Player key={1} { ...players[1] } />)
    })
  })
})

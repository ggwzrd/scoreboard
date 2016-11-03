import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Player} from './Player'
import { plusOne } from '../actions/plus-one'

chai.use(chaiEnzyme())

const playerProps = {
  name: 'Miriam',
  avatar: 'http://cd.sseu.re/miriam-3409830948.png',
  points: 6
}

describe('<Player />', () => {
  const player = shallow(<Player { ...playerProps } />)

  it('has a wrapping li tag', () => {
    expect(player).to.have.tagName('li')
  })

  it('has a class "player"', () => {
    expect(player).to.have.className('player')
  })

  it('renders the player\'s avatar', () => {
    expect(player.find('img')).to.have.attr('src', playerProps.avatar)
  })

  it('renders the points and name of the player', () => {
    const player = mount(<Player { ...playerProps } plusOne={ plusOne }/>)
    const { points, name } = playerProps
    expect(player.find('.name')).to.have.text('Miriam')
  })

  describe('+1 Button', () => {
    it('shows it', () => {
      expect(player.find('.plusOne')).to.have.text('+1')
    })

    it('changes the score when we click it', () => {
      const { playerId } = playerProps

    })
  })
})

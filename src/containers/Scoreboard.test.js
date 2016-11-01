import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Scoreboard from './Scoreboard'

chai.use(chaiEnzyme())

const app = shallow(<Scoreboard />)

describe('<Scoreboard />', () => {
  it('has a wrapping ul tag', () => {
    expect(app).to.have.tagName('ul')
  })

  it('has a class "scoreboard"', () => {
    expect(app).to.have.className('scoreboard')
  })
})

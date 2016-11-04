import React from 'react'
import wrapper from '../test/wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {App} from './App'
import Scoreboard from './containers/Scoreboard'

chai.use(chaiEnzyme())


const app = wrapper(<App />)

describe('<App />', () => {
  it('contains a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('has the app class', () =>{
    expect(app).to.have.className('app')
  })
})

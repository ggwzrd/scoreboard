import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('contains a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  // it('says Hello World', () => {
  //   expect(app).to.have.text('Hello World!')
  // })

  it('has a App class', () =>{
    expect(app).to.have.className('app')
  })

  it('renders the Title', () => {
    expect(app).to.have.descendants(Title)
  })
})

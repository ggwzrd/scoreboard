import React from 'react'
import { mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import CreatePlayer from './CreatePlayer'

chai.use(spies)
chai.use(chaiEnzyme())

const saveSpy = chai.spy()
const form = mount(<CreatePlayer onSubmit={ saveSpy }/>)

describe('<CreatePlayer />', () => {
  it('has a wrapping form tag', () => {
    expect(form).to.have.tagName('form')
  })

  it('has a class "create-player"', () => {
    expect(form).to.have.className('create-player')
  })

  it('renders a text field for the player\'s name', () => {
    expect(form.find('#playerName')).to.have.attr('name', 'name')
  })

  it('has a ref for the player\'s name', () => {
    expect(form).to.have.ref('name')
  })

  describe('The form', () => {
    it('has a submit button', () => {
      expect(form.find('#createPlayer')).to.have.attr('value', 'Create Player')
    })

    it('calls the save function when we submit it', () => {
      form.simulate('submit')
      expect(saveSpy).to.have.been.called()
    })
  })
})

/* global it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import Status from '../src/components/status'
import Buttons from '../src/components/buttons'
import Content from '../src/components/content'

const appMockup = { quit: () => '' }

it('Renders status', () => {
  const status = shallow(<Status />)
  expect(status.find('#status')).toHaveLength(1)
})

it('Renders buttons', () => {
  const status = shallow(<Buttons app={appMockup} />)
  expect(status.find('#buttons')).toHaveLength(1)
})

it('Renders content', () => {
  const status = shallow(<Content app={appMockup} />)
  expect(status.find('#content')).toHaveLength(1)
})

import React from 'react';

import { render } from '@testing-library/react';

import Marquee from '.'

describe('Marquee', () => {
  it('is truthy', () => {
    expect(Marquee).toBeTruthy()
  })

  it('should render correctly', () => {
    const wrapper = render(
      <Marquee>
        <p>test</p>
      </Marquee>
    )
    expect(wrapper.getByText('test')).toBeDefined()
  })
})

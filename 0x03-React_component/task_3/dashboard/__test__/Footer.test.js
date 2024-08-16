import { Footer } from '../src/Footer/Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('Testing if the Footer component is working correctly', () => {
  it('Testing if the Footer component renders', () => {
    shallow(<Footer />);
  });

  it('Testing if copyright is rendered', () => {
    const cmp = shallow(<Footer />);
    expect(cmp.text()).toContain('Copyright');
  });
});

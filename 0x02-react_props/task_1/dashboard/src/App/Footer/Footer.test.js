import { Footer } from './Footer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Testing if the Footer component is working correctly', () => {
  it('Testing if the Footer component renders', () => {
    shallow(<Footer />);
  });

  it('Testing if copyright is rendered', () => {
    const cmp = shallow(<Footer />);
    expect(cmp.text()).toContain('Copyright');
  });
});

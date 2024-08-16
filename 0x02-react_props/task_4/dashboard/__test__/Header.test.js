import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { Header } from '../src/Header/Header';

configure({ adapter: new Adapter() });

describe('Testing if the Header component is working correctly', () => {
  it('Testing if the Header component renders', () => {
    shallow(<Header />);
  });

  it('Testing if the logo is there', () => {
    const cmp = shallow(<Header />);
    expect(cmp.find('img').length).toBe(1);
  });

  it('Testing if the title is there', () => {
    const cmp = shallow(<Header />);
    expect(cmp.find('h1').length).toBe(1);
  });
});

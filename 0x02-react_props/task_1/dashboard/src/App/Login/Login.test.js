import { Login } from './Login';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Testing if the Header component is working correctly', () => {
  it('Testing if the Header component renders', () => {
    shallow(<Login />);
  });

  it('Testing if the imput fields are there', () => {
    const cmp = shallow(<Login />);
    expect(cmp.find('input').length).toBe(2);
  });
  it('Testing if the labels are there', () => {
    const cmp = shallow(<Login />);
    expect(cmp.find('label').length).toBe(2);
  });
});

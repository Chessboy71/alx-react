import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Testing if App is working', () => {
  it('Testing if the app is rendering without crashing', () => {
    shallow(<App />);
  });

  // it('this should have and app that has a div with a class of App-header', () => {
  //   const wrap = shallow(<App />);
  //   expect(wrap.find('div.App-header').length).toBe(1);
  // });

  // it('this should have and app that has a div with a class of App-body', () => {
  //   const wrap = shallow(<App />);
  //   expect(wrap.find('div.App-body').length).toBe(1);
  // });

  // it('this should have and app that has a div with a class of App-footer', () => {
  //   const wrap = shallow(<App />);
  //   expect(wrap.find('div.App-footer').length).toBe(1);
  // });
});

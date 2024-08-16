import React from 'react';

import App from './App';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Login } from './Login/Login';
import Notifications from './Notifications/Notifications';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Testing if App is working', () => {
  it('Testing if the app is rendering without crashing', () => {
    shallow(<App />);
  });

  it('Testing if App contains Footer component', () => {
    const cmp = shallow(<App />);
    expect(cmp.find(Footer).exists()).toBe(true);
  });

  it('Testing if App contains Notifications component', () => {
    const cmp = shallow(<App />);
    expect(cmp.find(Notifications).exists()).toBe(true);
  });

  it('Testing if App contains Login component', () => {
    const cmp = shallow(<App />);
    expect(cmp.find(Login).exists()).toBe(true);
  });

  it('Testing if App contains Header component', () => {
    const cmp = shallow(<App />);
    expect(cmp.find(Header).exists()).toBe(true);
  });
});

/**
 * @jest-environment jsdom
 */

import React from 'react';
import App from './../src/App/App';
import { Header } from './../src/Header/Header';
import { Footer } from './../src/Footer/Footer';
import { Login } from './../src/Login/Login';
import Notifications from './../src/Notifications/Notifications';
import { shallow, mount } from 'enzyme';
import CourseList from '../src/CourseList/CourseList';

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

  it('Testing if App contains Login Currently', () => {
    const cmp = shallow(<App />);
    expect(cmp.find(Login).exists()).toBe(true);
  });

  it('Testing if App contains Login Currently', () => {
    const cmp = shallow(<App isLoggedIn={true} />);
    expect(cmp.find(Login).exists()).toBe(false);
    expect(cmp.find(CourseList).exists()).toBe(true);
  });
});

// describe('Testing using the component mounting', () => {
//   it('calls logOut function', () => {
//     const mocked = jest.fn();
//     const wrapper = mount(<App logOut={mocked} />);
//     const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
//     document.dispatchEvent(event);

//     expect(mocked).toHaveBeenCalledTimes(1);
//     wrapper.unmount();
//   });

//   it('checks that alert function is called', () => {
//     const wrapper = mount(<App />);
//     const spy = jest.spyOn(window, 'alert');
//     const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
//     document.dispatchEvent(event);

//     expect(spy).toHaveBeenCalled();
//     spy.mockRestore();
//     wrapper.unmount();
//   });

//   it('checks that the alert is "Logging you out"', () => {
//     const wrapper = mount(<App />);
//     const spy = jest.spyOn(window, 'alert');
//     const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
//     document.dispatchEvent(event);

//     expect(spy).toHaveBeenCalledWith('Logging you out');
//     jest.restoreAllMocks();
//     wrapper.unmount();
//   });
// });

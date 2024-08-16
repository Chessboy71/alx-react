import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Notifications from './Notifications';

configure({ adapter: new Adapter() });

describe('Notification component tests', () => {
  it('renders Notification component without crashing', () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it('renders ul', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('ul')).toBeDefined();
  });

  it('renders three list items', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('li')).toHaveLength(3);
  });

  it('renders correct text', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('p').text()).toBe(
      'Here is the list of notifications'
    );
  });
});

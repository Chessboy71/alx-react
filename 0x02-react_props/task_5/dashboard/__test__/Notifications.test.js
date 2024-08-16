import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Notifications from '../src/Notifications/Notifications';
import NotificationItem from '../src/Notifications/NotificationItem';

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

    expect(notification.find(NotificationItem)).toHaveLength(3);
  });

  it('renders correct text', () => {
    const notification = shallow(<Notifications displayDrawer={true} />);

    expect(notification.children().find('p').text()).toBe(
      'Here is the list of notifications'
    );
  });
  it('checking if div.notifications doesnt display on false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').length).toBe(0);
  });

  it('checking if div.notifications displays when displaydrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').length).toBe(1);
  });

  it('checking if menuItem displays always', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('menuItem').length).toBe(1);
  });

  it('checking if menuItem displays always', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('menuItem').length).toBe(1);
  });
});

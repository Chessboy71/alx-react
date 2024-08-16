import NotificationItem from '../src/Notifications/NotificationItem';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Testing the notification item', () => {
  it('Testing if the notificationItem renders', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('Testing if html is correct', () => {
    shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
  });
});

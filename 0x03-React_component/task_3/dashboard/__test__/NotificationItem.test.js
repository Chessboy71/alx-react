import NotificationItem from '../src/Notifications/NotificationItem';
import { shallow } from 'enzyme';
import React from 'react';

describe('Testing the notification item', () => {
  it('Testing if the notificationItem renders', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('Testing if html is correct', () => {
    shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
  });
});

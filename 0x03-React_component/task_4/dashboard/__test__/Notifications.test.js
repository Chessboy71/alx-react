import { shallow } from 'enzyme';
import React from 'react';
import Notifications from '../src/Notifications/Notifications';
import NotificationItem from '../src/Notifications/NotificationItem';
import { getLatestNotification } from '../src/utils/utils';

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    html: getLatestNotification(),
    type: 'urgent',
  },
];

describe('Notification component tests', () => {
  it('renders Notification component without crashing', () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it('renders ul', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find('ul')).toBeDefined();
  });

  it('renders no notifications', () => {
    const notification = shallow(<Notifications />);

    expect(notification.find(NotificationItem)).toHaveLength(0);
  });

  it('renders three list items', () => {
    const notification = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
      />
    );
    expect(notification.find(NotificationItem)).toHaveLength(3);
  });
});

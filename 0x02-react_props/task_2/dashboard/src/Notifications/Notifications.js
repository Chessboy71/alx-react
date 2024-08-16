import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close.jpg';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          float: 'right',
          backgroundColor: 'white',
          border: 'none',
        }}
        aria-label="close"
        onClick={() => console.log('Close button has been clicked')}>
        <img
          src={close}
          style={{
            height: '35px',
            width: '35px',
            objectFit: 'contain',
          }}></img>
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;

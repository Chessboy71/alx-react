import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          float: 'right',
        }}
        aria-label="close"
        onClick={() => console.log('Close button has been clicked')}>
        X
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data="urgent"
        />
      </ul>
    </div>
  );
}

export default Notifications;

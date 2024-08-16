import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close.jpg';
import NotificationItem from './NotificationItem';
import PropTypes, { bool } from 'prop-types';

function Notifications({ displayDrawer }) {
  return (
    <div className="MainNotif">
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
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
      ) : null}
    </div>
  );
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

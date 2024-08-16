import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close.jpg';
import NotificationItem from './NotificationItem';
import PropTypes, { bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="MainNotif">
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer ? (
          <div className="Notifications">
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
                  position: 'absolute',
                  top: '20px',
                }}></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length == 0 ? (
                <NotificationItem
                  value="No new notification for now"
                  markAsRead={this.markAsRead}
                />
              ) : (
                this.props.listNotifications.map(
                  ({ id, html, type, value, markAsRead }) => (
                    <NotificationItem
                      key={id}
                      id={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  )
                )
              )}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

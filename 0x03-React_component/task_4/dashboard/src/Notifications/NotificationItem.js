import React from 'react';
import './Notifications.css';
import PropTypes, { string } from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value && type ? (
          <li
            data={type}
            id={id}
            onClick={() => {
              markAsRead(this.props.id);
            }}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data="urgent"
            id={id}
            dangerouslySetInnerHTML={{ __html: html }}
            onClick={() => {
              markAsRead(id);
            }}
          />
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;

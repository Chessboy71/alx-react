import React from 'react';
import './Notifications.css';
import PropTypes, { string } from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <>
      {value && type ? <li data={type}>{value}</li> : null}
      {html ? (
        <li data="urgent" dangerouslySetInnerHTML={{ __html: html }} />
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;

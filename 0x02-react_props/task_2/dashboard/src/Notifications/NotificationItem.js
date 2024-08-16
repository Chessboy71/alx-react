import React from 'react';
import './Notifications.css';

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

export default NotificationItem;

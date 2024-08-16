import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: '60',
  },
  {
    id: 2,
    name: 'Webpack',
    credit: '20',
  },
  {
    id: 3,
    name: 'React',
    credit: '40',
  },
];
{
  /* <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem html={getLatestNotification()} /> */
}
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
  },
];

function App({ isLoggedIn }) {
  return (
    <>
      <div className="HeaderSection">
        <Header />
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />
      </div>

      <div className="App-body">
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>
      <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;

import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  listCourses = [
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

  listNotifications = [
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

  render() {
    return (
      <>
        <div className="HeaderSection">
          <Header />
          <Notifications
            displayDrawer={true}
            listNotifications={this.listNotifications}
          />
        </div>

        <div className="App-body">
          {this.props.isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;

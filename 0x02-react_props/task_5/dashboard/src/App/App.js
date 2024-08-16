import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <div className="HeaderSection">
        <Header />
        <Notifications displayDrawer={true} />
      </div>

      <div className="App-body">{isLoggedIn ? <CourseList /> : <Login />}</div>
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

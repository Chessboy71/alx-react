import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

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
  handleKeysPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeysPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeysPress);
  }

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
            <BodySectionWithMarginBottom title="Course List">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus
              iaculis lacinia. Nunc gravida euismod tortor in scelerisque. In
              nec tortor eget nibh viverra viverra et in ante. Aliquam
              ullamcorper mollis tempor. Suspendisse eget mi eleifend,
              ullamcorper ligula ac, ultricies est. Cras placerat sem sit amet
              imperdiet posuere
            </p>
          </BodySection>
        </div>
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

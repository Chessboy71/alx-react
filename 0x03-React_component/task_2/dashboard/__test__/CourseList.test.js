import CourseList from '../src/CourseList/CourseList';
import CourseListRow from '../src/CourseList/CourseListRow';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

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

describe('Teesting if the component CourseList is fully functioning', () => {
  it('making sure CourseList renders', () => {
    shallow(<CourseList />);
  });

  it('making sure there are 3 course listRows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });

  it('making sure there are 5 course listRows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});

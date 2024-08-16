import CourseList from '../src/CourseList/CourseList';
import CourseListRow from '../src/CourseList/CourseListRow';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Teesting if the component CourseList is fully functioning', () => {
  it('making sure CourseList renders', () => {
    shallow(<CourseList />);
  });

  it('making sure there are 4 course listRows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});

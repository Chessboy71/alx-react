import CourseListRow from '../src/CourseList/CourseListRow';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React from 'react';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Teesting if the component Course list is fully functioning', () => {
  it('making sure CourseListRow renders', () => {
    shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="test"
      />
    );
  });

  it('Testing when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell={null}
      />
    );
    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.find('tr').childAt(0).html()).toBe(
      '<th colSpan="2">test</th>'
    );
  });

  it('Testing when isHeader is true and textSecondCell isnot null', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="test"
      />
    );
    expect(wrapper.find('tr').children()).toHaveLength(2);
  });

  it('Testing when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="test2"
      />
    );
    expect(wrapper.find('tr').children()).toHaveLength(2);
  });
});

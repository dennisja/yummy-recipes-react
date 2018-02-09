import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CreateCategory from '../components/categories/CreateCategory';

describe('Test CreateCategory component', () => {
    const categoryWrapper = shallow(<CreateCategory />);
    it('renders properly', () => {
        expect(shallowToJson(categoryWrapper)).toMatchSnapshot();
    });

    it('renders a side bar component', () => {
        expect(categoryWrapper.find('SideBar').length).toBe(1);
    });

    it('renders a form card', () => {
        expect(categoryWrapper.find('FormCard').length).toBe(1);
    });
});

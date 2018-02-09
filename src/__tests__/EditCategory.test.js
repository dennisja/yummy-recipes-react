import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import EditCategory from '../components/categories/EditCategory';

describe('Test CreateCategory component', () => {
    const categoryWrapper = shallow(<EditCategory match={{ params: { categoryId: 1 } }} />);
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

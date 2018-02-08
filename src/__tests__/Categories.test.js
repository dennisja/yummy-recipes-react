import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Categories, { Category, CategoryList } from '../components/categories/Categories';
import $ from 'jquery';

$('.collapsible').collapsible = jest.fn();

const category = {
    name: 'H',
    created: 'Mock Date',
    edited: 'Mock Date',
    id: 1,
    owner_details: {
        firstname: 'H',
        lastname: 'h',
    },
};

describe('Test Categories component', () => {
    const categoriesOutput = shallow(<Categories />);
    it('renders properly', () => {
        expect(shallowToJson(categoriesOutput)).toMatchSnapshot();
    });

    it('renders a sidebar component', () => {
        expect(categoriesOutput.find('SideBar')).toHaveLength(1);
    });

    it('shows preloader when loading categories', () => {
        expect(categoriesOutput.find('PreLoader').length).toBe(1);
        categoriesOutput.setState({ loadedCategories: true });
        expect(categoriesOutput.find('PreLoader').length).toBe(0);
    });
});


describe('Test Category component', () => {
    const categoryWrapper = shallow(<Category category={category} />);
    it('renders properly', () => {
        expect(shallowToJson(categoryWrapper)).toMatchSnapshot();
    });

    it('displays the category name', () => {
        expect(categoryWrapper.find('.collapsible-header').text()).toBe(category.name);
    });

    it('has to Link button elements', () => {
        expect(categoryWrapper.find('Link').length).toBe(2);
    });
});


describe('Test CategoryList component', () => {
    const categoryListWrapper = shallow(<CategoryList />);

    it('renders properly', () => {
        expect(shallowToJson(categoryListWrapper)).toMatchSnapshot();
    });

    it('renders category elements', () => {
        const categories = new Array(10).fill(category);
        expect(categoryListWrapper.find('Category')).toHaveLength(0);
        categoryListWrapper.setState({ categories });
        expect(categoryListWrapper.find('Category')).toHaveLength(categories.length);
    });
});

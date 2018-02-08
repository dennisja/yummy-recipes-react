import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import $ from 'jquery';

import EditRecipeForm, { CategoryOptions } from '../components/forms/EditRecipeForm';

const categories = [
    {
        name: 'b',
        id: 1,
    }, {
        name: 'a',
        id: 2,
    }, {
        name: 'a',
        id: 3,
    },
];

describe('Test EditRecipeForm component', () => {
    const recipe = {
        name: 'h',
        steps: 'q',
        ingredients: 'i',
        category: {
            id: 12,
        },
        id: 1,
    };

    $('select').material_select = jest.fn();

    const formWrapper = shallow(<EditRecipeForm {...recipe} />);

    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a PreLoader', () => {
        expect(formWrapper.find('PreLoader')).toHaveLength(1);
    });

    it('renders a form element', () => {
        formWrapper.setState({ loading: false, categories });
        formWrapper.update();
        expect(formWrapper.find('form').length).toBe(1);
    });

    it('renders the required form inputs', () => {
        formWrapper.setState({ loading: false, categories });
        formWrapper.update();
        expect(formWrapper.find('#name').length).toBe(1);
        expect(formWrapper.find('#ingredients').length).toBe(1);
        expect(formWrapper.find('#steps').length).toBe(1);
        expect(formWrapper.find('#category').length).toBe(1);
        expect(formWrapper.find('#submit_recipe').length).toBe(1);
    });
});

describe('Test Category options form', () => {
    const optionsWrapper = shallow(<CategoryOptions categories={categories} />);
    it('renders properly', () => {
        expect(shallowToJson(optionsWrapper)).toMatchSnapshot();
    });

    // commented because enzyme doesn't support array returning elements and fragments
    // it('renders the correct number of options', () => {
    //     expect(optionsWrapper.find('option')).toHaveLength(categories.length);
    // });

    // it('doesnot modify its props', () => {
    //     expect(optionsWrapper.instance().props.categories).toEqual(categories);
    // });
});

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CategoryForm from '../components/forms/CategoryForm';

describe('Test CategoryForm', () => {
    const formWrapper = shallow(<CategoryForm />);
    const preventDefault = jest.fn();


    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form')).toHaveLength(1);
    });

    it('has a name field and submit button', () => {
        expect(formWrapper.find('#cat_name')).toHaveLength(1);
        expect(formWrapper.find('#submit_category')).toHaveLength(1);
    });

    it('submits data', () => {
        formWrapper.setState({ cat_name: 'Hello' });
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
        formWrapper.find('#submit_category').simulate('click');
    });

    it('renders edit button when handling edit', () => {
        formWrapper.setProps({ role: 'edit' });
        formWrapper.update();
        // check whethert it has the input field
        expect(formWrapper.find('#cat_name')).toHaveLength(1);
        expect(formWrapper.find('#submit_category')).toHaveLength(1);
        // check value of submit button
        expect(formWrapper.find('#submit_category').props().value).toBe('Edit Category');
    });

    it('handles editing category', () => {
        formWrapper.setProps({ role: 'edit' });
        expect(formWrapper.instance().props.role).toEqual('edit');
        expect(formWrapper.find('form')).toHaveLength(1);
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });
});

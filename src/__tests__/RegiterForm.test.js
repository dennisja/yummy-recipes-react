import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import RegisterForm from '../components/forms/RegisterForm';

describe('Test RegisterForm', () => {
    const formWrapper = shallow(<RegisterForm />);
    const preventDefault = jest.fn();


    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form')).toHaveLength(1);
    });

    it('renders the correct form fields', () => {
        expect(formWrapper.find('#firstname').length).toBe(1);
        expect(formWrapper.find('#lastname').length).toBe(1);
        expect(formWrapper.find('#reg_email').length).toBe(1);
        expect(formWrapper.find('#reg_password').length).toBe(1);
        expect(formWrapper.find('#c_password').length).toBe(1);
        expect(formWrapper.find('#register').length).toBe(1);
    });

    it('submits data', () => {
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });
});

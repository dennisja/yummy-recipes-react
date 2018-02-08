import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginForm from '../components/forms/LoginForm';

describe('Test RegisterForm', () => {
    const formWrapper = shallow(<LoginForm onLoginSubmit={jest.fn()} />);
    const preventDefault = jest.fn();


    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form')).toHaveLength(1);
    });

    it('renders the correct form fields', () => {
        expect(formWrapper.find('#email').length).toBe(1);
        expect(formWrapper.find('#password').length).toBe(1);
        expect(formWrapper.find('#login').length).toBe(1);
    });

    it('submits data', () => {
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });
});

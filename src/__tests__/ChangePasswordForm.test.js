import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ChangePasswordForm from '../components/forms/ChangePasswordForm';

describe('Test ChangePasswordForm', () => {
    const formWrapper = shallow(<ChangePasswordForm />);
    const preventDefault = jest.fn();


    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form')).toHaveLength(1);
    });

    it('has all form fields', () => {
        expect(formWrapper.find('#current_password')).toHaveLength(1);
        expect(formWrapper.find('#new_password')).toHaveLength(1);
        expect(formWrapper.find('#new_password_again')).toHaveLength(1);
        expect(formWrapper.find('#change_pasword')).toHaveLength(1);
    });

    it('submits data', () => {
        formWrapper.setState({ current_password: 'Hi', new_password: 'Hello', new_password_again: 'Hello' });
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });
});

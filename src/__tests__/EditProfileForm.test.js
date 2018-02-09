import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import EditProfileForm from '../components/forms/EditProfileForm';

describe('EditProfileForm component', () => {
    localStorage.setItem('YUMMY_USER', { data: { firstname: 'd', lastname: 'e', email: 'mockEmail' } });
    const formWrapper = shallow(<EditProfileForm />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form').length).toBe(1);
    });

    it('renders the required form fields', () => {
        expect(formWrapper.find('#firstname')).toHaveLength(1);
        expect(formWrapper.find('#lastname')).toHaveLength(1);
        expect(formWrapper.find('#email')).toHaveLength(1);
        expect(formWrapper.find('#edit_profile')).toHaveLength(1);
    });

    it('renders inputs with user details', () => {
        formWrapper.update();
        expect(formWrapper.find('#firstname').props().value).toBe('d');
        expect(formWrapper.find('#lastname').props().value).toBe('e');
        expect(formWrapper.find('#email').props().value).toBe('mockEmail');
    });

    it('submits data', () => {
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });

    it('submit button submits the form', () => {
        formWrapper.find('#edit_profile').simulate('click');
        expect(preventDefault).toBeCalled();
    });
});


import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FormCard from './FormCard';
import RegisterForm from './RegisterForm';
import adapter from '../../Adapter';

describe('Test form Card', () => {
    const formCardWrapper = shallow(<FormCard title="Register Form" form={<RegisterForm />} />);
    it('Renders properly', () => {
        expect(shallowToJson(formCardWrapper)).toMatchSnapshot();
    });

    it('has a form', () => {
        expect(formCardWrapper.find(RegisterForm)).toHaveLength(1);
    });

    it('to have a title', () => {
        expect(formCardWrapper.find('.card .card-title').length).toEqual(1);
    });

    it('Its title to be Register Form', () => {
        expect(formCardWrapper.find('.card .card-title').text()).toContain('Register Form');
    });
});

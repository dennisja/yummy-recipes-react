import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchForm from '../components/forms/SearchForm';

describe('Test SearchForm', () => {
    const formWrapper = shallow(<SearchForm
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      handleSearchInputBlur={jest.fn()}
      handleSearchInputFocus={jest.fn()}
      getSearchInput={jest.fn()}
    />);
    const preventDefault = jest.fn();


    it('renders properly', () => {
        expect(shallowToJson(formWrapper)).toMatchSnapshot();
    });

    it('renders a form element', () => {
        expect(formWrapper.find('form')).toHaveLength(1);
    });

    it('renders the correct form fields', () => {
        expect(formWrapper.find('#q').length).toBe(1);
    });

    it('submits data', () => {
        formWrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });
});

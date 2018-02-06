import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MemoryRouter, Link } from 'react-router-dom';

import adapter from '../../Adapter';

import Footer, { ShortCutsButton } from './Footer';


describe('Footer Tests', () => {
    const footerWrapper = shallow(<Footer isLoggedIn />);
    const shortCutsBtn = shallow(<ShortCutsButton />);

    it('Footer renders properly', () => {
        expect(shallowToJson(footerWrapper)).toMatchSnapshot();
    });

    it('Footer renders a shorcut button component', () => {
        expect(footerWrapper.find(ShortCutsButton)).toHaveLength(1);
    });

    it('ShortCuts button renders properly', () => {
        expect(shallowToJson(shortCutsBtn)).toMatchSnapshot();
    });

    it('ShortCuts Button has a has two links', () => {
        expect(shortCutsBtn.find('div').length).toEqual(1);
    });
});

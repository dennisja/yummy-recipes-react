import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Home from '../components/Home';

describe('Test Home component', () => {
    const homeWrapper = shallow(<Home location={{ state: { pathname: '/home' } }} loginUser={jest.fn()} loggedIn={false} />);
    it('renders properly', () => {
        expect(shallowToJson(homeWrapper)).toMatchSnapshot();
    });

    it('renders two FormCard components', () => {
        expect(homeWrapper.find('FormCard')).toHaveLength(2);
    });
});


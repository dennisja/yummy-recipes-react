import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header, { MenuItems } from '../components/header/Header';

// mocking react dom
// jest.mock('react-dom');
const logoutUser = jest.fn();

describe('Test Header component', () => {
    const userData = { firstname: 'D', lastname: 'E', id: '1' };
    const headerOuput = shallow(<Header loggedIn logoutUser={logoutUser} userData={userData} />);
    const headerLoggedOuOuput = shallow(<Header loggedIn={false} logoutUser={logoutUser} />);

    it('renders correctly when logged in', () => {
        expect(shallowToJson(headerOuput)).toMatchSnapshot();
    });

    it('renders correctly when logged out', () => {
        expect(shallowToJson(headerLoggedOuOuput)).toMatchSnapshot();
    });

    it('has two NavLinks', () => {
        expect(headerOuput.find('NavLink')).toHaveLength(2);
    });

    it('renders a ProfileCard component', () => {
        expect(headerOuput.find('ProfileCard')).toHaveLength(1);
    });

    it('renders different content when loggedin and out', () => {
        expect(headerOuput === headerLoggedOuOuput).toBe(false);
    });
});

describe('Test MenuItems comonent ', () => {
    const menuItemsOutput = shallow(<MenuItems loggedIn logoutUser={logoutUser} userName="D" />);
    it('renders correctly', () => {
        expect(shallowToJson(menuItemsOutput)).toMatchSnapshot();
    });

    it('has five NavLinks when logged in', () => {
        expect(menuItemsOutput.find('NavLink').length).toBe(5);
    });

    it('renders nothing when a user is logged out', () => {
        expect(menuItemsOutput.find('NavLink').length).toBe(5);
        menuItemsOutput.setProps({ loggedIn: false });
        expect(menuItemsOutput.find('NavLink')).toHaveLength(0);
        expect(menuItemsOutput.equals(null)).toBe(true);
    });
});


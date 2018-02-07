import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from '../components/App';

describe('Test App top level component', () => {
  const appWrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(shallowToJson(appWrapper)).toMatchSnapshot();
  });

  it('has the right initial state', () => {
    expect(appWrapper.state().loggedIn).toEqual(false);
    expect(appWrapper.state().userData.data).toEqual(null);
    expect(appWrapper.state().userData.token).toEqual('');
  });

  it('renders a Header, Main and Footer components', () => {
    expect(appWrapper.find('Header')).toHaveLength(1);
    expect(appWrapper.find('Main')).toHaveLength(1);
    expect(appWrapper.find('Footer')).toHaveLength(1);
  });
});

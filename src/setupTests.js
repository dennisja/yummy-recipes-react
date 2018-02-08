import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { notify } from 'react-notify-toast';

configure({ adapter: new Adapter() });

class LocalStorageMock {

    store = {};

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

//mocking react-notify-toast dhow function
notify.show = jest.fn();

global.localStorage = new LocalStorageMock();

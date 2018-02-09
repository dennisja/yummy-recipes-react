import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {notify} from 'react-notify-toast';
import $ from 'jquery';

configure({adapter: new Adapter()});

class LocalStorageMock {

  store = {};

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = JSON.stringify(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

//mocking react-notify-toast dhow function
notify.show = jest.fn();

//mocking Materilize toast
const Materialize = {
  toast: function () {}
}

window.Materialize = Materialize;

// mocking jQuery
(function ($) {
  // collapsible method
  $.fn.collapsible = function () {}
  // material_select method
  $.fn.material_select = function () {}
})($);

$('.collapsible').collapsible = jest.fn();
$('select').material_select = jest.fn();
window.Materialize.toast = jest.fn();

global.localStorage = new LocalStorageMock();

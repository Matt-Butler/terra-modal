// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Modal from '../src/modal.js';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.react = React;
global.Modal = Modal;

// Skip createElement warnings but fail tests on any other warning
console.error = message => {
    if (!/(React.createElement: type should not be null)/.test(message)) {
        throw new Error(message);
    }
};

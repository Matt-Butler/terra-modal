import React from 'react';
import Modal from '../src/modal.js';

it('should shallow my modal', () => {
    const wrapper = shallow(
        <Modal phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should mount my modal', () => {
    const wrapper = mount(
        <Modal phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});


it('should render my modal', () => {
    const wrapper = render(
        <Modal phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});

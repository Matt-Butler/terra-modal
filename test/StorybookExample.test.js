import React from 'react';
import initStoryshots from 'storyshots';
import StorybookExample from '../src/StorybookExample.js';

// Run snapshot tests for react-storybook
initStoryshots();

it('should shallow my modal', () => {
    const wrapper = shallow(
        <StorybookExample phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should mount my modal', () => {
    const wrapper = mount(
        <StorybookExample phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});


it('should render my modal', () => {
    const wrapper = render(
        <StorybookExample phrase="Jest" />
    );
    expect(wrapper).toMatchSnapshot();
});

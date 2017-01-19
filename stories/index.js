import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import StorybookExample from '../src/StorybookExample';


storiesOf('StorybookExample Phrase', module)
  .add('With default props', () => (
    <StorybookExample />
  ))
  .add('With phrase Matt', () => (
    <StorybookExample phrase="Matt" />
  ))
  .add('With phrase the other side', () => (
    <StorybookExample phrase="the other side" />
  ));


storiesOf('StorybookExample Context', module)
  .add('Primary', () => (
    <StorybookExample className="StorybookExample--primary" />
  ))
  .add('Secondary', () => (
    <StorybookExample className="StorybookExample--secondary" />
  ))
  .add('Positive', () => (
    <StorybookExample className="StorybookExample--negative" />
  ));

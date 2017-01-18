import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Modal from '../src/Modal';


storiesOf('Modal', module)
  .add('With phrase Matt', () => (
    <Modal phrase="Matt" />
  ))
  .add('With phrase L5', () => (
    <Modal phrase="L5" />
  ));

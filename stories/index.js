import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Modal from '../src/Modal';


storiesOf('Modal Phrase', module)
  .add('With default props', () => (
    <Modal />
  ))
  .add('With phrase Matt', () => (
    <Modal phrase="Matt" />
  ))
  .add('With phrase L5', () => (
    <Modal phrase="L5" />
  ));


storiesOf('Modal Context', module)
  .add('Primary', () => (
    <Modal className="terra-Modal--primary" />
  ))
  .add('Secondary', () => (
    <Modal className="terra-Modal--secondary" />
  ))
  .add('Positive', () => (
    <Modal className="terra-Modal--negative" />
  ));

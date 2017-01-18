import React from 'react';
import '../src/Modal.scss';

const Modal = props => <h1 className={`terra-Modal ${props.className}`}>Hello from {props.phrase}!</h1>;

Modal.propTypes = {
  phrase: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

Modal.defaultProps = {
  phrase: 'a Stranger',
  className: 'terra-Modal--primary',
};

export default Modal;

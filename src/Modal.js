import React from 'react';
import '../src/Modal.scss';

const Modal = props => <h1 className="terra-Modal">Hello from {props.phrase}!</h1>;

Modal.propTypes = {
  phrase: React.PropTypes.string.isRequired,
};

Modal.defaultProps = {
  phrase: 'a Stranger',
};

export default Modal;


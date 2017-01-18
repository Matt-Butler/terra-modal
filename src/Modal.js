import React, { Component, PropTypes } from 'react';
// import '../src/Modal.scss';

class Modal extends Component {
  render() {
    return <h1 className="terra-Modal">Hello from {this.props.phrase}!</h1>;
  }
}

export default Modal;

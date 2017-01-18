'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../src/Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  return _react2.default.createElement(
    'h1',
    { className: 'terra-Modal' },
    'Hello from ',
    props.phrase,
    '!'
  );
};

Modal.propTypes = {
  phrase: _react2.default.PropTypes.string.isRequired
};

Modal.defaultProps = {
  phrase: 'a Stranger'
};

exports.default = Modal;
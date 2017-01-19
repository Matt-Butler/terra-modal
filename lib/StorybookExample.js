'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../src/StorybookExample.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorybookExample = function StorybookExample(props) {
  return _react2.default.createElement(
    'h1',
    { className: props.className },
    'Hello from ',
    props.phrase,
    '!'
  );
};

StorybookExample.propTypes = {
  phrase: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string
};

StorybookExample.defaultProps = {
  phrase: 'a Stranger',
  className: 'StorybookExample--primary'
};

exports.default = StorybookExample;
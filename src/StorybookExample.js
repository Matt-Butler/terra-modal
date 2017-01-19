import React from 'react';
import '../src/StorybookExample.scss';

const StorybookExample = props => <h1 className={props.className}>Hello from {props.phrase}!</h1>;

StorybookExample.propTypes = {
  phrase: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

StorybookExample.defaultProps = {
  phrase: 'a Stranger',
  className: 'StorybookExample--primary',
};

export default StorybookExample;

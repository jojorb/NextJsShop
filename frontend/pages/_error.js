import React from 'react';
import PropTypes from 'prop-types';
import MiA from '../components/missing/MiA';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    // eslint-disable-next-line no-nested-ternary
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode ? (
          <MiA
            message={`An error ${this.props.statusCode} occurred on server`}
          />
        ) : (
          <MiA
            message={`An error ${this.props.statusCode} occurred on client`}
          />
        )}
      </p>
    );
  }
}

// Error.propTypes = {
//   statusCode: PropTypes.string.isRequired,
// };

export default Error;

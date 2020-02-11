import styled from 'styled-components';
import PropTypes from 'prop-types';

const MarkerStation = styled.div`
  .station:before {
    content: ' ';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 8px;
    margin: 0 8px;
  }
  .station {
    border-radius: 20px;
    padding-right: 12px;
    margin: -12px;
    color: transparent;
    line-height: 24px;
    font-size: 13px;
    white-space: nowrap;
  }
  .station span {
    display: none;
  }
  .station:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
  .station:hover span {
    display: inline-block;
  }
`;

const MarkerSpan = props => {
  const { name } = props;
  return (
    <MarkerStation>
      <div className="station">
        <span>{name}</span>
      </div>
    </MarkerStation>
  );
};

MarkerSpan.propTypes = {
  name: PropTypes.string,
};

export default MarkerSpan;

import styled from 'styled-components';
import PropTypes from 'prop-types';
import Pin from './Pin';

const SvgContainer = styled.div`
  width: 42px;
  height: 34px;
  svg {
    width: 100%;
    height: 100%;
    transform: translate(-21px, -21px);
    cursor: pointer;
  }
`;

const MarkerPin = props => {
  const { name } = props;
  return (
    <SvgContainer>
      <Pin
        name={name}
        size={41}
        offsetLeft={-41}
        offsetTop={34}
        // onMouseEnter={newPopupInfo => setPopupInfo({ newPopupInfo: true })}
        // onMouseLeave={newPopupInfo => setPopupInfo({ newPopupInfo: null })}
      />
    </SvgContainer>
  );
};

MarkerPin.propTypes = {
  name: PropTypes.string,
};

export default MarkerPin;

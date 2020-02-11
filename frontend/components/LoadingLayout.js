import styled, { keyframes } from 'styled-components';
import LoadingZone from './LoadingZone';

const draw = keyframes`
  0% { stroke:  #88F708} 
  100% {stroke-dashoffset: 300; stroke: #B4F866; }
`;

const letterflash = keyframes`
  0% { fill:  #88F708} 
  100% {fill: #C5E5A0}
`;

const LoadingSvg = styled.div`
  svg {
    width: 200px;
    display: block;
    .circle {
      stroke-dasharray: 150;
      animation: ${draw} 2s linear infinite;
    }
    .one,
    .two,
    .three,
    .four,
    .five,
    .six {
      animation-name: ${letterflash};
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 2s;
    }
    .six {
      animation-delay: 0.5s;
    }
    .five {
      animation-delay: 0.4s;
    }
    .four {
      animation-delay: 0.3s;
    }
    .three {
      animation-delay: 0.2s;
    }
    .two {
      animation-delay: 0.1s;
    }
    .one {
      animation-delay: 0s;
    }
  }
`;

const LoadingLayout = () => (
  <LoadingSvg>
    <LoadingZone />
  </LoadingSvg>
);
export default LoadingLayout;

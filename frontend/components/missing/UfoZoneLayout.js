import styled, { keyframes } from 'styled-components';
import UfoZone from './UfoZone';

const shipy = keyframes`
  0%{transform:translateY(0)}
  45%{transform:translateY(60px)}
`;

const ufo = keyframes`
  0%{
    transform:rotate(0);
    animation-timing-function:cubic-bezier(.34,.15,.61,1)
  }
  20%{
    transform:rotate(-5deg);
    animation-timing-function:cubic-bezier(.34,.15,.61,1)
  }
  65%{
    transform:rotate(6deg);
    animation-timing-function:linear
  }
`;

const ufowin = keyframes`
  0%,to{transform:translateX(0) translateY(0)}
  50%{transform:translateX(33px) translateY(-4px)}
`;

const ufowinscale = keyframes`
  0%,50%,to{transform:scaleX(1)}
  25%,75%{transform:scaleX(1.2)}
`;

const beamfront = keyframes`
  0%,to{transform:scaleX(1) skewX(0) skewY(0)}
  45%{transform:scaleX(1.6) skewX(2deg) skewY(1.4deg) rotate(-4deg) translateX(-8px)}
  0%,25%,50%,75%,to{opacity:.5}
  12.5%,37.5%,62%,87.5%{opacity:.9}
`;

const beamfront2 = keyframes`
  0%,to{transform:scaleX(1) skewX(0) skewY(0)}
  45%{transform:scaleX(1.6) skewX(1deg) rotate(-10deg) translateX(-10px) translateY(-2px)}
  0%,25%,50%,75%,to{opacity:.9}
  12.5%,37.5%,62%,87.5%{opacity:.5}
`;

const moonwalk = keyframes`
  0%{transform:rotate(0deg)}
  10.6%{transform:rotate(-30deg)}
  to{transform:rotate(360deg)}
`;

const starblink = keyframes`
  0%{transform:rotate(0deg) scale(0);opacity:0}
  5.3%{transform:rotate(45deg) scale(1.1)}
  10.6%{transform:rotate(90deg) scale(0);opacity:1}
  .05%{opacity:1}
  11%,to{opacity:0}
`;

const shootingstar = keyframes`
  2.27%{stroke-dashoffset:0}
  4.54%,to{stroke-dashoffset:-200}
`;

const shootingstar22 = keyframes`
  2.27%{stroke-dashoffset:0}
  4.54%,to{stroke-dashoffset:-500}
`;

const shootingstar6 = keyframes`
  2.27%{stroke-dashoffset:0}
  4.54%,to{stroke-dashoffset:-220}
`;

const clouds = keyframes`
  50%{transform:translateX(-50px)}
  to{transform:translateX(0)}
`;

const UfoSvg = styled.div`
  svg {
    max-width: 100%;
    max-height: 45vh;
    .shipy {
      animation-name: ${shipy};
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 2.68s;
    }
    .ufo {
      transform-origin: 312.8px 175.2px;
      animation-name: ${ufo};
      animation-iteration-count: infinite;
      animation-duration: 2.68s;
    }
    #Window {
      animation-name: ${ufowin};
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 2.68s;
    }
    .beams,
    .beams2,
    .themoon,
    .winscale {
      animation-name: ${ufowinscale};
      animation-iteration-count: infinite;
      animation-duration: 2.68s;
      animation-timing-function: ease-in-out;
      transform-origin: 312.8px;
    }
    .beams,
    .beams2,
    .themoon {
      animation-name: ${beamfront};
      transform-origin: 312.8px 175.2px;
    }
    .beams2,
    .themoon {
      animation-name: ${beamfront2};
      transform-origin: 312.8px 185.2px;
    }
    .themoon {
      animation-name: ${moonwalk};
      animation-duration: 2.64s;
      animation-timing-function: ease-out;
      transform-origin: 626px 192px;
    }
    .star1,
    .star2,
    .star3,
    .star4,
    .star5,
    .star6 {
      animation-name: ${starblink};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: ease-in-out;
      transform-origin: 441.25px 278.7px;
      animation-delay: 0s;
      opacity: 0;
    }
    .star2,
    .star3,
    .star4,
    .star5,
    .star6 {
      transform-origin: 125.8px 315.75px;
      animation-delay: 0.28s;
    }
    .star3,
    .star4,
    .star5,
    .star6 {
      transform-origin: 713.65px 178.1px;
      animation-delay: 0.84s;
    }
    .star4,
    .star5,
    .star6 {
      transform-origin: 732px 418.85px;
      animation-delay: 1.36s;
    }
    .star5,
    .star6 {
      transform-origin: 168.3px 194.7px;
      animation-delay: 1.64s;
    }
    .star6 {
      transform-origin: 552.1px 174.7px;
      animation-delay: 2.16s;
    }
    #LaserLine_1,
    #LaserLine_2,
    #LaserLine_3,
    #LaserLine_4,
    #LaserLine_5 {
      animation-name: ${shootingstar};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: linear;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation-fill-mode: forwards;
      animation-delay: 0.12s;
    }
    #LaserLine_2,
    #LaserLine_3,
    #LaserLine_4,
    #LaserLine_5 {
      animation-delay: 0.24s;
    }
    #LaserLine_3,
    #LaserLine_4,
    #LaserLine_5 {
      animation-delay: 0.36s;
    }
    #LaserLine_4,
    #LaserLine_5 {
      animation-delay: 0.48s;
    }
    #LaserLine_5 {
      animation-delay: 0.6s;
    }
    #LaserLine_10,
    #LaserLine_6,
    #LaserLine_7,
    #LaserLine_8,
    #LaserLine_9 {
      animation-name: ${shootingstar6};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: linear;
      stroke-dasharray: 220;
      stroke-dashoffset: 220;
      animation-fill-mode: forwards;
      animation-delay: 0.72s;
    }
    #LaserLine_10,
    #LaserLine_7,
    #LaserLine_8,
    #LaserLine_9 {
      animation-name: ${shootingstar};
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation-delay: 0.84s;
    }
    #LaserLine_10,
    #LaserLine_8,
    #LaserLine_9 {
      animation-delay: 0.96s;
    }
    #LaserLine_10,
    #LaserLine_9 {
      animation-delay: 1.08s;
    }
    #LaserLine_10 {
      animation-delay: 1.2s;
    }
    #LaserLine_11,
    #LaserLine_12,
    #LaserLine_13,
    #LaserLine_14,
    #LaserLine_15,
    #LaserLine_16,
    #LaserLine_17 {
      animation-name: ${shootingstar};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: linear;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation-fill-mode: forwards;
      animation-delay: 1.32s;
    }
    #LaserLine_12,
    #LaserLine_13,
    #LaserLine_14,
    #LaserLine_15,
    #LaserLine_16,
    #LaserLine_17 {
      animation-delay: 1.44s;
    }
    #LaserLine_13,
    #LaserLine_14,
    #LaserLine_15,
    #LaserLine_16,
    #LaserLine_17 {
      animation-delay: 1.56s;
    }
    #LaserLine_14,
    #LaserLine_15,
    #LaserLine_16,
    #LaserLine_17 {
      animation-delay: 1.68s;
    }
    #LaserLine_15,
    #LaserLine_16,
    #LaserLine_17 {
      animation-delay: 1.8s;
    }
    #LaserLine_16,
    #LaserLine_17 {
      animation-delay: 1.92s;
    }
    #LaserLine_17 {
      animation-delay: 2.02s;
    }
    #LaserLine_18,
    #LaserLine_19,
    #LaserLine_20,
    #LaserLine_21,
    #LaserLine_22,
    #LaserLine_23,
    #LaserLine_24 {
      animation-name: ${shootingstar};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: linear;
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation-fill-mode: forwards;
      animation-delay: 2.14s;
    }
    #LaserLine_19,
    #LaserLine_20,
    #LaserLine_21,
    #LaserLine_22,
    #LaserLine_23,
    #LaserLine_24 {
      animation-delay: 2.26s;
    }
    #LaserLine_20,
    #LaserLine_21,
    #LaserLine_22,
    #LaserLine_23,
    #LaserLine_24 {
      animation-delay: 2.38s;
    }
    #LaserLine_21,
    #LaserLine_22,
    #LaserLine_23,
    #LaserLine_24 {
      animation-delay: 2.5s;
    }
    #LaserLine_22,
    #LaserLine_23,
    #LaserLine_24 {
      animation-name: ${shootingstar22};
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
      animation-delay: 2.64s;
    }
    #LaserLine_23,
    #LaserLine_24 {
      animation-name: ${shootingstar};
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation-delay: 2.26s;
    }
    #LaserLine_24 {
      animation-delay: 2.64s;
    }
    #Cloud1,
    #Cloud2 {
      animation-name: ${clouds};
      animation-iteration-count: infinite;
      animation-duration: 2.64s;
      animation-timing-function: ease-in-out;
      transform-origin: 200px 425px;
    }
    #Cloud2 {
      transform-origin: 450px 385px;
    }
  }
`;

const UfoZoneLayout = props => (
  <UfoSvg>
    <UfoZone />
  </UfoSvg>
);
export default UfoZoneLayout;

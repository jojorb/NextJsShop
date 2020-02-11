import React from 'react';
import styled from 'styled-components';
// import NoSSR from 'react-no-ssr';
// import AwesomeSlider from 'react-awesome-slider';
// import Slider from 'react-slick';
// import 'react-awesome-slider/dist/styles.css';
// import vdz1 from '../../static/slider/'
import { H2 } from '../styled/global';
import TheDate from '../TheDate';
import { brand, logo } from '../../config';

const SelectionGrid = styled.div`
  background: ${props => props.theme.backGrey};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('http://placekitten.com/g/1200/700');
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  /*
  animation: bckganime 36s linear infinite 0s;
  @keyframes bckganime {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    8% {
      opacity: 1;
      transform: scale(0.95);
      animation-timing-function: ease-out;
    }
    17% {
      opacity: 1;
      transform: scale(0.97) rotate(0deg);
    }
    25% {
      opacity: 0;
      transform: scale(1) rotate(0deg);
    }
    100% {
      opacity: 0;
    }
  } */
  /* // ko */
  display: grid;
  grid-template-rows: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'date'
    'selections';
  height: 500px;
`;

const DisplayDate = styled.div`
  grid-area: date;
  align-self: center;
  justify-self: center;
  padding-top: 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const OurSelection = styled.div`
  grid-area: selections;
  align-self: start;
  justify-self: center;
  padding-top: 1rem;
  text-align: center;
  img {
    text-align: center;
    height: 264px;
    opacity: 0.25;
    filter: alpha(opacity=25);
  }
`;

const Selection = props => (
  <SelectionGrid>
    <DisplayDate>
      <TheDate />
    </DisplayDate>
    <OurSelection>
      <H2>{brand}</H2>
      <img alt="logo" src={logo} />
    </OurSelection>
    {/* <NoSSR>
      <Slider
        settings={
          (settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          })
        }
      >
        <OurSelection>
          <img alt="o" src="./../static/slider/027A4991-.jpg" />
          <img alt="o" src="./../static/slider/027A4991-.jpg" />
          <img alt="o" src="./../static/slider/027A4991-.jpg" />
        </OurSelection>
      </Slider>
    </NoSSR> */}
  </SelectionGrid>
);
export default Selection;

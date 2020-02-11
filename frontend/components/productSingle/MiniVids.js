import styled from 'styled-components';
import React from 'react';
import ReactPlayer from 'react-player';
import { H2 } from '../styled/global';

const VidzContainer = styled.div`
  margin-top: 2rem;
  background: ${props => props.theme.backGrey};
  padding: 1.2rem;
  text-align: center;
  display: grid;
`;

const VidzWarpper = styled.div`
  width: 75%;
  height: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-self: center;
  justify-self: center;
`;

const MiniVids = props => {
  console.log('hola');
  return (
    <VidzContainer>
      <H2>présentation vidéos</H2>
      {props.videos.vid.map(data => (
        <VidzWarpper>
          <ReactPlayer
            url={data}
            controls
            playing={false}
            width="100%"
            height="100%"
          />
        </VidzWarpper>
      ))}
    </VidzContainer>
  );
};
export default MiniVids;
// https://www.facebook.com/laetitia.dron.3/videos/2292107647766891/

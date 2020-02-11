import styled from 'styled-components';
import React from 'react';

const GallerieContainer = styled.div`
  padding-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`;

const Photo = styled.div`
  align-self: center;
  justify-self: center;
  img {
    height: 178px;
    width: auto;
    object-fit: contain;
    text-align: center;
    justify-self: center;
  }
`;

const MiniPhotos = props => {
  console.log('hola');
  return (
    <GallerieContainer>
      {props.photos.img.map(data => (
        <Photo>
          <img src={data} alt="more photos" />
        </Photo>
      ))}
    </GallerieContainer>
  );
};
export default MiniPhotos;

import React from 'react';
import { GlobalStyle } from './globalstyle';
import HeadMeta from './HeadMeta';
import HeadTags from './HeadTags';

function Head(props) {
  return (
    <>
      <HeadMeta />
      <HeadTags />
      <GlobalStyle />
    </>
  );
}

export default Head;

import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { H5 } from '../styled/global';

const ProductSmallGrid = styled.div`
  display: grid;
  &:hover {
    cursor: pointer;
  }
`;

const ProductImg = styled.div`
  justify-self: stretch;
  img {
    width: 100%;
  }
`;

const ProductDescription = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
  text-align: center;
  padding: 1rem 0rem;
`;

export default class PodsAllRender extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <Link
        prefetch
        href={{
          pathname: '/viewpods',
          query: { id: item.id },
        }}
      >
        <a title={item.title}>
          <ProductSmallGrid>
            <ProductImg>
              <img src={item.image} alt={item.title} />
            </ProductImg>
            <ProductDescription>
              <H5>{item.title}</H5>
            </ProductDescription>
          </ProductSmallGrid>
        </a>
      </Link>
    );
  }
}

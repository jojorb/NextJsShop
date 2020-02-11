import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SmallItems = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const ProductImage = styled.img`
  height: 180px;
  width: auto;
  object-fit: contain;
  text-align: center;
  justify-self: center;
`;

const ProductTitle = styled.div`
  text-align: center;
  justify-self: center;
`;

export default class ProductSameRender extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <Link
        prefetch
        href={{
          pathname: '/viewproduct',
          query: { id: item.id },
        }}
      >
        <a title={item.title}>
          <SmallItems>
            <ProductImage src={item.image} alt={item.title} />
            <ProductTitle>{item.title}</ProductTitle>
          </SmallItems>
        </a>
      </Link>
    );
  }
}

import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H5 } from '../styled/global';

const ProductSmallGrid = styled.div`
  display: grid;
  &:hover {
    cursor: pointer;
  }
`;

const ProductImg = styled.div`
  /* justify-self: stretch; */
  align-self: center;
  justify-self: center;
  padding: 2rem;
  img {
    height: 420px;
    width: auto;
    object-fit: contain;
    text-align: center;
    justify-self: center;
  }
`;

const ProductDescription = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
  text-align: center;
  padding: 1rem 0rem;
`;

export default class ProductAllRender extends PureComponent {
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

ProductAllRender.propTypes = {
  item: PropTypes.object,
};

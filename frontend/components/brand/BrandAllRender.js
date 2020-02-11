import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { H4, BtnJad } from '../styled/global';

const OfficialDistro = styled.div`
  display: grid;
  grid-template-rows: auto 200px 60px auto;
  justify-self: center;
  align-self: center;
  img {
    height: 200px;
    object-fit: contain;
    max-width: 512px;
  }
  padding-bottom: 4rem;
  padding-top: 2rem;
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
  max-width: ${props => props.maxWidth || '120px'};
  width: 100%;
  font-size: ${props => props.ftSize || '2.4rem'};
  text-align: center;
  justify-self: center;
  align-self: start;
  a {
    transition: color 0.2s ease-in-out, color 0.4s ease-in-out;
  }
`;

export default class BrandAllRender extends PureComponent {
  render() {
    const { brand } = this.props;
    console.log(brand);

    return (
      <>
        <OfficialDistro>
          <H4>{brand.name}</H4>
          <Link
            prefetch
            href={{
              pathname: '/brandproducts',
              query: { id: brand.id },
            }}
          >
            <a title="voir les produits">
              <img src={brand.image} alt={brand.name} />
            </a>
          </Link>
          <BtnJad>
            <Link
              prefetch
              href={{
                pathname: '/brandproducts',
                query: { id: brand.id },
              }}
            >
              <a title="voir les produits">voir les produits</a>
            </Link>
          </BtnJad>
          <Social>
            <Link href={brand.www}>
              <a target="_blank">
                <i className="fas fa-external-link-square-alt" />
              </a>
            </Link>
            <Link href={brand.instagram}>
              <a target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </Link>
            <Link href={brand.facebook}>
              <a target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </Link>
          </Social>
        </OfficialDistro>
        <hr />
      </>
    );
  }
}

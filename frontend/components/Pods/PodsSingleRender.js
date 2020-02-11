import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import styled from 'styled-components';
import Link from 'next/link';
import ProductSameQuery from '../ProductSame/ProductSameQuery';
import UserQuery from '../UserQuery';
import formatMoney from '../../lib/formatMoney';
import AddToCart from '../cart/AddToCart';
import { Add2CartBtn } from '../styled/cart';
import Help from '../Help';
import BrandDescription from '../productSingle/BrandDescription';
import StarRating from '../productSingle/StarRating';

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 4rem;
  margin: 4rem 8rem;
  padding: 0.5rem;
  align-items: flex-start;
`;

const LeftSide = styled.div`
  text-align: center;
  justify-self: center;
`;

const ProductImage = styled.img`
  height: 620px;
  width: auto;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 2rem;
  background: ${props => props.theme.backGrey};
  padding: 1.2rem;
`;

const ProductFeat = styled.div``;
const ProductFeatures = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  .flav {
    /* border: 1px solid ${props => props.theme.orange}; */
    color: ${props => props.theme.black};
    font-weight: 700;
  }
`;

const Flavor = styled.div`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const Features = styled.div`
  font-size: 1.2rem;
  padding: 0.3rem 0rem;
`;

const BrandLogo = styled.img`
  padding: 2rem 4rem;
  height: 112px;
  display: block;
  margin: 0 auto;
`;

const RightSide = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 11.8rem;
  align-self: flex-start;
`;

const ProductTags = styled.span`
  font-size: 1.75rem;
  color: grey;
  text-transform: capitalize;
  margin-bottom: 1.22rem;
`;

const ProductTitle = styled.h1`
  margin: 0;
  padding: 0;
  padding-bottom: 1.5rem;
  text-transform: uppercase;
  font-size: 2.75rem;
  font-weight: 100;
`;

const ProductShortDescription = styled.div`
  text-transform: lowercase;
  font-size: 1.56rem;
  font-weight: 400;
`;

const ProductSelected = styled.div`
  margin-top: 2.7rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 1rem 0;
  font-size: 1.7rem;
  text-transform: lowercase;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Livraison = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: darkgrey;
  font-size: 1.8rem;
  text-transform: none;
`;

const today = new Date();
const MyShipping = addDays(today, 2);
const formattedDate = format(MyShipping, 'dddd DD MMMM', {
  locale: frenchLocale,
});

const PodsSingleQuery = ({ item }) => (
  <ProductLayout>
    <LeftSide>
      <ProductImage src={item.image} alt={item.title} />
      <ProductInfo>
        <ProductFeat>
          <Flavor>autonomie</Flavor>
          <StarRating rating={5} />
          <Flavor>tirage</Flavor>
          <StarRating rating={4} />
          <Flavor>confore</Flavor>
          <StarRating rating={4} />
          <ul>
            <li>Materiel: {item.materiel}</li>
            <li>Dimensions: {item.dimansions}</li>
            <li>Batterie: {item.batterie}</li>
            <li>Rechargement : {item.recharge}</li>
            <li>Pod: {item.cartouche}</li>
            {/* <li>Autonomie : Indicateur Led</li> */}
            {/* <li>Plage de tension : 3.0V – 4.2V</li> */}
          </ul>
        </ProductFeat>
        <ProductFeatures>
          <Features>Origine: {item.brand.origine}</Features>
          <Features title="Juice Maker">
            Marque: {item.brand.name}
            <Link href={item.brand.www || 'https://www.juice-avenue.com'}>
              <a target="_blank">
                <BrandLogo src={item.brand.image} title={item.brand.name} />
              </a>
            </Link>
            <BrandDescription brand={item.brand.description} />
          </Features>
        </ProductFeatures>
      </ProductInfo>
    </LeftSide>

    <RightSide>
      <ProductTags>
        # {item.category.name} - {item.brand.name}
      </ProductTags>
      <ProductTitle>
        {item.label} {item.title}
      </ProductTitle>
      <ProductShortDescription>
        {item.description} - {item.feature}
      </ProductShortDescription>

      <UserQuery>
        {({ data: { me } }) => {
          if (me) {
            const allow = me.permissions.some(permission =>
              ['ADMIN', 'JADFAM'].includes(permission)
            );
            return (
              <>
                <ProductSelected>
                  <div>
                    {item.label} - {item.color}
                  </div>
                  {allow === true ? (
                    <div>{formatMoney(item.price)} HT</div>
                  ) : (
                    <div>en attente de validation</div>
                  )}
                </ProductSelected>
                <Livraison>
                  <div>Livraison à partir du&nbsp;{formattedDate}</div>
                </Livraison>
                {allow === true ? (
                  <AddToCart id={item.id} />
                ) : (
                  <Add2CartBtn>
                    <Link href="/user">
                      <a>verifier votre compte</a>
                    </Link>
                  </Add2CartBtn>
                )}
              </>
            );
          }
          return (
            <>
              <ProductSelected>
                <div>
                  {item.label} - {item.color}
                </div>
                <div>s'enregister pour avoir le prix</div>
              </ProductSelected>
              <Livraison>
                <div>Livraison à partir du&nbsp;{formattedDate}</div>
              </Livraison>

              <Add2CartBtn>
                <Link href="/register">
                  <a>s'enregister</a>
                </Link>
              </Add2CartBtn>
            </>
          );
        }}
      </UserQuery>
      <Help />
    </RightSide>
    <ProductSameQuery label={item.label} title={item.title} />
  </ProductLayout>
);
export default PodsSingleQuery;

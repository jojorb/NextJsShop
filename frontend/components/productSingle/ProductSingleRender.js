import { addDays, format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import AddToCart from '../cart/AddToCart';
import Help from '../Help';
import ProductSameQuery from '../ProductSame/ProductSameQuery';
import { Add2CartBtn } from '../styled/cart';
import UserQuery from '../UserQuery';
import BrandDescription from './BrandDescription';
import Miscellaneous from './Miscellaneous';
import StarRating from './StarRating';
import ProductSingleRenderMobile from './ProductSingleRenderMobile';
import Miscellaneous2 from './Miscellaneous2';
import MiniPhotos from './MiniPhotos';
import MiniVids from './MiniVids';

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

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 2rem;
  background: ${props => props.theme.backGrey};
  padding: 1.2rem;
`;

const ProductTaste = styled.div``;

const Flavor = styled.div`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const ProductFeatures = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  .flav {
    /* border: 1px solid ${props => props.theme.orange}; */
    color: ${props => props.theme.black};
    font-weight: 700;
  }
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

export default class ProductSingleRender extends PureComponent {
  state = {
    width: 1337,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    console.log(window.innerWidth);
  };

  render() {
    const { item } = this.props;
    const { width } = this.state;
    const isMobile = width <= 1250;
    const BckImg = item.imageBack;
    const ProdImgLayout = styled.div`
      position: relative;
      width: 100%;
      overflow: hidden;
    `;

    const BackgroundProdImg = styled.div`
      background-image: url(${BckImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 0;
      opacity: 0.2;
      filter: alpha(opacity=20);
      height: 600px;
      width: auto;
    `;

    const ProdImgPosition = styled.div`
      position: absolute;
      top: 0px;
      left: 0px;
      padding-top: 50px;
      z-index: 100;
      width: 100%;
      height: 100%;
    `;

    const ProductImage = styled.img`
      height: 500px;
      width: 100%;
      object-fit: contain;
    `;

    if (isMobile) {
      return <ProductSingleRenderMobile item={item} />;
    }
    return (
      <div>
        <ProductLayout>
          <LeftSide>
            <ProdImgLayout>
              <BackgroundProdImg />
              <ProdImgPosition>
                <ProductImage src={item.image} alt={item.title} />
              </ProdImgPosition>
            </ProdImgLayout>

            {item.photosj !== null && <MiniPhotos photos={item.photosj} />}
            {item.videosj !== null && <MiniVids videos={item.videosj} />}

            <ProductInfo>
              {item.category.name === 'pod' ? (
                <ProductTaste>
                  <Flavor>autonomie</Flavor>
                  <StarRating rating={item.autonomie} />
                  <Flavor>ergonomie</Flavor>
                  <StarRating rating={item.tirage} />
                  <Flavor>rendu</Flavor>
                  <StarRating rating={item.rendu} />
                  <Flavor>solidité</Flavor>
                  <StarRating rating={item.solidite} />
                </ProductTaste>
              ) : (
                <ProductTaste>
                  <Flavor>frais</Flavor>
                  <StarRating rating={item.fresh} />
                  <Flavor>Fruits</Flavor>
                  <StarRating rating={item.fruit} />
                  <Flavor>Gourmand</Flavor>
                  <StarRating rating={item.gourmand} />
                  <Flavor>Classic</Flavor>
                  <StarRating rating={item.classic} />
                </ProductTaste>
              )}

              <ProductFeatures>
                <Flavor className="flav">
                  {item.category.name === 'pod' ? (
                    <span>{item.label}</span>
                  ) : (
                    <span>{item.flavor}</span>
                  )}
                </Flavor>
                <Features>
                  {item.category.name === 'pod' ? (
                    <span>{item.color}</span>
                  ) : (
                    <span>VG/PG: {item.vgpg}</span>
                  )}
                </Features>
                <Features>Origine: {item.brand.origine}</Features>
                <Features title="Juice Maker">
                  Marque: {item.brand.name}
                  <Link href={item.brand.www || 'https://www.juice-avenue.com'}>
                    <a target="_blank">
                      <BrandLogo
                        src={item.brand.image}
                        title={item.brand.name}
                      />
                    </a>
                  </Link>
                  <BrandDescription brand={item.brand.description} />
                </Features>
              </ProductFeatures>
              {item.category.name === 'pod' ? (
                <Miscellaneous2
                  feat={item.feature}
                  details={item.features !== null && item.features}
                />
              ) : (
                <Miscellaneous
                  brand={item.brand.name}
                  ml={item.vol}
                  cat={item.category.name}
                />
              )}
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
              {item.description}
            </ProductShortDescription>

            <UserQuery>
              {({ data: { me } }) => {
                if (me) {
                  const allow = me.permissions.some(permission =>
                    ['ADMIN', 'USERCHECKED'].includes(permission)
                  );
                  return (
                    <>
                      <ProductSelected>
                        <div>
                          {item.category.name === 'pod' ? (
                            <span>
                              {item.label} - {item.color}
                            </span>
                          ) : (
                            <span>
                              flacon de {item.vol}ml en {item.nico}mg
                            </span>
                          )}
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
                        {item.category.name === 'pod' ? (
                          <span>
                            {item.label} - {item.color}
                          </span>
                        ) : (
                          <span>
                            flacon de {item.vol}ml en {item.nico}mg
                          </span>
                        )}
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
      </div>
    );
  }
}

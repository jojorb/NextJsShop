import Link from 'next/link';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';
import {
  CfC,
  CheckoutContent,
  CheckoutNavStyle,
  NavBtnBlack,
  NavitemChecked,
  PrevNextNav,
} from '../styled/checkout';
import User from '../UserQuery';

const ShippingAdd = styled.div`
  background: lightgrey;
  padding: 4rem;
  margin-bottom: 3rem;
`;

const CheckYourShipping = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  grid-gap: 0rem;
  margin-bottom: 4rem;
  font-size: 1.6rem;
`;

const MyAddressGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 3rem;
`;

const MyAdrSlug = styled.div`
  padding: 1rem;
  border-right: 1px solid lightgrey;
  .adrslug {
    padding: 1.5rem;
    font-size: 1.4rem;
  }
`;

const ChangeMyAdr = styled.div`
  padding: 1.5rem;
  font-size: 1.6rem;
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: darkgrey;
    }
  }
`;

const Stot = styled.div`
  border-top: 1px solid lightgrey;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1.5rem 0;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export default class CheckoutFormAdr extends PureComponent {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <CheckoutNavStyle>
          <NavitemChecked>
            <div className="tal active">
              <a onClick={this.back}>commande</a>
            </div>
          </NavitemChecked>
          <NavitemChecked>
            <div className="tac active">adresses/livraison</div>
          </NavitemChecked>
          <NavitemChecked>
            <div className="tar disable">paiement</div>
          </NavitemChecked>
        </CheckoutNavStyle>

        <CheckoutContent>
          <CfC>
            <PrevNextNav>
              <div>
                {/* <NavBtnBlack onClick={this.back}>
            retour à la commande
          </NavBtnBlack> */}
              </div>
              <div>
                <NavBtnBlack onClick={this.continue}>
                  confirmer et aller au paiement
                </NavBtnBlack>
              </div>
            </PrevNextNav>

            <h1>votre adresse de facturation</h1>

            <User>
              {({ data: { me } }) => {
                if (!me) return null;
                return (
                  <div>
                    <MyAddressGrid>
                      <MyAdrSlug>
                        {me.address.length > 0 && (
                          <select
                            name="address"
                            value={values.address}
                            onChange={handleChange('address')}
                          >
                            <option>
                              choisisez votre adresse de facturation
                            </option>
                            {me.address.map(adr => (
                              <option key={adr.id}>{adr.title}</option>
                            ))}
                          </select>
                        )}

                        {me.address
                          .filter(adrs => adrs.title === values.address)
                          .map(adrs => (
                            <div className="adrslug" key={adrs.id}>
                              <span>{adrs.name}</span>
                              <br />
                              <span>{adrs.address}&nbsp;</span>
                              <br />
                              <span>
                                {adrs.zip}&nbsp;{adrs.city}&nbsp;-&nbsp;
                                {adrs.country}
                              </span>
                            </div>
                          ))}
                      </MyAdrSlug>
                      <ChangeMyAdr>
                        <Link href="/user">
                          <a>modifier cette adresse dans votre profile</a>
                        </Link>
                      </ChangeMyAdr>
                    </MyAddressGrid>
                  </div>
                );
              }}
            </User>

            <h1>votre adresse de livraison</h1>

            <User>
              {({ data: { me } }) => {
                if (!me) return null;
                return (
                  <div>
                    <MyAddressGrid>
                      <MyAdrSlug>
                        {me.address.length > 0 && (
                          <select
                            name="addressx"
                            value={values.addressx}
                            onChange={handleChange('addressx')}
                          >
                            <option>
                              choisisez votre adresse de livraison
                            </option>
                            {me.address.map(adr2 => (
                              <option key={adr2.id}>{adr2.title}</option>
                            ))}
                          </select>
                        )}

                        {me.address
                          .filter(adrs2 => adrs2.title === values.addressx)
                          .map(adrs2 => {
                            console.log('wtf', adrs2.title);
                            return (
                              <div className="adrslug" key={adrs2.id}>
                                <span>{adrs2.name}</span>
                                <br />
                                <span>{adrs2.address}&nbsp;</span>
                                <br />
                                <span>
                                  {adrs2.zip}&nbsp;{adrs2.city}&nbsp;-&nbsp;
                                  {adrs2.country}
                                </span>
                              </div>
                            );
                          })}
                      </MyAdrSlug>
                      <ChangeMyAdr>
                        <Link href="/user">
                          <a>modifier cette adresse dans votre profile</a>
                        </Link>
                      </ChangeMyAdr>
                    </MyAddressGrid>
                  </div>
                );
              }}
            </User>
          </CfC>
        </CheckoutContent>

        {/* <ShippingAdd>maybe...</ShippingAdd> */}

        <CheckoutContent>
          <CfC>
            <h1>mode de livraison</h1>

            <CheckYourShipping>
              <div>livraison standard</div>
              <div>livré dans les 72H</div>
              <div>
                {values.livraison === 0 ? (
                  <span>offert</span>
                ) : (
                  <span>{formatMoney(values.livraison)}</span>
                )}
              </div>
            </CheckYourShipping>

            <User>
              {({ data: { me } }) => {
                if (!me) return null;

                const myCartDiscount =
                  calcTotalPrice(me.cart) * (me.discount / 100);
                const myCartTwithDisc =
                  calcTotalPrice(me.cart) - myCartDiscount;

                return (
                  <Stot>
                    <div>sous-total HT</div>
                    <div>{formatMoney(calcTotalPrice(me.cart))}</div>
                    <div>livraison</div>
                    <div>
                      {values.livraison === 0 ? (
                        <span>offert</span>
                      ) : (
                        <span>{formatMoney(values.livraison)}</span>
                      )}
                    </div>
                    {me.discount > 0 && (
                      <>
                        <div>réduction ({me.discount} %)</div>
                        <div>{formatMoney(myCartDiscount)}</div>
                        <div>sous-total HT</div>
                        <div>{formatMoney(myCartTwithDisc)}</div>
                      </>
                    )}
                  </Stot>
                );
              }}
            </User>

            <PrevNextNav>
              <div />
              <div className="abr">
                <NavBtnBlack onClick={this.continue}>
                  confirmer et aller au paiement
                </NavBtnBlack>
              </div>
            </PrevNextNav>
          </CfC>
        </CheckoutContent>
      </>
    );
  }
}

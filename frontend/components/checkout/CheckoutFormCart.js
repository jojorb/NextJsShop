import React, { PureComponent } from 'react';
import styled from 'styled-components';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from '../cart/RemoveFromCart';
import UpdateTheCart from '../cart/UpdateTheCart';
import {
  CfC,
  CheckoutContent,
  CheckoutNavStyle,
  NavBtnBlack,
  NavitemChecked,
  PrevNextNav,
} from '../styled/checkout';
import User from '../UserQuery';

const CheckYourItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr auto;
  grid-gap: 0.3rem;
  margin-bottom: 2rem;
  img {
    margin-left: 3rem;
    height: 112px;
    width: auto;
    object-fit: contain;
    text-align: center;
    justify-self: center;
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

const ProdTitles = styled.div`
  font-size: 1.6rem;
  span {
    font-size: 1.2rem;
    color: darkgrey;
  }
  em {
    display: block;
    font-size: 1.2rem;
    color: black;
  }
  input {
    margin-top: 1.2rem;
  }
`;

export default class CheckoutFormCart extends PureComponent {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, setPrice } = this.props;

    return (
      <>
        <CheckoutNavStyle>
          <NavitemChecked>
            <div className="tal active">commande</div>
          </NavitemChecked>
          <NavitemChecked>
            <div className="tac disable">adresses/livraison</div>
          </NavitemChecked>
          <NavitemChecked>
            <div className="tar disable">paiement</div>
          </NavitemChecked>
        </CheckoutNavStyle>

        <CheckoutContent>
          <CfC>
            <PrevNextNav>
              <div />
              <div>
                <NavBtnBlack onClick={this.continue}>
                  valider mon panier
                </NavBtnBlack>
              </div>
            </PrevNextNav>
            <h1>vos articles</h1>

            <User>
              {({ data: { me } }) => {
                if (!me) return null;

                const myCartDiscount = calcTotalPrice(me.cart) * (15 / 100);
                const myCartTwithDisc =
                  calcTotalPrice(me.cart) - myCartDiscount;
                console.log(me.cart);

                return (
                  <div>
                    {me.cart.map(cartItem => (
                      <CheckYourItems key={cartItem.id} cartItem={cartItem}>
                        <div>
                          <img
                            src={cartItem.item.image}
                            alt={cartItem.item.title}
                          />
                        </div>
                        <ProdTitles>
                          <div>{cartItem.item.title}</div>
                          <span>{cartItem.item.sku}</span>
                          {/* <em>stock disponible: {cartItem.item.stock}</em> */}
                          <div>
                            <UpdateTheCart
                              id={cartItem.id}
                              quantity={cartItem.quantity}
                              stock={cartItem.item.stock}
                            />
                          </div>
                        </ProdTitles>
                        <div>
                          <RemoveFromCart id={cartItem.id} />
                          <div>
                            {formatMoney(
                              cartItem.item.price * cartItem.quantity
                            )}
                          </div>
                        </div>
                      </CheckYourItems>
                    ))}

                    <Stot>
                      <div>sous-total HT</div>
                      <div>{formatMoney(calcTotalPrice(me.cart))}</div>
                      {me.discount > 0 && (
                        <>
                          <div>réduction ({me.discount} %)</div>
                          <div>{formatMoney(myCartDiscount)}</div>
                          <div>sous-total HT</div>
                          <div>{formatMoney(myCartTwithDisc)}</div>
                        </>
                      )}
                    </Stot>
                  </div>
                );
              }}
            </User>
          </CfC>
        </CheckoutContent>

        {/* <ShippingAdd></ShippingAdd> */}

        <CheckoutContent>
          <CfC>
            <PrevNextNav>
              <div />
              <div>
                <NavBtnBlack onClick={this.continue}>
                  valider mon panier
                </NavBtnBlack>
              </div>
            </PrevNextNav>
          </CfC>
        </CheckoutContent>
      </>
    );
  }
}

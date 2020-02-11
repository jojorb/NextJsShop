/*
 *
 * Cart Component is inside the MainBavbar.js
 *
 */

import gql from 'graphql-tag';
import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';
// import PayWithStripe from '../checkout/PayWithStripe';
import Question from '../Question';
import { Add2CartBtn } from '../styled/cart';
import UserQuery from '../UserQuery';
import CartItem from './CartItem';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const CartLayout = styled.div`
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0;
  width: 42%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  ${props => props.open && `transform: translateX(0);`};
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const UpperCart = styled.div`
  padding: 4rem;
  background: ${props => props.theme.backGrey};
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const CloseButton = styled.div`
  color: black;
  font-size: 3.5rem;
  align-self: center;
  justify-self: start;
  &:hover {
    cursor: pointer;
    transition: color 0.2s ease;
  }
`;

const CartTitle = styled.div`
  font-size: 2.3rem;
  align-self: center;
  justify-self: start;
  text-transform: capitalize;
  display: grid;
  grid-auto-rows: 1fr auto;
`;

const CartInfo = styled.div`
  font-size: 1.5rem;
  align-self: center;
  justify-self: start;
  text-transform: lowercase;
`;

const CartBody = styled.div`
  padding: 2rem;
  height: 100%;
  overflow: auto;
`;

const LowerCart = styled.div`
  padding: 4rem;
  background: ${props => props.theme.backGrey};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`;

const CodePromo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const BonusCodeTitle = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${props => props.theme.darkgrey};
`;

const BonusCode = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.darkgrey};
  border-bottom: 1px solid ${props => props.theme.darkgrey};
`;

const CartSum = styled.div`
  font-size: 1.5rem;
  align-self: center;
  justify-self: end;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: auto;
`;

const CheckoutButton = styled.div`
  grid-column: 1 / span 3;
`;

const Cart = () => (
  <UserQuery>
    {({ data: { me } }) => {
      if (!me) return null;
      // console.log(me);
      return (
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data }) => (
                <CartLayout open={data.cartOpen}>
                  <UpperCart>
                    <CloseButton onClick={toggleCart} title="fermer">
                      <i className="fas fa-chevron-right" />
                    </CloseButton>
                    <CartTitle>
                      <div>votre panier</div>
                      <CartInfo>
                        {me.cart.length} Article
                        {me.cart.length === 1 || me.cart.length === 0
                          ? ''
                          : 's'}
                      </CartInfo>
                    </CartTitle>
                  </UpperCart>

                  <CartBody>
                    <ul>
                      {me.cart.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                      ))}
                    </ul>
                  </CartBody>

                  <LowerCart>
                    <CodePromo>
                      {/* <BonusCodeTitle>code promo</BonusCodeTitle> */}
                      {/* <BonusCode>_</BonusCode> */}
                    </CodePromo>
                    <CartSum>
                      <div>
                        <Question />
                        total HT:
                      </div>
                      <div>{formatMoney(calcTotalPrice(me.cart))}</div>
                      {/* <div><Question />total TVA:</div> */}
                      {/* <div>{formatMoney(calcTotalPrice(me.cart))}</div> */}
                      {/* <div><Question />expedition:&nbsp;</div> */}
                      {/* <div>{formatMoney(0)}</div> */}
                    </CartSum>

                    <CheckoutButton>
                      {me.cart.length > 0 && (
                        // <PayWithStripe>
                        <Link href="/checkout">
                          <Add2CartBtn onClick={toggleCart}>
                            <a>Procédéer au paiement</a>
                          </Add2CartBtn>
                        </Link>
                      )
                      // </PayWithStripe>
                      }
                    </CheckoutButton>
                  </LowerCart>
                </CartLayout>
              )}
            </Query>
          )}
        </Mutation>
      );
    }}
  </UserQuery>
);
export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

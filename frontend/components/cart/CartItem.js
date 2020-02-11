import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
    height: 112px;
    width: auto;
    object-fit: contain;
    text-align: center;
    justify-self: center;
  }
  .cart-item-details {
    align-self: top;
    justify-self: left;
    margin-left: 3rem;
    h3 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
      margin-bottom: 0.45rem;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
    }
  }
`;

const CartItem = ({ cartItem }) => {
  // first check if that item exists
  if (!cartItem.item)
    return (
      <CartItemStyles>
        <img alt="" width="100" src="" />
        <div>
          <h3>ce produit à été déstocké!</h3>
        </div>
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  return (
    <CartItemStyles>
      <img width="100" src={cartItem.item.image} alt={cartItem.item.title} />
      <div className="cart-item-details">
        <h3>{cartItem.item.title}</h3>
        <p>
          {formatMoney(cartItem.item.price * cartItem.quantity)}
          {' - '}
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.item.price)} par
            article
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;

import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
// import { BigButton } from '..fatBtn/styled/cart';
import { CURRENT_USER_QUERY } from '../UserQuery';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 3rem;
  &:hover {
    cursor: pointer;
    transition: color 0.2s ease;
    color: lightgrey;
  }
`;

class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // console.log('Running remove from cart update func');
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    // console.log(data);
    // 2. remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <RemoveBtn
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Retirer le produit"
          >
            &times;
          </RemoveBtn>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;

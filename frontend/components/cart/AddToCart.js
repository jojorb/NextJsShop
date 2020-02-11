import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';
import { Add2CartBtn } from '../styled/cart';
import { CURRENT_USER_QUERY } from '../UserQuery';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading }) => (
          <Add2CartBtn>
            <a disabled={loading} onClick={addToCart}>
              commander{loading && ' ...'}
            </a>
          </Add2CartBtn>
        )}
      </Mutation>
    );
  }
}
export default AddToCart;

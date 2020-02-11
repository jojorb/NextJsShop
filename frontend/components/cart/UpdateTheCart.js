import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../UserQuery';

const SelectedList = styled.select`
  width: 160px;
  padding: 0.2rem;
  background: white;
  color: black;
  border: 1px solid lightgrey;
  border-radius: 0;
`;

const UPDATE_FROM_CART_MUTATION = gql`
  mutation updateFromCart($id: ID!, $quantity: Int!) {
    updateFromCart(id: $id, quantity: $quantity) {
      id
    }
  }
`;

class UpdateTheCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  };

  state = {
    id: this.props.id,
    quantity: this.props.quantity,
    stock: this.props.stock,
  };

  render() {
    const miniQuant = 5;
    const maxQuant = 20;

    return (
      <Mutation
        mutation={UPDATE_FROM_CART_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        optimisticResponse={{
          __typename: 'Mutation',
          updateFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
            quantity: this.props.quantity,
          },
        }}
      >
        {(updateFromCart, { loading, error }) => (
          <SelectedList
            value={this.state.quantity}
            onChange={async event => {
              await this.setState({ quantity: parseInt(event.target.value) });
              await console.log('get TRIGGER', this.state, this.props.stock);
              await updateFromCart().catch(err => alert(err.message));
            }}
            disabled={loading}
          >
            <option value={5}>Choisisez vos quantités</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={0}>nous contacter</option>
            {/* {Array.from(new Array(maxQuant - (miniQuant - 1)), (v, i) => (
              <option key={i} value={miniQuant + i}>
                {miniQuant + i}
              </option>
            ))} */}
          </SelectedList>
        )}
      </Mutation>
    );
  }
}

export default UpdateTheCart;

import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Router from 'next/router';
import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'shortid';
import UserQuery, { CURRENT_USER_QUERY } from '../UserQuery';
import { NavBtnBlack } from '../styled/checkout';

const Uid = shortid.generate();

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder(
    $transactionToken: String!
    $invoiceAdr: String!
    $shippingAdr: String!
  ) {
    createOrder(
      transactionToken: $transactionToken
      invoiceAdr: $invoiceAdr
      shippingAdr: $shippingAdr
    ) {
      id
      transactionToken
      total
      invoiceAdr
      shippingAdr
      items {
        id
        title
      }
    }
  }
`;

export default class PayWithWire extends PureComponent {
  onToken = async (res, createOrder) => {
    const { shipping } = this.props;
    console.log('wesh', shipping);
    console.log('onToken called !!');
    // manually call the mutation
    const order = await createOrder({
      variables: {
        transactionToken: `COMP-WIRE-${Uid}-WEB-${Uid}`,
        invoiceAdr: shipping.address,
        shippingAdr: shipping.addressx,
      },
    }).catch(err => {
      alert(err.message);
    });
    // console.log(order);
    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id },
    });
  };

  render() {
    return (
      <UserQuery>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <NavBtnBlack
                type="submit"
                onClick={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </NavBtnBlack>
            )}
          </Mutation>
        )}
      </UserQuery>
    );
  }
}

PayWithWire.propTypes = {
  children: PropTypes.string,
  shipping: PropTypes.object,
};

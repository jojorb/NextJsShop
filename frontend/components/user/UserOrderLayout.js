import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { orderFollow } from '../../config';
import formatMoney from '../../lib/formatMoney';
import Error from '../ErrorMessage';
import { BtnJad, H4, H5 } from '../styled/global';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      transactionToken
      total
      totalHT
      totalTax
      createdAt
      user {
        id
        firstname
        lastname
        email
        phone
      }
      items {
        id
        title
        sku
        description
        price
        image
        quantity
      }
    }
  }
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const EditUser = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
`;

const BackToOrders = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: left;
  justify-self: center;
  align-self: start;
`;

const MyOrder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
`;

const OrderDetails = styled.div`
  border: 1px solid lightgrey;
  border-top: 3px solid black;
  padding: 1.5rem;
  text-align: left;
  justify-self: center;
  align-self: start;
`;

const Orderinfo = styled.div`
  border: 1px solid lightgrey;
  padding: 1rem;
  font-size: 1.2rem;
`;

const OrderArticles = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  /* align-self: center;
  justify-self: center; */
  padding: 2rem;
  img {
    padding-right: 4rem;
    padding-top: 2rem;
    max-height: 124px;
    width: auto;
    object-fit: contain;
    text-align: center;
  }
`;

const UserOrderLayout = props => (
  <UserGrid>
    <BackToOrders>
      <BtnJad>
        <Link href="/orders">
          <a>retour a vos commandes</a>
        </Link>
      </BtnJad>
    </BackToOrders>
    <EditUser id="userorders">
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const { order } = data;
          console.log(order);
          return (
            <MyOrder>
              <div>
                <H4>
                  commande du{' '}
                  {format(order.createdAt, 'dddd DD MMMM YYYY HH:mm', {
                    locale: frenchLocale,
                  })}
                </H4>
              </div>

              <OrderDetails>
                <div>
                  <H5>
                    référence: <strong>{order.id}</strong>
                  </H5>
                  <H5>
                    transaction: <strong>{order.transactionToken}</strong>
                  </H5>
                  <H5>
                    Total HT: <strong>{formatMoney(order.totalHT)}</strong>
                  </H5>
                  <H5>
                    Total TAX: <strong>{formatMoney(order.totalTax)}</strong>
                  </H5>
                  <H5>
                    Total TTC: <strong>{formatMoney(order.total)}</strong>
                  </H5>
                </div>

                <Orderinfo>
                  <p>
                    contact client: {order.user.firstname} {order.user.lastname}{' '}
                    {order.user.email} {order.user.phone}
                  </p>
                  <p>contact service: {orderFollow}</p>
                </Orderinfo>

                <div>
                  {order.items.map(item => (
                    <OrderArticles key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div className="item-details">
                        <h2>{item.title}</h2>
                        <p>SKU: {item.sku}</p>
                        <p>Quantité: {item.quantity}</p>
                        <p>Prix unitaire: {formatMoney(item.price)}</p>
                        <p>
                          Sous Total: {formatMoney(item.price * item.quantity)}
                        </p>
                        <p>{item.description}</p>
                      </div>
                    </OrderArticles>
                  ))}
                </div>
              </OrderDetails>
            </MyOrder>
          );
        }}
      </Query>
      <BackToOrders>
        <BtnJad>
          <Link href="/orders">
            <a>retour a vos commandes</a>
          </Link>
        </BtnJad>
      </BackToOrders>
    </EditUser>
  </UserGrid>
);
export default UserOrderLayout;

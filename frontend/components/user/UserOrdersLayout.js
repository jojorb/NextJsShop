import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import Error from '../ErrorMessage';
import { H4 } from '../styled/global';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
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
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
`;

const OrdersList = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

const MyOrders = styled.div`
  padding: 0.5rem;
  a {
    text-decoration: none;
  }

  border: 1px solid ${props => props.theme.white};
  background: #fff;
  background: ${props => props.theme.backGrey};
  box-shadow: 0px 3px 10px 1px rgba(201, 190, 190, 0.7);
  transition: all 0.1s ease-in-out, all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 10px 1px rgba(201, 190, 190, 0.1);
    cursor: pointer;
  }
`;

const OrdersHeader = styled.div`
  text-align: left;
  justify-self: center;
  align-self: start;
  font-size: 1.2rem;
`;

const OrdersImages = styled.div`
  background: #fff;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  margin-top: 1rem;
  img {
    /* height: 200px;
    object-fit: cover;
    width: 100%; */
    /* height: 420px; */
    max-height: 124px;
    width: auto;
    object-fit: contain;
    text-align: center;
    justify-self: center;
  }
`;

const UserOrdersLayout = () => (
  <UserGrid>
    <EditUser id="userorders">
      <div>
        <Query query={USER_ORDERS_QUERY}>
          {({ data: { orders }, loading, error }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <Error erorr={error} />;
            console.log(orders);
            return (
              <div>
                <H4>
                  Vous avez {orders.length} commande
                  {orders.length === 1 || orders.length === 0 ? '' : 's'}
                </H4>
                <OrdersList>
                  {orders.map(order => (
                    <MyOrders key={order.id}>
                      <Link
                        href={{
                          pathname: '/order',
                          query: { id: order.id },
                        }}
                      >
                        <a>
                          <OrdersHeader>
                            <p>
                              Date:{' '}
                              {format(order.createdAt, 'ddd DD/MM/YY à HH:mm', {
                                locale: frenchLocale,
                              })}
                            </p>
                            <p>Nb de produits: {order.items.length}</p>
                            <p>Total HT: {formatMoney(order.total)}</p>
                          </OrdersHeader>
                          <OrdersImages>
                            {order.items.map(item => (
                              <img
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                              />
                            ))}
                          </OrdersImages>
                        </a>
                      </Link>
                    </MyOrders>
                  ))}
                </OrdersList>
              </div>
            );
          }}
        </Query>
      </div>
    </EditUser>
  </UserGrid>
);
export default UserOrdersLayout;

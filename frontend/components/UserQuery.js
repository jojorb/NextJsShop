import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      phone
      firstname
      lastname
      company {
        name
        siret
        tva
      }
      permissions
      discount
      address {
        id
        title
        name
        address
        zip
        city
        country
      }
      # orders {
      #   id
      # }
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
          sku
          stock
        }
      }
    }
  }
`;

const UserQuery = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

UserQuery.propTypes = {
  children: PropTypes.func.isRequired,
};

export default UserQuery;
export { CURRENT_USER_QUERY };

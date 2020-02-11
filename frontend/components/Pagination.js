import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { perPage } from '../config';
import Error from './ErrorMessage';

const PaginationStyles = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 0px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    &:hover {
      color: ${props => props.theme.darkgrey};
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const { count } = data.itemsConnection.aggregate;
      const pages = Math.ceil(count / perPage);
      return (
        <PaginationStyles>
          <Link
            prefetch
            href={{
              pathname: props.path,
              query: { page: props.page - 1 },
            }}
          >
            <a aria-disabled={props.page <= 1}>← Prev</a>
          </Link>
          <p>
            Page {props.page} sur {pages}
          </p>
          <Link
            prefetch
            href={{
              pathname: props.path,
              query: { page: props.page + 1 },
            }}
          >
            <a aria-disabled={props.page >= pages}>Next →</a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

// Pagination.propTypes = {
//   page: PropTypes.number,
//   path: PropTypes.string,
// };

export default Pagination;
export { PAGINATION_QUERY };

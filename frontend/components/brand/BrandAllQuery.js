import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import BrandAllRender from './BrandAllRender';

const ALL_BRAND_QUERY = gql`
  query ALL_BRAND_QUERY {
    brands(orderBy: createdAt_DESC) {
      id
      name
      image
      www
      insta
      facebook
    }
  }
`;

const BrandGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const BrandSubGrid = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
  hr {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
  }
`;

const BrandInner = styled.div`
  display: grid;
`;

export default class ProductAllQuery extends PureComponent {
  render() {
    return (
      <BrandGrid>
        <BrandSubGrid>
          <Query query={ALL_BRAND_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <BrandInner>
                  {data.brands.map(brand => (
                    <BrandAllRender key={brand.id} brand={brand} />
                  ))}
                </BrandInner>
              );
            }}
          </Query>
        </BrandSubGrid>
      </BrandGrid>
    );
  }
}

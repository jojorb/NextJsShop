import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Grid4 } from '../styled/global';
import ProductSameRender from './ProductSameRender';

const SAME_SKU_QUERY = gql`
  query SAME_SKU_QUERY($label: String!, $title: String) {
    items(
      first: 4
      orderBy: createdAt_DESC
      where: { label: $label, title_not: $title }
    ) {
      id
      title
      label
      image
      sku
    }
  }
`;

const PSQLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 1.5rem; */
  /* margin-top: 2rem; */
  background: ${props => props.theme.white};
  padding: 1.2rem;
`;

const Plus = styled.div`
  padding-right: 1.6rem;
  /* border-bottom: 1px solid ${props => props.theme.orange}; */
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

export default class ProductSameQuery extends PureComponent {
  render() {
    return (
      <PSQLayout>
        <Plus>voir plus de produit de la gamme {this.props.label}</Plus>
        <Query
          query={SAME_SKU_QUERY}
          variables={{ label: this.props.label, title: this.props.title }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Grid4>
                {data.items.map(item => (
                  <ProductSameRender key={item.id} item={item} />
                ))}
              </Grid4>
            );
          }}
        </Query>
      </PSQLayout>
    );
  }
}

import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { perPage } from '../../config';
import { Grid4 } from '../styled/global';
import ProductAllRender from './ProductAllRender';
import Loading from '../Loading';
import MiA from '../missing/MiA';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items(first: ${perPage}, orderBy: createdAt_DESC) {
      id
      title
      image
      sku
    }
  }
`;

const PAQLayout = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export default class ProductAllQuery extends PureComponent {
  render() {
    return (
      <PAQLayout>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            console.log(data);
            if (loading) return <Loading />;
            if (error) return <MiA message={error.message} />;
            if (data.items.length === 0)
              return <MiA message="aucun produit disponible actuellement" />;
            return (
              <Grid4>
                {data.items.map(item => (
                  <ProductAllRender key={item.id} item={item} />
                ))}
              </Grid4>
            );
          }}
        </Query>
      </PAQLayout>
    );
  }
}

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import HeadMeta from '../head/HeadMeta';
import MiA from '../missing/MiA';
import PageTitle from '../PageTitle';
import ProductSingleRender from './ProductSingleRender';

const QUERY_SINGLE_PRODUCTS = gql`
  query QUERY_SINGLE_PRODUCTS($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      label
      description
      image
      imageBack
      price
      vol
      nico
      flavor
      fresh
      fruit
      gourmand
      classic
      autonomie
      tirage
      rendu
      solidite
      vgpg
      color
      feature
      features
      photosj
      videosj
      brand {
        name
        www
        image
        origine
        description
      }
      # stock
      # sku
      category {
        name
      }
    }
  }
`;

const PSQLayout = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const ProductSingleQuery = ({ id }) => (
  <PSQLayout>
    <Query query={QUERY_SINGLE_PRODUCTS} variables={{ id }}>
      {({ error, loading, data }) => {
        if (error) return <p>error: {error.message}</p>;
        if (loading) return <p>loading...</p>;
        if (!data.item)
          return (
            <MiA message="Ce produit à eut un terrible destin! Veuillez nous excuser!" />
          );
        const { item } = data;
        return (
          <>
            <HeadMeta
              title={`${item.brand.name} - ${item.title} | Juice Avenue Distribution`}
              description={item.description}
              url={`http://www.juice-avenue.com/viewproduct?id=${id}`}
              ogImage={item.image}
            />
            <PageTitle title={`${item.brand.name} - ${item.title}`} />
            <ProductSingleRender item={item} />
          </>
        );
      }}
    </Query>
  </PSQLayout>
);

export default ProductSingleQuery;

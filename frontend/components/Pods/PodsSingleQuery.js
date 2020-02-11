import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import HeadMeta from '../head/HeadMeta';
import MiA from '../missing/MiA';
import PageTitle from '../PageTitle';
import PodsSingleRender from './PodsSingleRender';

const QUERY_SINGLE_POD_PRODUCTS = gql`
  query QUERY_SINGLE_POD_PRODUCTS($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      label
      description
      image
      price
      color
      feature
      cartouche
      materiel
      dimensions
      poid
      batterie
      recharge
      packaging
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

const PodsSingleQuery = ({ id }) => (
  <PSQLayout>
    <Query query={QUERY_SINGLE_POD_PRODUCTS} variables={{ id }}>
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
              title={`${item.brand.name} - ${
                item.title
              } | Juice Avenue Distribution`}
              description={item.description}
              url={`http://www.juice-avenue.com/viewpods?id=${id}`}
              ogImage={item.image}
            />
            <PageTitle title={`${item.brand.name} - ${item.title}`} />
            <PodsSingleRender item={item} />
          </>
        );
      }}
    </Query>
  </PSQLayout>
);

export default PodsSingleQuery;

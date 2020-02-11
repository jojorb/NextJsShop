import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { perPage } from '../../config';
import { Grid3 } from '../styled/global';
import MiA from '../missing/MiA';
import Pagination from '../Pagination';
import ProductAllRender from '../productAll/ProductAllRender';

const PODS_PRODUCTS = gql`
  query PODS_PRODUCTS ($skip: Int = 0, $first: Int = ${perPage}, $sku: String = "POD") {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC  where: {
      AND: [
        { sku_contains: $sku }
        { category: { slug: "pod" } }
      ]
    }) {
      id
      title
      image
      category{
        slug
      }
    }
  }
`;

const PAQLayout = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const PodsQuery = ({ page }) => (
  <PAQLayout>
    <Query
      query={PODS_PRODUCTS}
      variables={{
        skip: page * perPage - perPage,
      }}
    >
      {({ error, loading, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error)
          return (
            <MiA message="Cette catégorie à eut un terrible destin! Veuillez nous excuser!" />
          );
        return (
          <Grid3>
            {data.items.map(item => (
              <ProductAllRender key={item.id} item={item} />
            ))}
          </Grid3>
        );
      }}
    </Query>
    <center>
      <Pagination page={page} path="pods" />
    </center>
  </PAQLayout>
);

PodsQuery.propTypes = {
  page: PropTypes.number,
};

export default PodsQuery;

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { perPage } from '../../config';
import HeadMeta from '../head/HeadMeta';
import MiA from '../missing/MiA';
import PageTitle from '../PageTitle';
// import Pagination from '../Pagination';
import { Grid3 } from '../styled/global';
import ProductAllRender from '../productAll/ProductAllRender';

const SINGLE_BRAND = gql`
  query SINGLE_BRAND($id: ID!) {
    brands(where: { id: $id }) {
      id
      name
      image
      description
    }
  }
`;

const ALL_PRODUCTS_BRAND = gql`
  query ALL_PRODUCTS_BRAND($id: ID!, $skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC where: {brand: {id: $id}}) {
      id
      title
      image
    }
  }
`;

const PAQLayout = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const PageImg = styled.div`
  display: block;
  padding: 0 auto;
  text-align: center;
  img {
    height: 200px;
    object-fit: contain;
    max-width: 512px;
  }
`;

const ProductsBrand = ({ id }) => (
  <PAQLayout>
    <Query
      query={SINGLE_BRAND}
      variables={{
        id,
      }}
    >
      {({ error, loading, data }) => {
        if (loading) return <p>Loading...</p>;
        console.log(data);
        if (!data.brands)
          return (
            <MiA message="Cette marque à eut un terrible destin! Veuillez nous excuser!" />
          );
        return (
          <>
            <HeadMeta
              title={
                `${data.brands[0].name}- brand - ` +
                ` | Juice Avenue Distribution`
              }
              description={data.brands[0].description}
              url={`http://www.juice-avenue.com/brandproducts?id=${data.brands[0].name}`}
              ogImage={data.brands[0].image}
            />
            <PageImg>
              <img alt={data.brands[0].name} src={data.brands[0].image} />
            </PageImg>
            <PageTitle title={`${data.brands[0].name}`}>
              {data.brands[0].description}
            </PageTitle>
          </>
        );
      }}
    </Query>

    <Query
      query={ALL_PRODUCTS_BRAND}
      variables={{
        id,
      }}
    >
      {({ error, loading, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>error: {error.message}</p>;
        // if (data.items.length === 0) return <MiA message={"La catéorie \"" + id + "\" à eut un terrible destin! Veuillez nous excuser!"} />;
        return (
          <Grid3>
            {data.items.map(item => (
              <ProductAllRender key={item.id} item={item} />
            ))}
          </Grid3>
        );
      }}
    </Query>
    {/* <center><Pagination page={page} /></center> */}
  </PAQLayout>
);
export default ProductsBrand;

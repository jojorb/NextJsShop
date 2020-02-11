import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { perPage } from '../../config';
import HeadMeta from '../head/HeadMeta';
import MiA from '../missing/MiA';
import PageTitle from '../PageTitle';
import Pagination from '../Pagination';
import ProductAllRender from '../productAll/ProductAllRender';
import { Grid3 } from '../styled/global';

const SINGLE_CAT = gql`
  query SINGLE_CAT($category: String!) {
    category(where: { slug: $category }) {
      id
      name
      slug
      description
      image
    }
  }
`;

const ALL_PRODUCTS_CAT = gql`
  query ALL_PRODUCTS($cat: String!, $skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC where: {category: {slug: $cat}}) {
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

const ProductCategory = ({ id, page }) => {
  let categoryId;
  categoryId = null;

  // if (id = 'null') {
  //   categoryId = 'non trouvé!'
  // }

  if (id === 'ejuice') {
    categoryId = 'e-liquide';
  }
  if (id === 'nicsalt') {
    categoryId = 'sel de nicotine';
  }

  return (
    <PAQLayout>
      <Query
        query={SINGLE_CAT}
        variables={{
          category: id,
        }}
      >
        {({ error, loading, data }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.category)
            return (
              <MiA message="Cette catégorie à eut un terrible destin! Veuillez nous excuser!" />
            );
          return (
            <>
              <HeadMeta
                title={
                  `${data.category.slug}- categorie - ` +
                  ` | Juice Avenue Distribution`
                }
                description={data.category.description}
                url={`http://www.juice-avenue.com/categorie?id=${data.category.slug}`}
                ogImage={data.category.image}
              />
              <PageTitle title={`catégorie ${categoryId}`}>
                {data.category.description}
              </PageTitle>
            </>
          );
        }}
      </Query>

      <Query
        query={ALL_PRODUCTS_CAT}
        variables={{
          cat: id,
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
      <center>
        <Pagination page={page} />
      </center>
    </PAQLayout>
  );
};

export default ProductCategory;

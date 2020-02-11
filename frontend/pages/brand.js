import PageTitle from '../components/PageTitle';
import { ContainerGrid } from '../components/styled/global';
// import BrandLayout from '../components/brand/BrandLayout';
import BrandAllQuery from '../components/brand/BrandAllQuery';

const Brand = props => (
  <ContainerGrid>
    <PageTitle title="All Brands" />

    <BrandAllQuery />
  </ContainerGrid>
);

export default Brand;

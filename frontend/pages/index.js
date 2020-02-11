import SubFooter from '../components/footer/SubFooter';
import Selection from '../components/header/Selection';
import PageTitle from '../components/PageTitle';
import ProductAllQuery from '../components/productAll/ProductAllQuery';
import { ContainerGrid } from '../components/styled/global';
import { perPage, msgProducts } from '../config';
// import CookieNotice from '../components/footer/CookieNotice';

const Home = props => (
  <ContainerGrid>
    <Selection />
    <PageTitle title={`voir les ${perPage} derniers produits`}>
      {msgProducts}
    </PageTitle>

    {/* <ProductAllQuery page={parseFloat(props.query.page) || 1} /> */}
    <ProductAllQuery />
    <SubFooter />
    {/* <CookieNotice /> */}
  </ContainerGrid>
);

export default Home;

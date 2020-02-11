import InnerFyi from '../components/fyi/InnerFyi';
import PageTitle from '../components/PageTitle';
import { ContainerGrid } from '../components/styled/global';

const Fyi = () => (
  <ContainerGrid>
    <PageTitle title="service/information"></PageTitle>
    <InnerFyi />
  </ContainerGrid>
);

export default Fyi;

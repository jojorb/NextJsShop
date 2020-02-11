import PageTitle from '../components/PageTitle';
import { ContainerGrid } from '../components/styled/global';
import InnerUserAuth from '../components/userauth/InnerUserAuth';

const Login = () => (
  <ContainerGrid>
    <PageTitle title="connection / s'enregistrer" />

    <InnerUserAuth />
  </ContainerGrid>
);

export default Login;

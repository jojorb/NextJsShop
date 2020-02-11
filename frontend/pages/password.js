import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { ContainerGrid, H5 } from '../components/styled/global';
import RequestPassord from '../components/user/RequestPassword';
import HelpInfo from '../components/HelpInfo';

const InnerForm = styled.div`
  /* border: 1px solid ${props => props.theme.borderLight}; */
  padding: 4rem 8rem;
  height: 100%;
  position: relative;
  text-align: center;
  justify-self: center;
  max-width: 1000px;
  width: 100%;
  /* align-self: start; */
  margin-bottom: 5rem;
  p {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
    p {
      font-size: 1.7rem;
    }
  }
`;

const Password = () => (
  <>
    <PageTitle title="Demande de changement de mot de passe">
      <HelpInfo />
    </PageTitle>

    <ContainerGrid>
      <InnerForm>
        <H5>Je souhaite obtenir un lien pour changer mon mot de passe</H5>
        <RequestPassord />
      </InnerForm>
    </ContainerGrid>
  </>
);

export default Password;

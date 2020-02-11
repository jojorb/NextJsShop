import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import PleaseSignIn from '../components/PleaseSignIn';
import { ContainerGrid } from '../components/styled/global';
import UserCheckBusiness from '../components/user/UserCheckBusiness';
// import UserQueryBusiness from '../components/user/UserQueryBusiness';
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

const userchecking = () => (
  <>
    <PageTitle title="vérification de voter société">
      <HelpInfo />
    </PageTitle>

    <ContainerGrid>
      <InnerForm>
        <PleaseSignIn>
          <UserCheckBusiness />
          {/* <UserQueryBusiness /> */}
        </PleaseSignIn>
      </InnerForm>
    </ContainerGrid>
  </>
);

export default userchecking;

import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import { ContainerGrid, H5 } from '../components/styled/global';
import ResetPassword from '../components/user/ResetPassword';
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

const PasswordSec = props => (
  <>
    <PageTitle title="Changer de mot de passe">
      <HelpInfo />
    </PageTitle>

    <ContainerGrid>
      <InnerForm>
        <H5>Enter votre nouveau mot de passe</H5>
        <ResetPassword resetToken={props.query.resetToken} />
      </InnerForm>
    </ContainerGrid>
  </>
);

// PasswordSec.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default PasswordSec;

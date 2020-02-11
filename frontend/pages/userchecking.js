import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import { ContainerGrid } from '../components/styled/global';
import CheckingEmail from '../components/user/CheckingEmail';
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

const userchecking = props => (
  <>
    <PageTitle title="vérification de voter email">
      <HelpInfo />
    </PageTitle>

    <ContainerGrid>
      <InnerForm>
        <CheckingEmail checkEmail={props.query.checkEmail} />
      </InnerForm>
    </ContainerGrid>
  </>
);

// userchecking.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default userchecking;

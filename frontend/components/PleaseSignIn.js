import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H5 } from './styled/global';
import Loginform from './userauth/Loginform';
import { CURRENT_USER_QUERY } from './UserQuery';

const OnePanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 4rem 2rem;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 1rem 2rem;
  }
`;

const Inner2p = styled.div`
  border: 1px solid ${props => props.theme.borderLight};
  padding: 4rem 8rem;
  height: 100%;
  position: relative;
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

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <OnePanel>
            <Inner2p>
              <H5>Veuillez vous connecter pour continuer</H5>
              <Loginform />
            </Inner2p>
          </OnePanel>
        );
      }
      return props.children;
    }}
  </Query>
);

// PleaseSignIn.propTypes = {
//   children: PropTypes.func.isRequired,
// };

export default PleaseSignIn;

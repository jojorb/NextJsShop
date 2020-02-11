import gql from 'graphql-tag';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../UserQuery';

const CHECK_EMAIL = gql`
  mutation CHECK_EMAIL($id: ID!) {
    userCheckEmail(id: $id) {
      message
    }
  }
`;

const CheckMyMail = styled.div`
  font-size: 1.4rem;
  a {
    text-transform: uppercase;
  }
`;

const CheckingEmail = props => (
  <Mutation
    mutation={CHECK_EMAIL}
    variables={{
      id: props.checkEmail,
    }}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(userCheckEmail, { error, loading, called }) => (
      <CheckMyMail>
        <Error error={error} />
        {!loading && !error && called ? (
          <p>merci de vous etre vérifier</p>
        ) : (
          <Link href={`/userchecking?checkEmail=${props.checkEmail}`}>
            <a
              title="checking email"
              onClick={async e => {
                await userCheckEmail();
              }}
            >
              clicker sur ce lien pour vérifier votre email
            </a>
          </Link>
        )}
      </CheckMyMail>
    )}
  </Mutation>
);
export default CheckingEmail;

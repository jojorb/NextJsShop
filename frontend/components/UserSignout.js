import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gql from 'graphql-tag';
import Router from 'next/router';
import React from 'react';
import { Mutation } from 'react-apollo';
import { RightNavIcons } from './navbar/MainNavbar';
import { CURRENT_USER_QUERY } from './UserQuery';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const UserSignout = () => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <RightNavIcons>
        <a
          title="déconnexion"
          onClick={async e => {
            await signout();
            Router.push('/');
          }}
        >
          <FontAwesomeIcon icon={['fax', 'sign-out-alt']} />
        </a>
      </RightNavIcons>
    )}
  </Mutation>
);
export default UserSignout;

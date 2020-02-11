import gql from 'graphql-tag';
import Link from 'next/link';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from '../ErrorMessage';
import { JadForm } from '../styled/form';
import { CURRENT_USER_QUERY } from '../UserQuery';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`;

export default class Loginform extends Component {
  state = {
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <JadForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signin();
              // redirect only if your on the connexion page
              // Router.push('/')
              this.setState({ email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />

              <label htmlFor="email">
                email
                <input
                  name="email"
                  component="input"
                  type="email"
                  placeholder="my@email.com"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="password">
                password
                <input
                  name="password"
                  component="input"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <Link prefetch href="/password">
                <a className="login-lost-pwd">Mot de passe oublié?</a>
              </Link>

              <input
                className="botright"
                color="white"
                bkg="black"
                type="submit"
                value="envoyer"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </fieldset>
          </JadForm>
        )}
      </Mutation>
    );
  }
}

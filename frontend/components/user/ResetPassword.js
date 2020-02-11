import gql from 'graphql-tag';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from '../ErrorMessage';
import { JadForm } from '../styled/form';
import { CURRENT_USER_QUERY } from '../UserQuery';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
    }
  }
`;

export default class ResetPassword extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };

  state = {
    password: '',
    confirmPassword: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reset, { error, loading, called }) => (
          <JadForm
            autoComplete="on"
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              // Router.push('/user');
              this.setState({ password: '', confirmPassword: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              {!error && called && (
                <p>
                  Votre mot de passe à bien été enregistré!
                  <br />
                  Vous être connecté!
                  <Link prefetch href="/user">
                    <a title="votre profil">Voir votre page de profile</a>
                  </Link>
                </p>
              )}
              <label htmlFor="password">
                Mot de passe
                <input
                  name="password"
                  component="input"
                  type="password"
                  placeholder="password"
                  autoComplete="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="confirmPassword">
                Confirmation du Mot de passe
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </label>

              <div className="notabene">
                La page de requête du changement de mot passe est valide que
                pendant une heure après réception de votre email. Veuillez
                refaire une demande par email si le délais imparti est écoulé.
              </div>

              <input
                color="white"
                bkg="black"
                type="submit"
                value="envoyer"
                autoCorrect="off"
                autoCapitalize="off"
                disabled=""
              />
            </fieldset>
          </JadForm>
        )}
      </Mutation>
    );
  }
}

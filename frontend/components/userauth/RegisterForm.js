import gql from 'graphql-tag';
import Router from 'next/router';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from '../ErrorMessage';
import { JadForm } from '../styled/form';
import { CURRENT_USER_QUERY } from '../UserQuery';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $firstname: String!
    $lastname: String!
    $phone: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      phone: $phone
      email: $email
      password: $password
    ) {
      id
      firstname
      email
    }
  }
`;

export default class RegisterForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading, called }) => (
          <JadForm
            autoComplete="on"
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              Router.push('/user');
              this.setState({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                password: '',
                // company: '',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />

              <label htmlFor="firstname">
                prénom
                <input
                  name="firstname"
                  component="input"
                  type="text"
                  placeholder="prénom"
                  value={this.state.firstname}
                  onChange={this.saveToState}
                  // required
                />
              </label>

              <label htmlFor="lastname">
                nom
                <input
                  name="lastname"
                  component="input"
                  type="text"
                  placeholder="nom"
                  value={this.state.lastname}
                  onChange={this.saveToState}
                  // required
                />
              </label>

              <label htmlFor="phone">
                téléphone
                <input
                  name="phone"
                  component="input"
                  type="tel"
                  placeholder="0642424242"
                  pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                  maxLength="10"
                  value={this.state.phone}
                  onChange={this.saveToState}
                  // required
                />
              </label>

              <label htmlFor="email">
                email
                <input
                  name="email"
                  component="input"
                  type="email"
                  placeholder="mon@email.com"
                  autoComplete="username"
                  value={this.state.email}
                  onChange={this.saveToState}
                  // required
                />
              </label>

              <label htmlFor="password">
                mot de passe
                <input
                  name="password"
                  component="input"
                  type="password"
                  placeholder="mot de passe"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.saveToState}
                  // required
                />
              </label>

              <div className="notabene">
                Vous avez le droit de retirer à tout moment votre consentement à
                la réception/la transmission dinformations commerciales en
                utilisant le formulaire de contact dans la rubrique
                Contactez-nous. Le retrait du consentement ne compromet pas la
                licéité du traitement fondé sur le consentement effectué avant
                ce retrait.
              </div>

              <input
                className="botright"
                type="submit"
                value="envoyer"
                autoCorrect="off"
                autoCapitalize="off"
                // disabled
              />
            </fieldset>
          </JadForm>
        )}
      </Mutation>
    );
  }
}

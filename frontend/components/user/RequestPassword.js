import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from '../ErrorMessage';
import { JadForm } from '../styled/form';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export default class RequestPassword extends Component {
  state = {
    email: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <JadForm
            autoComplete="on"
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              // Router.push('/user');
              this.setState({ email: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              {!error && !loading && called && (
                <p>
                  Merci! Un email vous a été envoyé contenant le lien pour votre
                  changement de mot de passe.
                </p>
              )}

              <label htmlFor="email">
                email
                <input
                  name="email"
                  component="input"
                  type="email"
                  placeholder="my@email.com"
                  autoComplete="username"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <div className="notabene">
                Un email de vérification vous sera envoyé afin de vérifier que
                c'est bien le propriétaire du compte qui fait cette demande. Le
                lien dans le mail vous renvera vers une page sécurisé pour
                changer votre mot de passe dans l'heures suivant cette demande.
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
export { REQUEST_RESET_MUTATION };

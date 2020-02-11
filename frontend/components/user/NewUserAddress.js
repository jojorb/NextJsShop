import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Error from '../ErrorMessage';
import { HR, JadForm } from '../styled/form';
import { CURRENT_USER_QUERY } from '../UserQuery';

const CREATE_USERADD_MUTATION = gql`
  mutation CREATE_USERADD_MUTATION(
    $title: String!
    $invoice: Boolean!
    $shipping: Boolean!
    $name: String
    $address: String
    $zip: String
    $city: String
    $country: String
  ) {
    createUserAddress(
      title: $title
      invoice: $invoice
      shipping: $shipping
      name: $name
      address: $address
      zip: $zip
      city: $city
      country: $country
    ) {
      id
    }
  }
`;

export default class UserAddress extends Component {
  state = {
    title: '',
    name: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    invoice: true,
    shipping: true,
  };

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_USERADD_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createUserAddress, { error, loading, called }) => (
          <JadForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await createUserAddress();
              this.setState({
                title: '',
                name: '',
                address: '',
                zip: '',
                city: '',
                country: '',
                invoice: true,
                shipping: true,
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />

              <label htmlFor="invoice">
                <input
                  id="invoice"
                  component="input"
                  name="invoice"
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.invoice}
                />
                adresse de facturation
              </label>

              <label htmlFor="shipping">
                <input
                  id="shipping"
                  component="input"
                  name="shipping"
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.shipping}
                />
                adresse de livraison
              </label>

              <HR />

              <label htmlFor="title">
                donner un nom à cette adresse
                <input
                  name="title"
                  component="input"
                  type="text"
                  placeholder="adresse principale"
                  autoComplete="username"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="name">
                nom et prénom
                <input
                  name="name"
                  component="input"
                  type="text"
                  placeholder="nom et prénom"
                  autoComplete="username"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="address">
                Adresse
                <input
                  name="address"
                  component="input"
                  type="text"
                  placeholder="Num voie et rue"
                  autoComplete="username"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="zip">
                code postale
                <input
                  name="zip"
                  component="input"
                  type="text"
                  placeholder="code postale"
                  autoComplete="username"
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="city">
                Ville
                <input
                  name="city"
                  component="input"
                  type="text"
                  placeholder="ville"
                  autoComplete="username"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="country">
                Pays
                <input
                  name="country"
                  component="input"
                  type="text"
                  placeholder="Pays"
                  autoComplete="username"
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </label>

              <input
                color="white"
                bkg="black"
                type="submit"
                value="metre à jour"
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

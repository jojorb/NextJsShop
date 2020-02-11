import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import styled from 'styled-components';
import { JadForm } from '../styled/form';
import { H4, BwBtnJad } from '../styled/global';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../UserQuery';

const QUERY_MY_BUSINESS = gql`
  query QUERY_MY_BUSINESS($siret: String!) {
    mybiz(siret: $siret) {
      siren
      siret
      tva
      nafape
      name
    }
  }
`;

const CREATE_USERCPM_MUTATION = gql`
  mutation CREATE_USERCPM_MUTATION(
    $name: String!
    $siren: String!
    $siret: String!
    $nafape: String!
    $tva: String!
  ) {
    createUserCompany(
      name: $name
      siren: $siren
      siret: $siret
      nafape: $nafape
      tva: $tva
    ) {
      id
    }
  }
`;

const ShowMyBiz = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
  justify-self: center;
  align-self: center;
  padding-bottom: 1.6rem;
  .obj {
    text-align: right;
    padding-right: 1rem;
  }
  .val {
    text-align: left;
  }
`;

export default class UserCheckBusiness extends PureComponent {
  state = {
    siret: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value.replace(/\s+/g, '') });
  };

  render() {
    return (
      <>
        <JadForm
          autoComplete="off"
          method="post"
          onSubmit={async e => {
            e.preventDefault();
          }}
        >
          <label htmlFor="siret">
            enter votre numéro de siret
            <input
              name="siret"
              component="input"
              type="text"
              placeholder="siret"
              value={this.state.siret}
              onChange={this.saveToState}
              onBlur={this.saveToState}
              required
            />
          </label>
        </JadForm>

        <Query
          query={QUERY_MY_BUSINESS}
          variables={{ siret: this.state.siret }}
        >
          {({ error, loading, data }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>recherche dans le repertoir de l'insee...</p>;
            if (!data.mybiz) return <p>il y a une erreur dans le siret!</p>;

            const biz = data.mybiz;
            return (
              <div>
                <H4>{biz.name}</H4>
                <ShowMyBiz>
                  <div className="obj">SIREN</div>
                  <div className="val">{biz.siren}</div>
                  <div className="obj">SIRET</div>
                  <div className="val">{biz.siret}</div>
                  <div className="obj">NAF/APE</div>
                  <div className="val">{biz.nafape}</div>
                  <div className="obj">NUM. TVA</div>
                  <div className="val">{biz.tva}</div>
                </ShowMyBiz>

                <Mutation
                  mutation={CREATE_USERCPM_MUTATION}
                  variables={{
                    name: biz.name,
                    siren: biz.siren,
                    siret: biz.siret,
                    nafape: biz.nafape,
                    tva: biz.tva,
                  }}
                  refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                >
                  {(createUserCompany, { error, called }) => (
                    <>
                      <Error error={error} />
                      {!error && called && (
                        <p>Merci! Un email vous a été envoyé ...</p>
                      )}
                      <BwBtnJad
                        title="cliqué pour valider vos informations de société"
                        type="submit"
                        onClick={async e => {
                          e.preventDefault();
                          await createUserCompany();
                          this.setState({
                            siret: '',
                          });
                          await Router.push('/user');
                        }}
                      >
                        je certifie que ces informations sont exactes
                      </BwBtnJad>
                    </>
                  )}
                </Mutation>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

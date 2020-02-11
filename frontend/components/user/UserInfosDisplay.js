import React, { Component } from 'react';
import Link from 'next/link';
import { JadForm } from '../styled/form';

export default class UserInfosDisplay extends Component {
  render() {
    const uid = this.props;
    return (
      <JadForm>
        <fieldset>
          <label htmlFor="firstname">
            prénom
            <input
              name="firstname"
              component="input"
              type="text"
              value={uid.me.firstname}
              readOnly
              disabled
            />
          </label>

          <label htmlFor="lastname">
            nom
            <input
              name="lastname"
              component="input"
              type="text"
              value={uid.me.lastname}
              readOnly
              disabled
            />
          </label>

          <label htmlFor="email">
            email
            <input
              name="email"
              component="input"
              type="text"
              value={uid.me.email}
              readOnly
              disabled
            />
          </label>

          <label htmlFor="phone">
            téléphone
            <input
              name="phone"
              component="input"
              type="tel"
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
              maxLength="10"
              value={uid.me.phone}
              readOnly
              disabled
            />
          </label>

          {uid.me.company.length === 0 && (
            <todoCompany>
              <Link title="ajouter votre société" href="/usercompanycheck">
                <a>clicker ici pour pouvoir ajouter votre société</a>
              </Link>
            </todoCompany>
          )}

          <label htmlFor="company">
            société
            <input
              name="company"
              component="input"
              type="text"
              value={uid.me.company.length > 0 ? uid.me.company[0].name : null}
              readOnly
              disabled
            />
          </label>

          <label htmlFor="companyid">
            num. siret
            <input
              name="companyid"
              component="input"
              type="text"
              value={uid.me.company.length > 0 ? uid.me.company[0].siret : null}
              readOnly
              disabled
            />
          </label>

          <label htmlFor="companytva">
            num. tva
            <input
              name="companytva"
              component="input"
              type="text"
              value={uid.me.company.length > 0 ? uid.me.company[0].tva : null}
              readOnly
              disabled
            />
          </label>
        </fieldset>
      </JadForm>
    );
  }
}

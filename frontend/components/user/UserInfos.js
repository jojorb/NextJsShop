import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { H5 } from '../styled/global';
import UserInfosDisplay from './UserInfosDisplay';

const MyInfo = styled.div`
  margin-bottom: 3.5rem;
`;

export default class UserInfos extends PureComponent {
  render() {
    const { me } = this.props;

    return (
      <MyInfo>
        <UserInfosDisplay me={me} />

        {me.address.length > 0 ? (
          <H5>
            vous avez {me.address.length} adresse{me.address.length > 1 && 's'}{' '}
            de disponible{me.address.length > 1 && 's'}
          </H5>
        ) : (
          <H5>vous n'avez pas d'adresse de disponible!</H5>
        )}

        {me.address.length > 0 && (
          <select>
            {me.address.map(adr => (
              <option key={adr.id}>
                {adr.title}: {adr.name} - {adr.address}, {adr.zip} {adr.city} /{' '}
                {adr.country}
              </option>
            ))}
          </select>
        )}
      </MyInfo>
    );
  }
}

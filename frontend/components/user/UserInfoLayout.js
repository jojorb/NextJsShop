import styled from 'styled-components';
import { H4, H5 } from '../styled/global';
import NewUserAddress from './NewUserAddress';
import UserInfos from './UserInfos';

const UserGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const EditUser = styled.div`
  padding-top: 4rem;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  margin-bottom: 5rem;
`;

const UserinfoLayout = props => (
  <UserGrid>
    <EditUser id="userprofil">
      <H4>mes informations</H4>
      <UserInfos me={props.me} />
      <H5>ajouter une adresse</H5>
      <NewUserAddress />
    </EditUser>
  </UserGrid>
);
export default UserinfoLayout;

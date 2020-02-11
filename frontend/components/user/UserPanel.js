import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import Link from 'next/link';
import styled from 'styled-components';
import { H5 } from '../styled/global';
import { msgUserChecked } from '../../config';

const UserGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Welcome = styled.div`
  background: ${props => props.theme.backGrey};
  padding: 2rem;
  text-align: center;
  font-size: 2.2rem;
  text-transform: capitalize;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem 1rem;
  max-width: ${props => props.maxWidth || '512px'};
  width: 100%;
  text-align: center;
  justify-self: center;
  align-self: start;
  padding: 5rem 0rem;
  padding-bottom: 0rem;
`;

const CardLayout = styled.div`
  border: 1px solid ${props => props.theme.white};
  background: #fff;
  background: ${props => props.theme.backGrey};
  box-shadow: 0px 3px 10px 1px rgba(201, 190, 190, 0.7);
  transition: all 0.1s ease-in-out, all 0.3s ease-in-out;
  display: grid;
  grid-template-rows: 3fr 1fr;
  &:hover {
    box-shadow: 0px 3px 10px 1px rgba(201, 190, 190, 0.1);
    cursor: pointer;
  }
`;

const UpperCard = styled.div`
  justify-self: center;
  align-self: center;
  font-size: 5rem;
  transition: all 0.1s ease-in-out, all 0.3s ease-in-out;
  &:hover {
    color: ${props => props.theme.darkgrey};
  }
`;

const LowerCard = styled.div`
  text-align: center;
  justify-self: center;
  align-self: center;
  font-size: 2.2rem;
  text-transform: capitalize;
`;

const MyInfos = styled.div`
  text-transform: lowercase;
  font-size: 1.4rem;
  padding-top: 1.75rem;
`;

const UserPanel = props => {
  console.log(props);
  const today = new Date();
  const time = format(today, 'HH', { locale: frenchLocale });
  const allow = props.me.permissions.some(permission =>
    ['ADMIN', 'JADFAM'].includes(permission)
  );

  return (
    <UserGrid>
      <Welcome>
        bon{time >= 19 || time <= 4 ? 'soir' : 'jour'} {props.me.firstname},
        <MyInfos>
          <H5>{msgUserChecked}</H5>
          {allow === false && props.me.company.siret !== null && (
            <>
              <hr />
              <H5 className="allred">
                <span>
                  Veuillez vérifier vos emails pour valider votre compte
                </span>
              </H5>
            </>
          )}

          {props.me.discount > 0 && (
            <H5>vous avez {props.me.discount}% sur tous notre shop en ligne</H5>
          )}
        </MyInfos>
      </Welcome>

      <CardGrid>
        <Link href="/user">
          <CardLayout>
            <UpperCard>
              <i className="fas fa-user-edit" />
            </UpperCard>
            <LowerCard>Profile</LowerCard>
          </CardLayout>
        </Link>

        <Link href="/orders">
          <CardLayout>
            <UpperCard>
              <i className="fas fa-cart-arrow-down" />
            </UpperCard>
            <LowerCard>comandes</LowerCard>
          </CardLayout>
        </Link>

        <CardLayout>
          <UpperCard>
            <i className="fas fa-comments" />
          </UpperCard>
          <LowerCard>contacte</LowerCard>
        </CardLayout>
      </CardGrid>
    </UserGrid>
  );
};
export default UserPanel;

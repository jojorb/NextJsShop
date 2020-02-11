import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { motdDisplay } from '../../config';

const Motd = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 1.6rem;
  text-transform: lowercase;
  line-height: 1.6rem;
  padding: 0.8rem 0rem;
  height: 100%;
  z-index: 99;
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

const MainMotd = props => (
  // TODO: sync with twitter #motd or from Dolibarr
  <Motd>{motdDisplay}</Motd>
);

export default MainMotd;

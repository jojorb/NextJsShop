import Link from 'next/link';
import styled from 'styled-components';
import { BtnJad, H5 } from '../styled/global';
import Loginform from './Loginform';
import { brand } from '../../config';

const TwoPanels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 4rem 2rem;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 1rem 2rem;
  }
`;

const Inner2p = styled.div`
  border: 1px solid ${props => props.theme.borderLight};
  padding: 4rem 8rem;
  height: 100%;
  position: relative;
  p {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
    p {
      font-size: 1.7rem;
    }
  }
`;

const InnerU2P = () => (
  <TwoPanels>
    <Inner2p>
      <H5>nouveau client</H5>
      <p>
        Nous ne vendons qu'aux professionnelles, pour crée votre compte veuillez
        rentrer directement en contact avec nous soit sur les réseaux sociaux ou
        par email
      </p>
      <BtnJad>
        <Link prefetch href="/register">
          <a title="remplir notre formulaire" className="botright">
            creer votre compte chez nous
          </a>
        </Link>
      </BtnJad>
    </Inner2p>

    <Inner2p>
      <H5>vous avez déjà un compte {brand}</H5>
      <Loginform />
    </Inner2p>
  </TwoPanels>
);

export default InnerU2P;

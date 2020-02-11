import styled from 'styled-components';
import Link from 'next/link';
import CheckoutForm from './CheckoutForm';
import SideBlockInfo from './SideBlock';
import { fbMsg, insta, contactMail } from '../../config';

const MyCheckout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 3rem;
  margin: 0rem 4rem;
`;

const TheCheckout = styled.div`
  border: 1px solid ${props => props.theme.borderLight};
  margin-bottom: 2rem;
`;

const TheInfos = styled.div``;

const CheckoutOverlay = () => (
  <MyCheckout>
    <TheCheckout>
      <CheckoutForm />
    </TheCheckout>
    <TheInfos>
      <SideBlockInfo
        title="besoin d'aide"
        para="On vous répond par mail ou sur nos réseaux"
      >
        <i className="far fa-envelope" />
        <span>{contactMail}</span>
        <i className="fab fa-whatsapp" />
        <span>par whatsapp</span>
        <i className="fab fa-facebook-messenger" />
        <span>
          <Link href={fbMsg}>
            <a>par messanger</a>
          </Link>
        </span>
        <i className="fab fa-instagram" />
        <span>
          <Link href={insta}>
            <a>par instagram</a>
          </Link>
        </span>
      </SideBlockInfo>
      <SideBlockInfo title="vos services">
        <i className="fas fa-undo-alt" />
        <span>Échange sous 15 jours</span>
        <i className="fas fa-hand-holding-heart" />
        <span>Frais de port offert</span>
      </SideBlockInfo>
      <SideBlockInfo title="nos attentions">
        <i className="fas fa-table" />
        <span>Fiche produit téléchargeable</span>
        <i className="fas fa-hand-peace" />
        <span>Goodies</span>
      </SideBlockInfo>
    </TheInfos>
  </MyCheckout>
);
export default CheckoutOverlay;

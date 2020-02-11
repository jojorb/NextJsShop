import PropTypes from 'prop-types';
import Link from 'next/link';
import { PaiementInfo, PrevNextNav } from '../styled/checkout';
import PayWithWire from './PayWithWire';

const MethWire = props => {
  const { shipping } = props;
  return (
    <>
      <PaiementInfo>
        virement bancaire,
        <Link prefetch href="/static/pdf/rib.pdf">
          <a target="_blank" title="RIB" aria-label="links">
            télécharger notre RIB
          </a>
        </Link>
        <span>
          votre commande sera envoyé dès la récéption de votre transfere.
        </span>
      </PaiementInfo>

      <PrevNextNav>
        <div />
        <PayWithWire shipping={shipping}>
          valider la commande par virement
        </PayWithWire>
      </PrevNextNav>
    </>
  );
};
MethWire.propTypes = {
  shipping: PropTypes.object,
};
export default MethWire;

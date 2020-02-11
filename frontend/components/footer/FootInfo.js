import Link from 'next/link';
import { H4, List } from '../styled/global';

const FootInfo = props => (
  <>
    <H4>information</H4>
    <List>
      <li>
        <Link href="/fyi#paiement" as="/fyi/#paiement">
          <a aria-label="links to">Moyens de paiements</a>
        </Link>
      </li>
      <li>
        <Link href="/fyi#shipping" as="/fyi/#shipping">
          <a aria-label="links to">Livraison et suivi</a>
        </Link>
      </li>
      <li>
        <Link href="/fyi#reglementations" as="/fyi/#reglementations">
          <a aria-label="links to">Réglementations</a>
        </Link>
      </li>
    </List>
  </>
);

export default FootInfo;

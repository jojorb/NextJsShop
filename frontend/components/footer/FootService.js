import Link from 'next/link';
import { H4, List } from '../styled/global';

const FootService = props => (
  <>
    <H4>service client</H4>
    <List>
      <li>
        <Link href="/fyi#contact" as="/fyi">
          <a aria-label="links to">contactez nous</a>
        </Link>
      </li>
      <li>
        <Link href="/fyi#legal" as="/fyi/#legal">
          <a aria-label="links to">Mentions légales</a>
        </Link>
      </li>
      <li>
        <Link href="/fyi#data" as="/fyi/#data">
          <a aria-label="links to">protection des données</a>
        </Link>
      </li>
    </List>
  </>
);

export default FootService;

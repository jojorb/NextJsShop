import Link from 'next/link';
import styled from 'styled-components';
import { fbMsg } from '../config';

const Helper = styled.div`
  padding-top: 2rem;
  font-size: 1.6rem;
  text-align: center;
  a {
    text-decoration: underline;
    &:hover {
      color: #111;
    }
  }
`;

const Help = () => (
  <Helper>
    <Link href={fbMsg}>
      <a target="_blank">
        besoin d'aide, demandé sur messanger{' '}
        <i className="fab fa-facebook-messenger" />
      </a>
    </Link>
  </Helper>
);
export default Help;

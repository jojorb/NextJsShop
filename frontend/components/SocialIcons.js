import Link from 'next/link';
import styled from 'styled-components';
import { fb, fbMsg, insta } from '../config';

const Si = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
  max-width: ${props => props.maxWidth || '120px'};
  width: 100%;
  font-size: ${props => props.ftSize || '2.4rem'};
  text-align: center;
  justify-self: center;
  align-self: start;
  a {
    transition: color 0.2s ease-in-out, color 0.4s ease-in-out;
  }
`;

const SocialIcons = () => (
  // the partent div must have display: grid to align it well
  <Si>
    <Link href={fb}>
      <a target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
    </Link>
    <Link href={fbMsg}>
      <a target="_blank">
        <i className="fab fa-facebook-messenger" />
      </a>
    </Link>
    <Link href={insta}>
      <a target="_blank">
        <i className="fab fa-instagram" />
      </a>
    </Link>
  </Si>
);

export default SocialIcons;

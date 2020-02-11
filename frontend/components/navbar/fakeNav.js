import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styled from 'styled-components';
import FixeNav from './FixeNav';
import { brand } from '../../config';

const Navbar = styled.div`
  z-index: 100;
  width: 100%;
  padding: 1.2rem;
  color: ${props => props.theme.black};
  font-size: 1.8rem;

  /* position: fixed; */
  /* top: 32; */
  /* left: 0; */
`;

const NavbarItems = styled.div`
  /* height: 75px; */
  position: relative;
  width: 100%;
  text-transform: uppercase;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr 2fr auto;
  grid-template-areas: 'navlogo navlinks navuser';
  @media screen and (max-width: 870px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'navlogo navuser'
      'navlinks navlinks';
  }
`;

const NavLogo = styled.div`
  grid-area: navlogo;
  align-self: center;
  align-items: left;
  padding-left: 1em;
  a {
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  grid-area: navlinks;
  align-self: center;
  text-align: left;
  a {
    text-decoration: none;
    padding-left: 1.2em;
    transition: color 0.2s ease;
  }
`;

const NavUser = styled.div`
  grid-area: navuser;
  align-self: center;
  padding-right: 1em;
  display: grid;
  grid-template-columns: repeat(5, auto);
  a {
    align-self: center;
    text-decoration: none;
    transition: color 0.2s ease;
  }
`;

export const RightNavIcons = styled.div`
  padding-left: 2rem;
  font-size: 3rem;
  cursor: pointer;
  a:hover {
    cursor: pointer;
    transition: color 0.2s ease;
  }
`;

const fakeNav = props => (
  <FixeNav height={-32} offset={0} distance={32} active={32}>
    <Navbar>
      <NavbarItems>
        <NavLogo>
          <Link prefetch href="/">
            <a title="Home" aria-label="links">
              {brand}
            </a>
          </Link>
        </NavLogo>
        <NavLinks>
          <Link prefetch href="/category?id=ejuice">
            <a title="eliquide" aria-label="links">
              e-liquide
            </a>
          </Link>
          <Link prefetch href="/category?id=nicsalt">
            <a title="nic salt" aria-label="links">
              sel2nico
            </a>
          </Link>
          <Link prefetch href="/pod">
            <a title="pod" aria-label="links">
              pod
            </a>
          </Link>
          <Link prefetch href="/brand">
            <a title="brand" aria-label="links">
              brand
            </a>
          </Link>
        </NavLinks>
        <NavUser>
          <RightNavIcons>
            <Link prefetch href="/user">
              <a title="profil de user">
                <FontAwesomeIcon icon={['fax', 'user']} />
              </a>
            </Link>
          </RightNavIcons>
        </NavUser>
      </NavbarItems>
    </Navbar>
  </FixeNav>
);

export default fakeNav;

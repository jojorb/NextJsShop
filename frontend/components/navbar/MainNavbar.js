import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Cart, { TOGGLE_CART_MUTATION } from '../cart/Cart';
// import CartCount from '../cart/CartCount';
import UserQuery from '../UserQuery';
import UserSignout from '../UserSignout';
import FixeNav from './FixeNav';
import { brand, smallLogo } from '../../config';

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
  img {
    height: 1.8rem;
    width: auto;
  }
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
  font-size: 2.2rem;
  cursor: pointer;
  a:hover {
    cursor: pointer;
    transition: color 0.2s ease;
  }
`;

const MainNavbar = props => (
  <>
    <FixeNav height={-32} offset={0} distance={32} active={32}>
      <Navbar>
        <NavbarItems>
          <NavLogo>
            <Link prefetch href="/">
              <a title="Home" aria-label="links">
                <img alt="logo" src={smallLogo} />
                {brand}
              </a>
            </Link>
          </NavLogo>

          <NavLinks>
            <Link prefetch href="/shortfills">
              <a title="eliquide" aria-label="links">
                cat#1
              </a>
            </Link>
            <Link prefetch href="/salt">
              <a title="nic salt" aria-label="links">
                cat#2
              </a>
            </Link>
            <Link prefetch href="/pods">
              <a title="pod" aria-label="links">
                cat#3
              </a>
            </Link>
            <Link prefetch href="/brand">
              <a title="brand" aria-label="links">
                brand
              </a>
            </Link>
            <Link prefetch href="/map">
              <a title="map" aria-label="links">
                map
              </a>
            </Link>
          </NavLinks>

          <UserQuery>
            {({ data: { me } }) => {
              console.log('navbar me ', me);

              if (me) {
                const allow = me.permissions.some(permission =>
                  ['ADMIN', 'USERCHECKED'].includes(permission)
                );
                return (
                  <NavUser>
                    <Mutation mutation={TOGGLE_CART_MUTATION}>
                      {toggleCart => (
                        <RightNavIcons>
                          {me.cart.length > 0 ? (
                            <a className="bagactive" onClick={toggleCart}>
                              <FontAwesomeIcon
                                icon={['fax', 'shopping-bag']}
                                title={`il y a ${me.cart.reduce(
                                  (tally, cartItem) =>
                                    tally + cartItem.quantity,
                                  0
                                )} articles dans votre panier`}
                              />
                            </a>
                          ) : (
                            <FontAwesomeIcon
                              icon={['fax', 'shopping-bag']}
                              style={{ color: '#727272' }}
                              title="votre panier est vide!"
                            />
                          )}
                        </RightNavIcons>
                      )}
                    </Mutation>

                    {/* <RightNavIcons>
                  {me.cart.length > 0 &&
                    <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>}
                  </RightNavIcons> */}

                    <RightNavIcons>
                      <Link prefetch href="/user">
                        <a title={`profil de ${me.firstname}`}>
                          <FontAwesomeIcon icon={['fax', 'user']} />
                        </a>
                      </Link>
                    </RightNavIcons>

                    <UserSignout />
                  </NavUser>
                );
              }
              return (
                <NavUser>
                  <Link prefetch href="/login">
                    <a title="connection/s'enregistrer">connexion</a>
                  </Link>
                </NavUser>
              );
            }}
          </UserQuery>
        </NavbarItems>
      </Navbar>
    </FixeNav>
    <Cart />
  </>
);

export default MainNavbar;

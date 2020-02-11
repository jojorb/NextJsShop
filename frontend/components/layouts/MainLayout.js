import styled from 'styled-components';
import MainFooter from '../footer/MainFooter';
import MainMotd from '../motd/MainMotd';
import MainNavbar from '../navbar/MainNavbar';

const MainLayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 90px 1fr auto;
  grid-template-areas:
    'motd'
    'navbar'
    'core'
    'footer';
`;

const Motd = styled.div`
  grid-area: motd;
`;
const Navbar = styled.div`
  grid-area: navbar;
`;
const Core = styled.div`
  grid-area: core;
  height: 100%;
`;
const Footer = styled.div`
  grid-area: footer;
`;

const MainLayout = props => (
  <MainLayoutGrid>
    <Motd>
      <MainMotd />
    </Motd>
    <Navbar>
      <MainNavbar />
    </Navbar>
    <Core>{props.children}</Core>
    <Footer>
      <MainFooter />
    </Footer>
  </MainLayoutGrid>
);

export default MainLayout;

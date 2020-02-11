import styled from 'styled-components';
import { brand, company, contactMail } from '../../config';
import FootInfo from './FootInfo';
import FootService from './FootService';
import FootSocial from './FootSocial';

const FooterContainer = styled.div`
  background: ${props => props.theme.backGrey};
  color: ${props => props.theme.black};
  border-top: 1px solid ${props => props.theme.lightgrey};
  padding-top: 5rem;
  display: grid;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;
  grid-gap: 0;
  grid-template-areas:
    'service info social'
    'creds creds creds';
  max-width: 75%;
  width: 100%;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0;
    grid-template-areas:
      'service'
      'info'
      'social'
      'creds';
  }
`;

const Service = styled.div`
  grid-area: service;
`;
const Info = styled.div`
  grid-area: info;
`;
const Social = styled.div`
  grid-area: social;
`;
const Creds = styled.div`
  grid-area: creds;
  padding: 1rem 0rem;
  font-size: 1.2rem;
  color: ${props => props.theme.darkgrey};
  margin-top: 5rem;
`;

const MainFooter = props => (
  <FooterContainer>
    <Footer>
      <Service>
        <FootService />
      </Service>
      <Info>
        <FootInfo />
      </Info>
      <Social>
        <FootSocial />
      </Social>
      <Creds>
        {brand} — Copyright © {new Date().getFullYear()} {company}. All rights
        reserved {contactMail}
      </Creds>
    </Footer>
  </FooterContainer>
);

export default MainFooter;

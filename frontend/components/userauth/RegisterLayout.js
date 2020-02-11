import styled from 'styled-components';
import { H5 } from '../styled/global';
import RegisterForm from './RegisterForm';

const OnePanel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 4rem 2rem;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 1rem 2rem;
  }
`;

const Inner2p = styled.div`
  border: 1px solid ${props => props.theme.borderLight};
  padding: 4rem 8rem;
  height: 100%;
  position: relative;
  p {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
    p {
      font-size: 1.7rem;
    }
  }
`;

const InnerU1P = () => (
  <OnePanel>
    <Inner2p>
      <H5>nouveau client</H5>
      <RegisterForm />
    </Inner2p>
  </OnePanel>
);
export default InnerU1P;

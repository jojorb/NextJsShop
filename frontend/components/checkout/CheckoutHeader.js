import Link from 'next/link';
import styled from 'styled-components';

const CkHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  background: black;
  color: white;
  padding: 2rem;
  font-size: 1.974rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Backdash = styled.div`
  align-self: center;
  align-items: left;
  text-align: left;
  a {
    color: white;
    &:hover {
      color: lightgrey;
    }
  }
`;

const TheDate = styled.div`
  text-align: right;
`;

const CheckoutHeader = () => (
  <CkHeader>
    <Backdash>
      <Link href="/">
        <a>back</a>
      </Link>
    </Backdash>
    <div>logo</div>
    <TheDate>date</TheDate>
  </CkHeader>
);
export default CheckoutHeader;

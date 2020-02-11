import styled from 'styled-components';

export const CheckoutNavStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0rem;
  padding: 4rem;
  text-transform: uppercase;
  font-size: 1.2rem;
`;

export const NavitemChecked = styled.div`
  .tal {
    text-align: left;
  }
  .tac {
    text-align: center;
  }
  .tar {
    text-align: right;
  }
  .active {
    color: black;
    border-bottom: 1px solid black;
    padding-bottom: 1.2rem;
  }
  .disable {
    color: darkgrey;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 1.2rem;
  }
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PrevNextNav = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 3rem;
`;

export const NavBtnBlack = styled.button`
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  border: 1px solid black;
  &:hover {
    background: white;
    color: #000;
    border: 1px solid lightgrey;
    cursor: pointer;
  }
`;

export const CheckoutContent = styled.div`
  padding: 4rem;
  padding-top: 0rem;
`;

export const CheckYourtotal = styled.div`
  /* border-top: 1px solid lightgrey; */
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  margin: 1rem 0;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-row-gap: 1rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  .disable {
    color: darkgrey;
  }
`;

export const MethPay = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* border: 1px solid black; */
  align-items: center;
  text-align: left;
  margin-bottom: 2.5rem;
  label {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export const CfC = styled.div`
  h1 {
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
`;

export const ShippingAdd = styled.div`
  background: lightgrey;
  padding: 4rem;
  margin-bottom: 3rem;
`;

export const PaiementInfo = styled.div`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  a {
    color: blue;
    text-decoration: none;
    &:hover {
      color: darkblue;
      font-weight: 600;
    }
  }
`;

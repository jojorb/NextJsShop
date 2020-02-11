import styled from 'styled-components';

export const ContainerGrid = styled.div`
  display: grid;
  color: ${props => props.ftColor || 'black'};
  background: ${props => props.bgColor || 'white'};
`;

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 1rem;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    margin-bottom: 3rem;
  }
  /* @media (max-width: 490px) {
    grid-template-columns: 1fr;
    grid-gap: 0.2rem;
    margin-bottom: 2rem;
  } */
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 2rem 1rem;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    margin-bottom: 3rem;
  }
  /* @media (max-width: 490px) {
    grid-template-columns: 1fr;
    grid-gap: 0.2rem;
    margin-bottom: 2rem;
  } */
`;

export const H2 = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  padding: 0rem;
  margin: 0rem;
  font-size: 3.1rem;
  line-height: 3.1rem;
  margin-bottom: 2.6rem;
  padding-top: ${props => props.pt};
  color: ${props => props.ftColor};
  text-align: center;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  padding: 0rem;
  margin: 0rem;
  font-size: 2rem;
  line-height: 2.1rem;
  margin-bottom: 2.6rem;
  padding-top: ${props => props.pt};
  color: ${props => props.ftColor};
`;

export const H5 = styled.h5`
  text-transform: uppercase;
  font-weight: 200;
  padding: 0rem;
  margin: 0rem;
  font-size: 1.65rem;
  line-height: 1.65rem;
  margin-bottom: 1.65rem;
  padding-top: ${props => props.pt};
  color: ${props => props.ftColor};
  span {
    display: block;
    margin-top: 2.75rem;
    color: red;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  /* padding-top: 1.82rem; */
  li {
    text-transform: uppercase;
    color: ${props => props.theme.black};
    margin: 0;
    font-size: 1.3rem;
    line-height: 2.3rem;
    a {
      text-decoration: unset;
      color: ${props => props.theme.black};
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${props => props.theme.darkgrey};
      }
    }
  }
`;

export const BtnJad = styled.div`
  text-align: center;
  padding-top: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: ${props => props.ftSize || '1.4rem'};
  a {
    background-color: ${props => props.theme.black};
    padding: 1rem 2rem;
    color: ${props => props.theme.white};
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    transition: box-shadow 0.5s ease, background 0.2s ease;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    &:hover {
      color: ${props => props.theme.blacky};
      background-color: ${props => props.theme.lightgrey};
      font-weight: 600;
    }
  }
  .botright {
    position: absolute;
    bottom: 4rem;
    right: 6rem;
  }
`;

export const BwBtnJad = styled.button`
  outline: 0;
  border: 0;
  text-align: center;
  padding-top: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: ${props => props.ftSize || '1.4rem'};
  background-color: ${props => props.theme.black};
  padding: 1rem 2rem;
  color: ${props => props.theme.white};
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  transition: box-shadow 0.5s ease, background 0.2s ease;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  &:hover {
    color: ${props => props.theme.blacky};
    background-color: ${props => props.theme.lightgrey};
    cursor: pointer;
    font-weight: 500;
  }
`;

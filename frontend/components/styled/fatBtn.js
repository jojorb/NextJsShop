import styled from 'styled-components';

const FatBtn = styled.button`
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: capitalize;
  font-size: 1.8rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
  i {
    padding-right: 1.6rem;
  }
`;

export default FatBtn;

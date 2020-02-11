import styled from 'styled-components';

const Description = styled.div`
  text-align: left;
  padding: 0rem 4rem;
`;

const BrandDescription = props => <Description>{props.brand}</Description>;
export default BrandDescription;

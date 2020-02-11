import styled from 'styled-components';
import UfoZoneLayout from './UfoZoneLayout';

const MiaGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 75vh;
`;

const ShowCase = styled.div`
  align-self: center;
  justify-self: center;
  padding-top: 2rem;
`;

const Message = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${props => props.theme.darkgrey};
`;

const MiA = props => (
  <MiaGrid>
    <ShowCase>
      <UfoZoneLayout />
    </ShowCase>
    <Message>{props.message}</Message>
  </MiaGrid>
);

export default MiA;

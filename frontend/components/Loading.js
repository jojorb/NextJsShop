import styled from 'styled-components';
import LoadingLayout from './LoadingLayout';

const LoadingGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const ShowCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;
`;

const Message = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${props => props.theme.darkgrey};
`;

const Loading = () => (
  <LoadingGrid>
    <ShowCase>
      <LoadingLayout />
    </ShowCase>
    <Message>"le serveur doit se reveiller..."</Message>
  </LoadingGrid>
);
export default Loading;

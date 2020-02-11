import styled from 'styled-components';

const QIcon = styled.div`
  font-size: 1.2rem;
  text-align: center;
  display: inline-block;
  padding-right: 1.2rem;
  color: ${props => props.theme.darkgrey};
  &:hover {
    color: ${props => props.theme.blacky};
    cursor: pointer;
  }
`;

const Question = () => (
  <QIcon>
    <i className="fas fa-question-circle" />
  </QIcon>
);
export default Question;

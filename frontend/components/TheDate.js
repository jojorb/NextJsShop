import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import styled from 'styled-components';

const DateDisplay = styled.div`
  display: grid;
`;

const DayDisplay = styled.div`
  align-self: center;
  justify-self: center;
  padding-bottom: 1rem;
`;

const MonthDisplay = styled.div`
  align-self: center;
  justify-self: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid black;
`;

const today = new Date();
const formattedDay = format(today, 'DD');
const formattedMonth = format(today, 'MMMM', { locale: frenchLocale });

const TheDate = () => (
  <DateDisplay>
    <DayDisplay>{formattedDay}</DayDisplay>
    <MonthDisplay>{formattedMonth}</MonthDisplay>
  </DateDisplay>
);

export default TheDate;

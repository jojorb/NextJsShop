import styled from 'styled-components';

const Misc = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: left;
  padding: 2rem 4rem;
`;

const MiscTitle = styled.div`
  padding-right: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.orange};
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const MiscBody = styled.div`
  font-size: 1.4rem;
  grid-column: 1 / 3;
  margin-bottom: 1.8rem;
  i {
    color: ${props => props.theme.orange};
    padding-right: 0.5rem;
  }
  ul {
    list-style: none;
    margin-left: 1rem;
    padding-left: 0;
  }
  li {
    margin-bottom: 1rem;
  }
`;

const Miscellaneous2 = props => (
  <Misc>
    <MiscTitle>Caractéristiques</MiscTitle>
    <MiscBody>
      {props.feat}
      {props.details.feat !== undefined && (
        <ul>
          {props.details.feat.map(data => (
            <li>
              <i className="fas fa-chevron-right" />
              {data}
            </li>
          ))}
        </ul>
      )}
    </MiscBody>

    {props.details.pack !== undefined && (
      <>
        <MiscTitle>Matériels fournis</MiscTitle>
        <MiscBody>
          <ul>
            {props.details.pack.map(data => (
              <li>
                <i className="fas fa-chevron-right" />
                {data}
              </li>
            ))}
          </ul>
        </MiscBody>
      </>
    )}
  </Misc>
);
export default Miscellaneous2;

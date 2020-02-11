import styled from 'styled-components';

export const Add2CartBtn = styled.div`
  margin-top: 2.12rem;
  font-size: 1.9em;
  text-transform: uppercase;
  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    padding: 1.75rem 2rem;
    letter-spacing: 0.1px;
    /* line-height: 1.6rem; */
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.black};
    background-color: ${props => props.theme.black};
    transition: color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    :hover {
      color: ${props => props.theme.black};
      border: 1px solid ${props => props.theme.lightgrey};
      background-color: #bebebe;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

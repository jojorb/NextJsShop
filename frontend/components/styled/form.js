import styled from 'styled-components';

export const JadForm = styled.form`
  margin-top: 2.5rem;
  text-align: left;

  fieldset {
    border: none;
  }

  label {
    margin-bottom: 0.642rem;
    position: relative;
    display: block;
    padding: 0 0 0 1px;
    color: black;
    font-size: ${props => props.fontSize || '1.23rem'};
    font-family: 'Century-Gothic', Arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
  }

  todoCompany {
    margin: 0.45rem;
    font-size: ${props => props.fontSize || '1.23rem'};
    font-family: 'Century-Gothic', Arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    display: block;
    text-align: center;
    a {
      color: red;
      text-decoration: none;
    }
  }

  input[type='email'],
  input[type='tel'],
  input[type='text'],
  input[type='password'] {
    width: 100%;
    font-family: 'Century-Gothic', Arial, sans-serif;
    color: black;
    margin-bottom: 1.78rem;
    padding: 1.42rem 1.1rem;
    height: 2.12rem;
    box-sizing: border-box;
    line-height: inherit;
    text-indent: 0;
    font-size: ${props => props.fontSize || '1.23rem'};
    outline: 0 !important;
    border: 1px solid #e0e0e0;
    border-radius: 0px;
    -moz-border-radius: 0px;
    appearance: none;
    -webkit-appearance: none;
    display: inline-block;
    &:hover {
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
    }
  }

  input[type='submit'] {
    outline: 0;
    border: 0;
    font-size: 1.7rem;
    text-align: center;
    padding-top: 2.2rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: ${props => props.ftSize || '1.4rem'};
    background-color: ${props => props.theme.black};
    padding: 1rem 2rem;
    color: ${props => props.theme.white};
    text-decoration: none;
    font-family: 'Century-Gothic', Arial, sans-serif;
    letter-spacing: 0.12rem;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    transition: box-shadow 0.5s ease, background 0.2s ease;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    &:hover {
      color: ${props => props.theme.blacky};
      background-color: ${props => props.theme.lightgrey};
      font-weight: 600;
      cursor: pointer;
    }
  }

  .botright {
    position: absolute;
    bottom: 4rem;
    right: 8rem;
  }

  .login-lost-pwd {
    text-transform: lowercase;
    font-size: 1.4rem;
    color: ${props => props.theme.black};
    margin-bottom: 3.5rem;
    color: ${props => props.theme.darkgrey};
  }
  .notabene {
    text-transform: lowercase;
    font-size: 1.4rem;
    color: ${props => props.theme.black};
    margin-bottom: 8rem;
    color: ${props => props.theme.darkgrey};
  }
  .cbx {
    font-size: 1rem;
    margin-bottom: 8rem;
  }
  .checkbb {
    margin-top: 2.3rem;
  }
`;

export const HR = styled.hr`
  margin: 2.5rem;
  color: #e0e0e0;
`;

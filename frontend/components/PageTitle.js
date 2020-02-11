import React, { PureComponent } from 'react';
import styled from 'styled-components';

const PageTitleStyle = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 3.1rem;
    font-weight: 300;
    text-align: center;
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-right: 16%;
    margin-left: 16%;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const PageDescription = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: lowercase;
  margin: 0rem 16%;
  padding-bottom: 0rem;
`;

export default class PageTitle extends PureComponent {
  render() {
    const { children, title } = this.props;
    return (
      <>
        <PageTitleStyle>
          <h2>{title}</h2>
        </PageTitleStyle>

        <PageDescription>
          <p>{children}</p>
        </PageDescription>
      </>
    );
  }
}

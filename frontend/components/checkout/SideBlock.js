import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H5 } from '../styled/global';

const SideBlockLayout = styled.div`
  border: 1px solid ${props => props.theme.borderLight};
  padding: 2rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  h3 {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 100;
  }
`;

const SideBlockUl = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem 1.5rem;
  i,
  span {
    align-self: center;
    justify-self: start;
  }
  i {
    font-size: 2.1rem;
    color: ${props => props.theme.darkgrey};
  }
`;

export default class SideBlock extends PureComponent {
  render() {
    const { title, para, children } = this.props;
    return (
      <SideBlockLayout>
        <H5>{title}</H5>
        <p>{para}</p>
        <SideBlockUl>{children}</SideBlockUl>
      </SideBlockLayout>
    );
  }
}

SideBlock.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
  children: PropTypes.array,
};

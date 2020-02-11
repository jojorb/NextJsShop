import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

export default class FixeNav extends PureComponent {
  state = {
    scrolled: false,
    fixed: false,
    active: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scroll = window.scrollY || document.body.scrollTop;
    const scrolled = scroll > (this.props.distance || 0);
    const fixed = scroll >= (this.props.distance || 0);
    const active = scroll >= (this.props.active || 0);

    if (
      scrolled !== this.state.scrolled ||
      fixed !== this.state.fixed ||
      active !== this.state.active
    ) {
      this.setState({ scrolled, fixed, active });
    }
  };

  render() {
    const { scrolled, fixed, active } = this.state;
    const { height, offset, zIndex, defaultActive, children } = this.props;

    const NavSection = styled.div`
      left: 0;
      top: 0;
      width: 100%;
      height: ${height}px;
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    `;

    const Scroll3d = props =>
      scrolled === true
        ? css`
            position: fixed;
            top: ${offset}px;
          `
        : css`
            position: relative;
            top: 0px;
          `;

    const Fix3d = props =>
      fixed === true
        ? css`
            position: fixed;
            top: ${offset}px;
          `
        : css`
            position: relative;
            top: 0px;
          `;

    const Active = props =>
      active === true
        ? css`
            background: rgba(255, 255, 255, 0.98);
            border-bottom: 1px solid ${props => props.theme.lightgrey};
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
            opacity: 1;
            visibility: visible;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          `
        : css`
            background: ${props => props.theme.white};
            background: rgba(0, 0, 0, 0);
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
            border-bottom: 1px solid rgba(0, 0, 0, 0);
            opacity: 1;
            visibility: visible;
          `;

    const Nav = styled.div`
      width: 100%;
      z-index: ${zIndex || 1000};
      position: relative;
      ${Scroll3d}
      ${Fix3d}
      ${Active || defaultActive}
      `;

    return (
      <NavSection>
        <Nav>{children}</Nav>
      </NavSection>
    );
  }
}

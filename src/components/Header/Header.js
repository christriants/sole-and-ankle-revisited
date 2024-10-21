import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, MEDIA_QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileHeaderButtons>
          <UnstyledButton>
            <Icon id='shopping-bag' />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id='menu' />
          </UnstyledButton>
        </MobileHeaderButtons>
        <Side />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 4px solid ${COLORS.gray[900]};

  @media ${MEDIA_QUERIES.laptop} {
    border-top: none;
    align-items: baseline;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: 48px;
  margin: 0px 48px;

  @media ${MEDIA_QUERIES.laptop} {
    display: flex;
    border-top: none;
  }
`;

const MobileHeaderButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;
  flex-basis: 100%;
  justify-content: flex-end;

  @media ${MEDIA_QUERIES.tablet} {
    gap: 32px;
  }

  @media ${MEDIA_QUERIES.laptop} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

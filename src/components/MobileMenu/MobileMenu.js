/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <Filler />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #60646ccc;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: #fff;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    gap: 24px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  a {
    gap: 14px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[700]};

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  margin-left: auto;
`;

export default MobileMenu;

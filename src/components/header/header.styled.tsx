import styled from "styled-components";

import { MOBILE, ZLAYERS } from "shared/consts";
import { COLORS } from "theme/colors";

export const HeaderWrapper = styled.div<{ $isNavBackground: boolean }>`
  background-color: ${({ $isNavBackground }) =>
    $isNavBackground ? COLORS.dark : "transparent"};
  height: 70px;
  position: fixed;
  top: 0;
  transition: background-color 0.2s ease-in;
  width: 100%;
  z-index: ${ZLAYERS.header};
`;

export const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: space-between;
`;

export const LogoColor = styled.div`
  color: ${COLORS.accent};
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  text-align: center;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;

  & ul,
  & ul li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & ul {
    display: flex;
    height: 100%;
    justify-content: center;

    @media ${MOBILE} {
      flex-direction: column;
      align-items: center;
      margin-top: -30px;
      height: auto;
    }
  }

  & ul li {
    height: 70px;
  }

  & ul li a {
    color: ${COLORS.light};
    display: inline-block;
    font-weight: bold;
    height: 70px;
    line-height: 70px;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    transition: all 150ms linear;
    transition: background ease-in 0.1s;

    @media ${MOBILE} {
      height: 90px;
      font-size: 24px;
    }
  }

  & ul li a::after {
    background: ${COLORS.accent};
    content: "";
    display: block;
    height: 3px;
    margin-top: -3px;
    transform: scaleX(0);
    transition: all 150ms linear;
    width: 100%;
  }

  & ul li a:hover::after {
    transform: scaleX(1);
  }

  @media ${MOBILE} {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.dark};
    transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    flex-direction: column;
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  & svg {
    color: ${COLORS.light};
    font-size: 30px;
    margin: 0 10px;
    transition: all ease-in 0.1s;
    width: 30px;

    &:hover {
      color: ${COLORS.accent};
    }
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;

  @media ${MOBILE} {
    display: block;
  }
`;

export const LangSwitch = styled.button`
  align-items: center;
  background-color: transparent;
  border: 2px solid ${COLORS.accent};
  border-radius: 50%;
  color: ${COLORS.light};
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  margin-left: 16px;
  overflow: hidden;
  text-transform: uppercase;
  width: 30px;
`;

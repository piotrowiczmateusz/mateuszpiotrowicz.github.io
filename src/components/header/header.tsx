import React from "react";

import { Spiral as Hamburger } from "hamburger-react";
import { FaLinkedin } from "react-icons/fa";

import { Box, Container } from "@mui/material";

import { IMAGES_PATH, LINKEDIN_URL } from "shared/consts";

import {
  HamburgerWrapper,
  HeaderInner,
  HeaderWrapper,
  LangSwitch,
  Logo,
  LogoColor,
  Nav,
  SocialLink,
} from "./header.styled";
import { useHeader } from "./use-header";

export const Header = () => {
  const {
    handleChangeLang,
    handleHamburgerClick,
    handleNavClick,
    isMobile,
    isNavBackground,
    isOpen,
    nav,
    otherLang,
    t
  } = useHeader();

  return (
    <HeaderWrapper $isNavBackground={isNavBackground}>
      <Container>
        <HeaderInner>
          <Logo>
            {t("navLogo1")}
            <LogoColor>{t("navLogo2")}</LogoColor>
          </Logo>
          <Nav $isOpen={isOpen || !isMobile}>
            <ul>
              {nav.map(({ link, label }) => (
                <li key={`menu-${label}`}>
                  <a href={link} onClick={(e) => handleNavClick(e, link)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <Box display="flex">
              <SocialLink
                href={LINKEDIN_URL}
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedin />
              </SocialLink>
              <LangSwitch onClick={handleChangeLang} type="button">
                <img alt={otherLang} height="30" src={`${IMAGES_PATH}${otherLang}.png`} width="30" />
              </LangSwitch>
            </Box>
          </Nav>
          <HamburgerWrapper onClick={handleHamburgerClick}>
            <Hamburger toggled={isOpen} />
          </HamburgerWrapper>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

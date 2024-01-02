import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { useIsMobile } from "shared/hooks";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavBackground, setIsNavBackground] = useState(false);
  const { isMobile } = useIsMobile();
  const { t, i18n } = useTranslation();
  const otherLang = i18n.language === "en" ? "pl" : "en";

  const nav = [
    {
      label: t("navAbout"),
      link: "#about",
    },
    {
      label: t("navExperience"),
      link: "#experience",
    },
    {
      label: t("navPortfolio"),
      link: "#portfolio",
    },
    {
      label: t("navContact"),
      link: "#contact",
    },
  ];

  const changeNavBg = () => setIsNavBackground(window.scrollY >= 100);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
    link: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(link);

    if (element instanceof HTMLElement) {
      setIsOpen(false);
      const { offsetTop } = element;
      const y = offsetTop - 90;
      window.scrollTo({ behavior: "smooth", top: y });
    }
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    if (window.scrollY < 100) {
      setIsNavBackground(!isNavBackground);
    }
  };

  const handleChangeLang = () => {
    setIsOpen(!isOpen);
    i18n.changeLanguage(otherLang);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return {
    handleChangeLang,
    handleHamburgerClick,
    handleNavClick,
    isMobile,
    isNavBackground,
    isOpen,
    nav,
    otherLang,
    t,
  };
};

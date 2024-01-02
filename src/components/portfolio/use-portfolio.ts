import { useState } from "react";

import { useTranslation } from "react-i18next";

import { portfolio } from "./portfolio-data";

export const usePortfolio = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const handleNext = () =>
    setActive(active === portfolio.length - 1 ? 0 : active + 1);
  const handlePrev = () =>
    setActive(active === 0 ? portfolio.length - 1 : active - 1);

  return {
    active,
    handleNext,
    handlePrev,
    setActive,
    t,
  };
};

import { DragEvent, TouchEvent, useState } from "react";

import { useTranslation } from "react-i18next";

import { portfolio } from "./portfolio-data";

const touchOffset = 50;
const dragOffset = 150;

export const usePortfolio = () => {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const { t } = useTranslation();

  const handleNext = () =>
    setActive(active === portfolio.length - 1 ? 0 : active + 1);

  const handlePrev = () =>
    setActive(active === 0 ? portfolio.length - 1 : active - 1);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > touchOffset) {
      handleNext();
    }

    if (touchStart - touchEnd < -touchOffset) {
      handlePrev();
    }
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) =>
    setDragStart(e.clientX);

  const handleDragMove = (e: DragEvent<HTMLDivElement>) =>
    setDragEnd(e.clientX);

  const handleDragEnd = () => {
    if (dragStart - dragEnd > dragOffset) {
      handleNext();
    }

    if (dragStart - dragEnd < -dragOffset) {
      handlePrev();
    }
  };

  return {
    active,
    handleDragEnd,
    handleDragMove,
    handleDragStart,
    handleNext,
    handlePrev,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    setActive,
    t,
  };
};

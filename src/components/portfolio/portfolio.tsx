import React from "react";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { Box, Container, Link, Typography } from "@mui/material";

import { SectionHeader } from "components/common/section-header";
import { IMAGES_PATH } from "shared/consts";
import { COLORS } from "theme/colors";

import { portfolio } from "./portfolio-data";
import {
  Arrow,
  PortfolioContainer,
  PortfolioDot,
  PortfolioDots,
  PortfolioImage,
  PortfolioImageWrapper,
  PortfolioInfo,
  PortfolioItem,
} from "./portfolio.styled";
import { usePortfolio } from "./use-portfolio";

export const Portfolio = () => {
  const { active,
    handleDragEnd,
    handleDragMove,
    handleDragStart,
    handleNext,
    handlePrev,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    setActive,
    t } = usePortfolio();

  return (
    <Box id="portfolio">
      <Container>
        <SectionHeader color={COLORS.semiDark} title={t("portfolioTitle")} />
        <PortfolioContainer>
          {portfolio.map(({ name, image, linkName, link }, index) => (
            <PortfolioItem key={name} $active={active === index}
              onDrag={handleDragMove}
              onDragEnd={handleDragEnd}
              onDragStart={handleDragStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
            >
              <PortfolioImageWrapper data-aos="fade-up">
                <PortfolioImage src={`${IMAGES_PATH}/${image}`} />
              </PortfolioImageWrapper>
              {active === index && (
                <PortfolioInfo>
                  <Typography
                    data-aos="fade-left"
                    style={{ fontWeight: 900 }}
                    variant="h4"
                  >
                    {name}
                  </Typography>
                  <Link
                    data-aos="fade-left"
                    href={link}
                    target="_blank"
                    variant="body1"
                  >
                    {linkName}
                  </Link>
                </PortfolioInfo>
              )}
            </PortfolioItem>
          ))}
          <Arrow $type="prev" data-aos="fade-in" onClick={handlePrev}>
            <FaChevronCircleLeft />
          </Arrow>
          <Arrow $type="next" data-aos="fade-in" onClick={handleNext}>
            <FaChevronCircleRight />
          </Arrow>
        </PortfolioContainer>
        <Box mt={4}>
          <PortfolioDots data-aos="fade-in">
            {portfolio.map(({ name }, index) => (
              <PortfolioDot
                key={name}
                $active={active === index}
                onClick={() => setActive(index)}
              />
            )
            )}
          </PortfolioDots>
        </Box>
      </Container>
    </Box>
  );
};

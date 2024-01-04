import styled from "styled-components";

import { IconButton } from "@mui/material";

import { MOBILE } from "shared/consts";
import { COLORS } from "theme/colors";


export const PortfolioContainer = styled.div`
  align-items: center;
  display: flex;
  height: 600px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media ${MOBILE} {
    height: 400px;
  }
`;

export const PortfolioImageWrapper = styled.div`
  max-width: calc(100% - 300px);

  @media ${MOBILE} {
    max-width: 100%;
  }
`;

export const PortfolioImage = styled.img`
  max-width: 100%;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.03);
  }
`;

export const PortfolioDots = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PortfolioDot = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? COLORS.accent : COLORS.light)};
  border: none;
  border-radius: 50%;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  height: 16px;
  margin: 0 16px;
  padding: 0;
  width: 16px;
`;

export const Arrow = styled(IconButton) <{ $type: "next" | "prev" }>`
  left: ${({ $type }) => ($type === "next" ? "auto" : 0)};
  right: ${({ $type }) => ($type === "next" ? 0 : "auto")};
  top: 50%;

  @media ${MOBILE} {
    display: none !important;
  }
`;

export const PortfolioItem = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${({ $active }) => ($active ? 0 : "-9")};

  @media ${MOBILE} {
    flex-direction: column;
  }
`;

export const PortfolioInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 80px;
  min-width: 300px;
  padding-top: 32px;
  width: 300px;

  @media ${MOBILE} {
    align-items: center;
    text-align: center;
    margin-top: 0;
    width: 100%;
  }
`;

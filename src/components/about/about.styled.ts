import styled from "styled-components";

import { Avatar, Box } from "@mui/material";

import { MOBILE } from "shared/consts";
import { COLORS } from "theme/colors";

export const AvatarStyled = styled(Avatar)`
  background-color: rgba(27, 185, 153, 0.85);
  /* border: 4px solid ${COLORS.accent}; */

  && {
    height: 300px;
    width: 300px;
    overflow: visible;
  }

  img {
    transition: transform 0.2s ease-in;
    filter: grayscale(1);
    transform: scale(1.1) translateX(25px) translateY(25px);
  }

  &:hover img {
    transform: scale(1.2) translateX(25px) translateY(25px);
  }

  @media ${MOBILE} {
    margin: 0 auto 32px;

    && {
      height: 220px;
      width: 220px;
    }
  }
`;

export const ButtonWrapper = styled(Box)`
  @media ${MOBILE} {
    display: flex;
    justify-content: center;
  }
`;

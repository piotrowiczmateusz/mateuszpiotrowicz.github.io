import styled from "styled-components";

import { Avatar, Box } from "@mui/material";

import { MOBILE } from "shared/consts";
import { COLORS } from "theme/colors";

export const AvatarStyled = styled(Avatar)`
  border: 4px solid ${COLORS.accent};

  && {
    height: 300px;
    width: 300px;
  }

  img {
    transition: transform 0.2s ease-in;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media ${MOBILE} {
    margin: 0 auto 32px;
  }
`;

export const ButtonWrapper = styled(Box)`
  @media ${MOBILE} {
    display: flex;
    justify-content: center;
  }
`;

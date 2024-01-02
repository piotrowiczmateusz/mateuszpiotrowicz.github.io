import styled from "styled-components";

import { Box } from "@mui/material";

import { MOBILE } from "shared/consts";

export const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;

  @media ${MOBILE} {
    display: flex;
    justify-content: center;
  }
`;

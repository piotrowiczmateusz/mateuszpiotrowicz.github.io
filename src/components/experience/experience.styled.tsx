import styled from "styled-components";

import { ZLAYERS } from "shared/consts";
import { COLORS } from "theme/colors";

export const HeaderWrapper = styled.div<{ isNavBackground: boolean }>`
  background-color: ${({ isNavBackground }) =>
    isNavBackground ? COLORS.dark : "transparent"};
  height: 70px;
  position: fixed;
  top: 0;
  transition: background-color 0.2s ease-in;
  width: 100%;
  z-index: ${ZLAYERS.header};
`;

import styled from "styled-components";

import { MOBILE } from "shared/consts";
import { COLORS } from "theme/colors";

export const SectionHeaderH2 = styled.h2`
  font-size: 48px;
  font-weight: 900;
  margin: 100px 0 60px;
  position: relative;
  text-align: left;
  width: 100%;

  @media ${MOBILE} {
    font-size: 36px;
  }
`;

export const SectionHeaderText = styled.span`
  display: inline-block;
`;

export const SectionHeaderSeparator = styled.span`
  background: ${COLORS.accent};
  display: inline-block;
  height: 4px;
  left: 0;
  margin-bottom: 15px;
  position: absolute;
  top: 70px;
  width: 70px;

  @media ${MOBILE} {
    bottom: -30px;
    top: auto;
  }
`;

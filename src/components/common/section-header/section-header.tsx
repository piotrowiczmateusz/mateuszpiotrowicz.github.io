import React from "react";

import {
  SectionHeaderH2,
  SectionHeaderSeparator,
  SectionHeaderText,
} from "./section-header.styled";

interface Props {
  title: string;
  color: string;
}

export const SectionHeader = ({ title, color }: Props) => (
  <SectionHeaderH2>
    <SectionHeaderText color={color} data-aos="fade-in">
      {title}
    </SectionHeaderText>
    <SectionHeaderSeparator
      data-aos="zoom-in"
      data-aos-delay="150"
      data-aos-duration="400"
    />
  </SectionHeaderH2>
);

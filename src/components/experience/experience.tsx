import React from "react";

import { useTranslation } from "react-i18next";

import { Box, Chip, Container, Typography } from "@mui/material";

import { SectionHeader } from "components/common/section-header";
import { COLORS } from "theme/colors";

import { useExperience } from "./use-experience";

export const Experience = () => {
  const { t } = useTranslation();
  const { experience } = useExperience();

  return (
    <Box id="experience">
      <Container>
        <SectionHeader color={COLORS.semiDark} title={t("experienceTitle")} />
        {experience.map(({ period, name, description, tech }) => (
          <Box key={name} data-aos="fade-in" mb={8} >
            <Typography variant="h6">{period}</Typography>
            <Typography fontWeight="bold" variant="h4">
              {name}
            </Typography>
            <Box mt={2} sx={{ maxWidth: "900px!important" }}>
              <Typography variant="body1">{description}</Typography>
            </Box>
            <Box alignItems="center" display="flex" flexWrap="wrap" mt={2}>
              {tech.map((item) => (
                <Box key={item} mr={1} mt={1}>
                  <Chip label={item} variant="outlined" />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

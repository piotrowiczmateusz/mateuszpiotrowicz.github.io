import React from "react";

import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { SectionHeader } from "components/common/section-header";
import { FILES_PATH, IMAGES_PATH } from "shared/consts";
import { COLORS } from "theme/colors";

import { AvatarStyled, ButtonWrapper } from "./about.styled";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Box alignItems="center" display="flex" id="about" justifyContent="center">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SectionHeader color={COLORS.semiDark} title={t("aboutTitle")} />
          </Grid>
          <Grid item md={4} xs={12}>
            <AvatarStyled
              alt={t("aboutPhoto")}
              data-aos="fade-in"
              data-aos-delay="300"
              src={`${IMAGES_PATH}/avatar.jpeg`}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography data-aos="fade-up" data-aos-delay="300" variant="body2">
              {t("aboutDescription")}
            </Typography>
            <ButtonWrapper data-aos="fade-in" data-aos-delay="300" mt={6}>
              <Button
                onClick={() => window.open(`${FILES_PATH}/Mateusz_Piotrowicz_resume.pdf`)}
                startIcon={<FaDownload />}
                variant="contained"
              >
                {t("aboutDownload")}
              </Button>
            </ButtonWrapper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

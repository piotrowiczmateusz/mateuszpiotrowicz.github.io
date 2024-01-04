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
import { useIsMobile } from "shared/hooks";
import { COLORS } from "theme/colors";

import { AvatarStyled, ButtonWrapper } from "./about.styled";

export const About = () => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobile();

  return (
    <Box alignItems="center" display="flex" id="about" justifyContent="center">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Box mt={isMobile ? 12 : 24}>
              <AvatarStyled
                alt={t("aboutPhoto")}
                data-aos="fade-in"
                data-aos-delay="300"
                src={`${IMAGES_PATH}/avatar-transparent.png`}
              />
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box mt={isMobile ? -6 : 0}>
              <SectionHeader color={COLORS.semiDark} title={t("aboutTitle")} />
              <Typography data-aos="fade-up" data-aos-delay="300" paragraph={true} variant="body2" >
                {t("aboutDescription")}
              </Typography>
              <Typography data-aos="fade-up" data-aos-delay="400" paragraph={true} variant="body2" >
                {t("aboutDescription2")}
              </Typography>
              <Typography data-aos="fade-up" data-aos-delay="500" paragraph={true} variant="body2" >
                {t("aboutDescription3")}
              </Typography>
              <ButtonWrapper data-aos="fade-in" data-aos-delay="300" mt={4}>
                <Button
                  onClick={() => window.open(`${FILES_PATH}/Mateusz_Piotrowicz_resume.pdf`)}
                  startIcon={<FaDownload />}
                  variant="contained"
                >
                  {t("aboutDownload")}
                </Button>
              </ButtonWrapper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

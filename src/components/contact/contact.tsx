import React from "react";

import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone } from "react-icons/fa";


import { Box, Container, Grid, Typography } from "@mui/material";

import { SectionHeader } from "components/common/section-header";
import { COLORS } from "theme/colors";

import { ContactForm } from "./contact-form";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box id="contact">
      <Container>
        <SectionHeader color={COLORS.semiDark} title={t("contactTitle")} />
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Box px={0} py={2}>
              <Box mb={2}>
                <Typography data-aos="fade-in" variant="body2">
                  {t("contactText")}
                </Typography>
              </Box>
              <Typography data-aos="fade-in" fontWeight="bold" variant="body2">
                {t("contactName")}
              </Typography>
              <Box
                alignItems="center"
                data-aos="fade-in"
                display="flex"
                mt={2}
              >
                <Box alignItems="center" display="flex" mr={2}>
                  <FaPhone color={COLORS.accent} />
                </Box>
                <Typography variant="body2">
                  {t("contactPhone")}
                </Typography>
              </Box>
              <Box
                alignItems="center"
                data-aos="fade-in"
                display="flex"
                mt={2}
              >
                <Box alignItems="center" display="flex" mr={2}>
                  <FaEnvelope color={COLORS.accent} />
                </Box>
                <Typography variant="body2">
                  {t("contactMail")}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <Box px={0} py={2}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

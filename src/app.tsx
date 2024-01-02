import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./translations"

import React, { useEffect } from "react";

import AOS from "aos";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@mui/material";

import { About } from "components/about";
import { Blobs } from "components/common/blobs";
import { Contact } from "components/contact";
import { Experience } from "components/experience";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Portfolio } from "components/portfolio";
import { theme } from "theme/theme";

export const App = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Blobs />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

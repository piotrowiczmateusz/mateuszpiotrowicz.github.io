import { useTranslation } from "react-i18next";

export const useExperience = () => {
  const { t } = useTranslation();

  const experience = [
    {
      description: t("experienceMillenniumDesc"),
      name: "Millennium Bank",
      period: `2022 - ${t("experiencePresent")}`,
      tech: [
        "React",
        "Redux",
        "TypeScript",
        "Webpack",
        "Storybook",
        "Less",
        "React testing library",
        "Nx",
        "Webview",
        "Module federation",
        "Jenkins",
      ],
    },
    {
      description: t("experienceScopeDesc"),
      name: "Scope Group",
      period: "2019 - 2022",
      tech: [
        "React",
        "Redux",
        "TypeScript",
        "Webpack",
        "Storybook",
        "Styled components",
        "Design System",
        "Material UI",
        "Micro frontends architecture",
        "Cypress e2e testing",
        "Docker",
        "Jenkins",
      ],
    },
    {
      description: t("experienceHonkiDesc"),
      name: "HONKI Digital Agency",
      period: "2017 - 2018",
      tech: ["JavaScript", "TypeScript", "Css / Sass", "Bootstrap", "PHP"],
    },
    {
      description: t("experienceMangomediaDesc"),
      name: "Mangomedia",
      period: "2015 - 2017",
      tech: ["JavaScript", "Css / Less", "Bootstrap", "PHP", "Wordpress"],
    },
  ];

  return { experience };
};

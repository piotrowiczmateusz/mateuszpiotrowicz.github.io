import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { FORMSPARK_URL } from "shared/consts";

export const useContactForm = () => {
  const { t } = useTranslation();

  const fields = [
    {
      helperText: t("contactRequiredField"),
      label: t("contactNameLabel"),
      name: "name",
      rules: { minLength: 3, required: true },
    },
    {
      helperText: t("contactEmailRequiredField"),
      label: t("contactMailLabel"),
      name: "email",
      rules: {
        minLength: 3,
        pattern: {
          message: t("contactEmailRequiredField"),
          value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
        },
        required: true,
      },
    },
    {
      helperText: t("contactRequiredField"),
      label: t("contactMessageLabel"),
      name: "message",
      rules: { minLength: 3, required: true },
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data: { [key: string]: string }) => {
    try {
      const res = await fetch(FORMSPARK_URL, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        redirect: "manual",
      });
      if (res) {
        toast.success(t("contactSuccess"));
        reset({
          email: "",
          message: "",
          name: "",
        });
      }
    } catch (e) {
      toast.error(t("contactError"));
    }
  };

  return {
    control,
    errors,
    fields,
    handleSubmit,
    onSubmit,
    t,
  };
};

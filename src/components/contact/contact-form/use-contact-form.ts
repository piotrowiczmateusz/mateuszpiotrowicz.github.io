import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { FORMSPREE_URL } from "shared/consts";

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

  const getFormData = (object: { [key: string]: string }) =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
    }, new FormData());

  const onSubmit = async (data: { [key: string]: string }) => {
    try {
      const res = await fetch(FORMSPREE_URL, {
        body: getFormData(data),
        method: "POST",
        mode: "no-cors",
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

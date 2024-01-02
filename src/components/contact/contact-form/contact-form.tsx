import React, { ChangeEventHandler } from "react";

import { Controller } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

import { Box, Button, TextField } from "@mui/material";

import { ButtonWrapper } from "./contact-form.styled";
import { useContactForm } from "./use-contact-form";

interface ControllerProps {
  // eslint-disable-next-line
  field: {
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
  };
}

export const ContactForm = () => {
  const { control, errors, fields, handleSubmit, onSubmit, t } = useContactForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ helperText, label, name, rules }) => (
        <Box mb={2}>
          <Controller
            key={name}
            control={control}
            name={name}
            render={({ field: { onChange, value } }: ControllerProps) => (
              <TextField
                data-aos="fade-in"
                error={!!errors[name]}
                fullWidth
                helperText={errors[name] && helperText}
                label={label}
                onChange={onChange}
                sx={{ "& > .MuiInputBase-root": { alignItems: "flex-start", minHeight: name === "message" ? "250px" : "auto" } }}
                value={value}
                variant="filled"
              />
            )}
            rules={rules}
          />
        </Box>
      ))}
      <ButtonWrapper data-aos="fade-in" mt={6}>
        <Button startIcon={<FaPaperPlane />} type="submit" variant="contained">
          {t("contactSend")}
        </Button>
      </ButtonWrapper>
    </form>
  );
}

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type {
  ContactFormData,
  ContactFormLabels,
  UseContactFormReturn,
} from "@/types/contact";

const EMPTY_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm(
  labels: ContactFormLabels
): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM_DATA);
  const [status, setStatus] = useState<UseContactFormReturn["status"]>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((previous: ContactFormData): ContactFormData => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData(EMPTY_FORM_DATA);
    } catch {
      setStatus("error");
    }

    setTimeout((): void => {
      setStatus("idle");
    }, 5000);
  };

  const statusMessage =
    status === "success"
      ? labels.success
      : status === "error"
        ? labels.error
        : null;

  return { formData, status, statusMessage, handleChange, handleSubmit };
}

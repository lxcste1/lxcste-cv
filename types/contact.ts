import type { ChangeEvent, FormEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormLabels {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  sending: string;
  success: string;
  error: string;
}

export interface ContactFormProps {
  labels: ContactFormLabels;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  status: ContactFormStatus;
  statusMessage: string | null;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export type ContactFormStatus = "idle" | "loading" | "success" | "error";

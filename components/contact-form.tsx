"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormLabels {
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

interface ContactFormProps {
  labels: ContactFormLabels;
}

export function ContactForm({ labels }: Readonly<ContactFormProps>) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            {labels.name}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={labels.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            {labels.email}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={labels.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          {labels.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder={labels.subjectPlaceholder}
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-secondary border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          {labels.message}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={labels.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-400">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="text-sm">{labels.success}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{labels.error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {labels.sending}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {labels.send}
          </>
        )}
      </Button>
    </form>
  );
}

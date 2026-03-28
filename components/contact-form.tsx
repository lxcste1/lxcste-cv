"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language].contact.form;

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
            {t.name}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.namePlaceholder}
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
            {t.email}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.emailPlaceholder}
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
          {t.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder={t.subjectPlaceholder}
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
          {t.message}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={t.messagePlaceholder}
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
          <p className="text-sm">{t.success}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{t.error}</p>
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
            {t.sending}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {t.send}
          </>
        )}
      </Button>
    </form>
  );
}

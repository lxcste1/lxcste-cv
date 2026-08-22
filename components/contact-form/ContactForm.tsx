"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";
import type { ContactFormProps } from "@/types/contact";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import type { JSX } from "react";

export function ContactForm({ labels }: Readonly<ContactFormProps>): JSX.Element {
  const { formData, status, statusMessage, handleChange, handleSubmit } = useContactForm(labels);

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
          <p className="text-sm">{statusMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{statusMessage}</p>
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

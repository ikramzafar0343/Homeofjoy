"use client";

import { useState } from "react";

import FormStatusDialog from "@/components/ui/FormStatusDialog";
import { contactSubjects } from "@/content/contactContent";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "serverError"
  | "validationError";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  subject: contactSubjects[0],
  message: "",
};

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.subject.trim()) {
    errors.subject = "Please choose a subject.";
  }
  if (!fields.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (fields.message.trim().length < 12) {
    errors.message = "Please share a little more detail in your message.";
  }

  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTone, setDialogTone] = useState<"success" | "error" | "info">("info");
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const showDialog = (
    tone: "success" | "error" | "info",
    title: string,
    message: string,
  ) => {
    setDialogTone(tone);
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogOpen(true);
  };

  const onChange = (key: keyof FormFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (status === "validationError") {
      setStatus("idle");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("validationError");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
    if (!endpoint) {
      const message =
        "The contact service is not configured yet. Your message was not sent. Please try again once the foundation publishes a verified contact channel.";
      setStatus("serverError");
      setServerMessage(message);
      showDialog("error", "Message not sent", message);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
        cache: "no-store",
      });

      if (!response.ok) {
        const message =
          "We could not send your message right now. Please try again later.";
        setStatus("serverError");
        setServerMessage(message);
        showDialog("error", "Message not sent", message);
        return;
      }

      setStatus("success");
      setFields(initialFields);
      showDialog(
        "success",
        "Message sent",
        "Thank you. Your message was sent successfully. The foundation will respond through verified channels.",
      );
    } catch {
      const message =
        "We could not reach the contact service. Please try again later.";
      setStatus("serverError");
      setServerMessage(message);
      showDialog("error", "Message not sent", message);
    }
  };

  const fieldClass =
    "w-full rounded-md border border-lightGray bg-white px-4 py-3 text-navy outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-6"
        aria-describedby="contact-form-status"
      >
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-semibold text-navy">
            Name
          </label>
          <input
            id="contactName"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => onChange("name", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contactName-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.name ? (
            <p id="contactName-error" className="mt-2 text-sm text-secondary">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contactEmail" className="mb-2 block text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => onChange("email", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contactEmail-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.email ? (
            <p id="contactEmail-error" className="mt-2 text-sm text-secondary">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contactPhone" className="mb-2 block text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            className={fieldClass}
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="contactSubject" className="mb-2 block text-sm font-semibold text-navy">
            Subject
          </label>
          <select
            id="contactSubject"
            name="subject"
            value={fields.subject}
            onChange={(event) => onChange("subject", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.subject)}
            disabled={status === "submitting"}
          >
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject ? (
            <p className="mt-2 text-sm text-secondary">{errors.subject}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contactMessage" className="mb-2 block text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={6}
            value={fields.message}
            onChange={(event) => onChange("message", event.target.value)}
            className={`${fieldClass} resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contactMessage-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.message ? (
            <p id="contactMessage-error" className="mt-2 text-sm text-secondary">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div id="contact-form-status" aria-live="polite">
          {status === "validationError" ? (
            <p className="text-sm text-secondary">
              Please review the highlighted fields and try again.
            </p>
          ) : null}
          {status === "serverError" ? (
            <p className="text-sm text-secondary">{serverMessage}</p>
          ) : null}
          {status === "success" ? (
            <p className="text-sm text-primary">
              Thank you. Your message was sent successfully.
            </p>
          ) : null}
          {status === "submitting" ? (
            <p className="text-sm text-bodyGray">Sending your message…</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>

      <FormStatusDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogTitle}
        message={dialogMessage}
        tone={dialogTone}
        lockOwner="contactFormDialog"
      />
    </>
  );
}

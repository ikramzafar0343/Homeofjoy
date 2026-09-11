"use client";

import { useState } from "react";

import FormStatusDialog from "@/components/ui/FormStatusDialog";

import styles from "./SiteFooter.module.css";

export default function FooterSubscribeForm() {
  const [email, setEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTone, setDialogTone] = useState<"success" | "error" | "info">("info");
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setDialogTone("error");
      setDialogTitle("Check your email");
      setDialogMessage("Please enter a valid email address to continue.");
      setDialogOpen(true);
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT?.trim();
    if (!endpoint) {
      setDialogTone("info");
      setDialogTitle("Subscription not connected yet");
      setDialogMessage(
        "Newsletter signup is not configured on this site yet. Your email was not stored. When a verified channel is published, this form will send through it.",
      );
      setDialogOpen(true);
      return;
    }

    void (async () => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: value }),
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("subscribe-failed");
        }
        setEmail("");
        setDialogTone("success");
        setDialogTitle("Subscribed");
        setDialogMessage("Thank you. You are on the list for foundation updates.");
        setDialogOpen(true);
      } catch {
        setDialogTone("error");
        setDialogTitle("Could not subscribe");
        setDialogMessage("We could not complete signup right now. Please try again later.");
        setDialogOpen(true);
      }
    })();
  };

  return (
    <>
      <form className="flex gap-2" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email"
          className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-primary focus:outline-none"
          aria-label="Email address"
          autoComplete="email"
        />
        <button type="submit" className={styles.footerCta}>
          Subscribe
        </button>
      </form>

      <FormStatusDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogTitle}
        message={dialogMessage}
        tone={dialogTone}
        lockOwner="newsletterDialog"
      />
    </>
  );
}

"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

import Modal from "@/components/ui/Modal";
import { organizationContent } from "@/content/organizationContent";

import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "hojCookieConsent";

type ConsentValue = "accepted" | "necessary";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "necessary") {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* Ignore storage failures; dialog can still dismiss for this session. */
    }
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => save("necessary")}
      titleId={titleId}
      lockOwner="cookieConsent"
      variant="dialog"
      closeLabel="Continue with necessary cookies only"
    >
      <div className={styles.body}>
        <p className={styles.eyebrow}>Cookies</p>
        <h2 id={titleId} className={styles.title}>
          Your privacy on this site
        </h2>
        <p className={styles.copy}>
          {organizationContent.shortName} uses necessary cookies to keep the site
          working. We do not run advertising trackers. Preference is stored on your
          device so we do not ask every visit. See our{" "}
          <Link href="/privacy" className={styles.link} onClick={() => save("necessary")}>
            Privacy
          </Link>{" "}
          page for more.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => save("accepted")}
          >
            Accept
          </button>
          <button
            type="button"
            className={styles.secondary}
            onClick={() => save("necessary")}
          >
            Necessary only
          </button>
        </div>
      </div>
    </Modal>
  );
}

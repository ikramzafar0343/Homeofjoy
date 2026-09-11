"use client";

import { useEffect, useId, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { syncBodyScrollLock } from "@/lib/scrollLock";

import styles from "./Modal.module.css";

export type ModalVariant = "drawer" | "dialog" | "lightbox";

export type ModalProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly titleId: string;
  readonly lockOwner: string;
  readonly children: React.ReactNode;
  readonly variant?: ModalVariant;
  readonly closeLabel?: string;
  readonly className?: string;
};

function subscribeNowhere() {
  return () => undefined;
}

export default function Modal({
  open,
  onClose,
  titleId,
  lockOwner,
  children,
  variant = "dialog",
  closeLabel = "Close",
  className = "",
}: ModalProps) {
  const mounted = useSyncExternalStore(subscribeNowhere, () => true, () => false);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const reactId = useId();
  const owner = `${lockOwner}-${reactId}`;

  useEffect(() => syncBodyScrollLock(owner, open), [open, owner]);

  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocused.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);

    const focusTimer = window.requestAnimationFrame(() => {
      const closeBtn = panelRef.current?.querySelector<HTMLElement>(
        "[data-modal-close]",
      );
      closeBtn?.focus();
    });

    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(focusTimer);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  // Keep SSR and the first client paint identical (null) to avoid hydration mismatch.
  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={`${styles.root} ${className}`.trim()}
      data-open={open ? "true" : "false"}
      data-variant={variant}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close dialog"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          data-modal-close
          className={styles.close}
          onClick={onClose}
          aria-label={closeLabel}
          tabIndex={open ? 0 : -1}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2 2l8 8M10 2 2 10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

"use client";

import { useId } from "react";

import Modal from "@/components/ui/Modal";

import styles from "./FormStatusDialog.module.css";

export type FormStatusDialogProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly message: string;
  readonly tone?: "success" | "info" | "error";
  readonly lockOwner?: string;
};

export default function FormStatusDialog({
  open,
  onClose,
  title,
  message,
  tone = "info",
  lockOwner = "formStatusDialog",
}: FormStatusDialogProps) {
  const titleId = useId();

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId={titleId}
      lockOwner={lockOwner}
      variant="dialog"
      closeLabel="Close"
    >
      <div className={styles.body} data-tone={tone}>
        <p className={styles.eyebrow}>
          {tone === "success" ? "Success" : tone === "error" ? "Notice" : "Update"}
        </p>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        <p className={styles.message}>{message}</p>
        <button type="button" className={styles.action} onClick={onClose}>
          Continue
        </button>
      </div>
    </Modal>
  );
}

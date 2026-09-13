"use client";

import { useState } from "react";

import design from "@/components/design/designShared.module.css";
import { bankAccount } from "@/content/donateContent";

import styles from "./BankTransferDetails.module.css";

const fields = [
  { label: "Account title", value: bankAccount.accountTitle },
  {
    label: "IBAN",
    value: bankAccount.iban,
    display: bankAccount.iban.replace(/(.{4})/g, "$1 ").trim(),
  },
  { label: "SWIFT code", value: bankAccount.swiftCode },
  { label: "Bank", value: bankAccount.bankName },
] as const;


export default function BankTransferDetails() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(label);
      window.setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <div className={styles.panel}>
      <ul className={styles.list}>
        {fields.map((field) => (
          <li key={field.label} className={styles.row}>
            <div className={styles.copyCol}>
              <p className={`${design.eyebrow} ${styles.label}`}>{field.label}</p>
              <p className={styles.value}>
                {"display" in field ? field.display : field.value}
              </p>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={() => void copyValue(field.label, field.value)}
            >
              {copiedKey === field.label ? "Copied" : "Copy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Button variant="outline" onClick={copy} aria-live="polite">
      {copied ? <Check aria-hidden strokeWidth={1.75} /> : <Copy aria-hidden strokeWidth={1.75} />}
      {copied ? "Copiado" : "Copiar correo"}
    </Button>
  );
}

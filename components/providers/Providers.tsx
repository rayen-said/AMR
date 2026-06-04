"use client";

import { defaultTimeZone } from "@/i18n/config";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export default function Providers({
  children,
  locale,
  messages,
}: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={defaultTimeZone}
      >
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

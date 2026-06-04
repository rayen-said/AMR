"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToSection } from "@/lib/scroll";
import { Cpu, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const NAV_IDS = [
  "solutions",
  "competitive-edge",
  "quote-calculator",
  "about",
] as const;

const NAV_KEYS = [
  "solutions",
  "competitiveEdge",
  "interactiveEstimate",
  "aboutUs",
] as const;

export default function Navbar() {
  const t = useTranslations("navbar");
  const tCommon = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/70">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8"
        aria-label={t("ariaLabel")}
      >
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 transition-colors group-hover:border-emerald-400/50 group-hover:bg-emerald-500/15 dark:text-emerald-400">
            <Cpu className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            AMR{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {tCommon("brandShort")}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_IDS.map((id, i) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNav(id)}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400"
              >
                {t(NAV_KEYS[i])}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => handleNav("waitlist")}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:shadow-emerald-800/30 dark:shadow-emerald-900/30"
          >
            {t("joinWaitlist")}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? tCommon("closeMenu") : tCommon("openMenu")}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white/95 px-4 py-4 dark:border-neutral-800/60 dark:bg-neutral-950/95 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_IDS.map((id, i) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNav(id)}
                  className="w-full rounded-lg px-3 py-2 text-start text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-teal-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-teal-400"
                >
                  {t(NAV_KEYS[i])}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => handleNav("waitlist")}
                className="mt-2 w-full rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                {t("joinWaitlist")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

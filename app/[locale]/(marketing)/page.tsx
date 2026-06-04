import Hero from "@/components/Hero";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function MarketingHomePage({ params }: Props) {
  const { locale } = await params;

  if (routing.locales.includes(locale as Locale)) {
    setRequestLocale(locale);
  }

  return (
    <>
      <Hero />
    </>
  );
}

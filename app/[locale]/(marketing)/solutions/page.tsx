import PlatformArchitecture from "@/components/SolutionOverview";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;

  if (routing.locales.includes(locale as Locale)) {
    setRequestLocale(locale);
  }

  return (
    <div className="pt-20 min-h-screen">
      <PlatformArchitecture />
    </div>
  );
}

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex h-screen bg-white dark:bg-[#050816] overflow-hidden">
      <Sidebar locale={locale} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#050816] relative">
          <div className="absolute inset-0 animated-grid pointer-events-none opacity-50 dark:opacity-20 z-0"></div>
          <div className="relative z-10 p-6 sm:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

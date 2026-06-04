"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Map, 
  Droplet, 
  Activity, 
  Sprout, 
  Wrench, 
  Radio, 
  Settings,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Digital Twin", icon: Map, href: "/dashboard/digital-twin" },
  { name: "Irrigation Control", icon: Droplet, href: "/dashboard/irrigation" },
  { name: "Telemetry Center", icon: Activity, href: "/dashboard/telemetry" },
  { name: "AI Crop Advisor", icon: Sprout, href: "/dashboard/ai-advisor" },
  { name: "Predictive Maintenance", icon: Wrench, href: "/dashboard/maintenance" },
  { name: "Infrastructure", icon: Radio, href: "/dashboard/infrastructure" },
  { name: "Administration", icon: Settings, href: "/dashboard/admin" },
];

export default function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={`h-screen border-r border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#0a0f1d] transition-all duration-300 flex flex-col relative ${collapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Header */}
      <div className="flex h-16 items-center px-4 border-b border-slate-200 dark:border-white/10 shrink-0">
        <div className={`flex items-center gap-2 overflow-hidden transition-all ${collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
          <div className="h-8 w-8 rounded bg-linear-to-br from-green-500 to-lime-500 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg leading-none">A</span>
          </div>
          <span className="font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            AMR Solutions
          </span>
        </div>
        
        {collapsed && (
          <div className="h-8 w-8 rounded bg-linear-to-br from-green-500 to-lime-500 flex items-center justify-center mx-auto shrink-0">
            <span className="text-white font-bold text-lg leading-none">A</span>
          </div>
        )}
      </div>

      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900 dark:border-white/10 dark:bg-[#0f172a] dark:text-slate-400 dark:hover:text-white z-10"
      >
        <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
      </button>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const localizedHref = `/${locale}${item.href}`;
          const isActive = pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={localizedHref}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                  : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              }`}
            >
              <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-green-600 dark:text-green-400" : ""}`} />
              <span className={`whitespace-nowrap transition-all duration-300 ${collapsed ? 'w-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className={`p-4 border-t border-slate-200 dark:border-white/10 shrink-0 transition-all ${collapsed ? 'h-0 overflow-hidden p-0 border-0' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold">JD</span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">John Doe</p>
            <p className="text-xs text-slate-500 truncate">Farm Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

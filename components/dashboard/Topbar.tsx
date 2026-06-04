"use client";

import GreenhouseLiveIndicator from "@/components/dashboard/GreenhouseLiveIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell, Menu, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between dark:border-white/10 dark:bg-[#0f172a]/80 sticky top-0 z-40">
      
      {/* Search Bar */}
      <div className="flex-1 flex items-center max-w-md relative">
        <Search className="h-4 w-4 text-slate-400 absolute left-3" />
        <input 
          type="text" 
          placeholder="Search metrics, parcels, or devices..." 
          className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-green-500/50 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder-slate-500 outline-none transition-all"
        />
        <div className="absolute right-3 hidden sm:flex items-center gap-1">
          <kbd className="font-sans text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-600">⌘</kbd>
          <kbd className="font-sans text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-600">K</kbd>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-4">
        <GreenhouseLiveIndicator />

        <div className="flex items-center gap-2 border-r border-slate-200 pr-4 dark:border-white/10">
          <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-[#0f172a]"></span>
          </button>
          <ThemeToggle />
        </div>

        <button className="md:hidden p-2 text-slate-500">
          <Menu className="h-5 w-5" />
        </button>

      </div>
    </header>
  );
}

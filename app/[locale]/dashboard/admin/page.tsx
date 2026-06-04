"use client";

import { Shield, Users } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Administration</h1>
        <p className="text-sm text-slate-500 mt-1">Manage users, permissions, and security settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="glass-panel p-6 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"><Users className="h-5 w-5" /></div>
               <h3 className="font-semibold text-slate-900 dark:text-white">User Management</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">3 Active Users in Farm Alpha.</p>
            <button className="mt-auto px-4 py-2 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 self-start">Manage Users</button>
         </div>

         <div className="glass-panel p-6 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"><Shield className="h-5 w-5" /></div>
               <h3 className="font-semibold text-slate-900 dark:text-white">Audit Logs</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">View complete system interaction history.</p>
            <button className="mt-auto px-4 py-2 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 self-start">View Logs</button>
         </div>
      </div>
    </div>
  );
}

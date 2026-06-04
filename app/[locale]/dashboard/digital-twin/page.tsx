"use client";

import { Activity, Radio, Droplet, Box, Maximize2 } from "lucide-react";

export default function DigitalTwinPage() {
  return (
    <div className="h-full flex flex-col fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Digital Twin</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time 3D spatial visualization of Farm Alpha.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 glass-panel rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden relative flex flex-col">
        {/* Toolbar overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 rounded-lg p-1 shadow-lg flex flex-col gap-1">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300" title="Sensors Layer"><Activity className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10" title="Irrigation Network Layer"><Droplet className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300" title="Infrastructure Layer"><Radio className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300" title="Topography"><Box className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20">
           <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 rounded-lg p-4 shadow-lg w-64">
             <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-white/10 pb-2">Active Node 04</h3>
             <div className="space-y-2 text-sm">
               <div className="flex justify-between"><span className="text-slate-500">Moisture</span><span className="font-mono font-medium text-green-600 dark:text-green-400">42%</span></div>
               <div className="flex justify-between"><span className="text-slate-500">Salinity</span><span className="font-mono font-medium text-slate-900 dark:text-white">1.2 dS/m</span></div>
               <div className="flex justify-between"><span className="text-slate-500">Battery</span><span className="font-mono font-medium text-slate-900 dark:text-white">88%</span></div>
               <div className="flex justify-between"><span className="text-slate-500">Status</span><span className="font-medium text-green-600 dark:text-green-400 flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span> Syncing</span></div>
             </div>
           </div>
        </div>

        {/* 3D Visualization Area (Simulated using CSS) */}
        <div className="flex-1 bg-slate-100 dark:bg-[#060a14] relative flex items-center justify-center perspective-[1000px]">
          
          <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
              backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
          }}></div>

          {/* Simulated Isometric Grid */}
          <div className="relative w-full max-w-4xl h-[600px] transform rotate-x-60 rotate-z-45 scale-[0.8] transform-style-preserve-3d transition-transform duration-1000">
             
             {/* The Parcel Base */}
             <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500/30 rounded-3xl shadow-[0_20px_50px_rgba(34,197,94,0.1)]"></div>
             
             {/* Irrigation Lines */}
             <div className="absolute top-1/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
             <div className="absolute top-2/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
             <div className="absolute top-3/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
             
             {/* Main Pipe */}
             <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-blue-600/60 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>

             {/* Nodes/Valves in 3D Space */}
             <div className="absolute top-1/4 left-1/4 w-8 h-8 -mt-4 -ml-4 rounded-full bg-green-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(34,197,94,0.8)] flex items-center justify-center z-10 cursor-pointer animate-pulse border-2 border-white"></div>
             <div className="absolute top-2/4 left-1/2 w-10 h-10 -mt-5 -ml-5 rounded-full bg-blue-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center z-10 cursor-pointer border-2 border-white">
                <Droplet className="h-4 w-4 text-white" />
             </div>
             <div className="absolute top-3/4 right-1/4 w-8 h-8 -mt-4 -ml-4 rounded-full bg-lime-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(132,204,22,0.8)] flex items-center justify-center z-10 cursor-pointer border-2 border-white"></div>

          </div>
        </div>
      </div>
    </div>
  );
}

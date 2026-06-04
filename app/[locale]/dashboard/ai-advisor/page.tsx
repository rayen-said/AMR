"use client";

import { Sprout, Send, Bot, User } from "lucide-react";
import { useState } from "react";

export default function AIAdvisorPage() {
  const [messages] = useState([
    { role: 'assistant', content: "Hello! I am your AMR AI Agronomist. I've analyzed the latest telemetry from Farm Alpha. Soil moisture in Zone 2 is dropping faster than expected due to high wind speeds. Would you like me to adjust the evening irrigation schedule?" },
    { role: 'user', content: "Yes, increase duration by 15 minutes." },
    { role: 'assistant', content: "Done. I've updated the 'Night Cycle' automation rule for Zone 2 to run for 60 minutes. I estimate this will require an additional 450 Liters of water, which is well within your current reservoir capacity (88%)." }
  ]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-6rem)]">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">AI Crop Advisor</h1>
          <p className="text-sm text-slate-500">Generative agronomy and platform assistance.</p>
        </div>
      </div>

      <div className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden">
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'assistant' ? 'bg-linear-to-br from-green-500 to-lime-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                {msg.role === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                  : 'bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 shadow-sm'
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                {msg.role === 'assistant' && (
                  <div className="mt-4 flex gap-2">
                    <button className="h-6 w-6 rounded flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:text-green-500 transition-colors">
                      <ThumbsUp className="h-3 w-3" />
                    </button>
                    <button className="h-6 w-6 rounded flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:text-red-500 transition-colors">
                      <ThumbsDown className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="flex gap-4 max-w-[85%]">
             <div className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center bg-linear-to-br from-green-500 to-lime-500 text-white">
                <Bot className="h-5 w-5" />
             </div>
             <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-200 rounded-tl-none shadow-sm flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-bounce"></span>
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </span>
             </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/10">
          <div className="relative flex items-center">
            <button className="absolute left-3 p-2 text-slate-400 hover:text-green-500 transition-colors">
              <Sprout className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              placeholder="Ask about crop health, schedules, or analytics..." 
              className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-xl pl-12 pr-12 py-4 text-sm focus:ring-2 focus:ring-green-500/50 outline-none transition-all dark:text-white"
            />
            <button className="absolute right-3 p-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors shadow-sm shadow-green-600/20">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            <button className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">Analyze week 3 yields</button>
            <button className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">Suggest fertilizer mix</button>
            <button className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">Weather forecast impact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

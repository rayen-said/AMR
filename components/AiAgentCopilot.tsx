"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiAssistantPrompts } from "@/data/farm";
import { MessageSquare, Sparkles, AlertCircle, Play, CheckCircle, RefreshCw } from "lucide-react";

interface DiagnosticCase {
  id: string;
  cropName: string;
  symptom: string;
  imagePlaceholder: string;
  diagnosis: string;
  action: string;
}

export default function AiAgentCopilot() {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Welcome to the AMR Solutions Copilot demo. Click any question below, or select a crop image on the right to see a simulated pathogen diagnosis." }
  ]);
  const [typing, setTyping] = useState(false);
  const [activeDiagnosticId, setActiveDiagnosticId] = useState<string | null>(null);
  const [diagnosticRunning, setDiagnosticRunning] = useState(false);

  const diagnostics: DiagnosticCase[] = [
    {
      id: "diag-1",
      cropName: "Organic Soybeans",
      symptom: "Brown spots on outer leaves",
      imagePlaceholder: "Leaf Spot Pattern",
      diagnosis: "Cercospora Leaf Blight (Fungal Pathogen)",
      action: "Isolate Section 2. Apply organic copper-based fungicide. Reduce humidity ceiling in greenhouse zone 4."
    },
    {
      id: "diag-2",
      cropName: "Honeycrisp Apples",
      symptom: "Powdery white residue on stems",
      imagePlaceholder: "Powdery Residue",
      diagnosis: "Powdery Mildew infestation",
      action: "Optimize branch pruning to increase airflow. Run localized sulfur spray protocol."
    }
  ];

  const handlePromptClick = (question: string, answer: string) => {
    if (typing) return;

    // Append user message
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setTyping(true);

    // Simulated typing response delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: answer }]);
      setTyping(false);
    }, 1500);
  };

  const handleRunDiagnostic = (caseItem: DiagnosticCase) => {
    if (diagnosticRunning) return;
    setActiveDiagnosticId(caseItem.id);
    setDiagnosticRunning(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: `Run diagnostic scan for: ${caseItem.cropName} (${caseItem.symptom})` },
        { sender: "ai", text: `[Demo Scan Complete] Identified: ${caseItem.diagnosis}. Recommended Action: ${caseItem.action}` }
      ]);
      setDiagnosticRunning(false);
    }, 2000);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Interactive Chat Panel */}
      <div className="lg:col-span-7 flex flex-col justify-between hairline-border bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden min-h-[400px] sm:min-h-[480px]">
        {/* Chat Header */}
        <div className="bg-sub-surface px-4 sm:px-6 py-3 sm:py-4 border-b border-outline-variant/30 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary animate-pulse shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-on-surface">AMR Solutions AI Assistant</h4>
              <span className="text-[10px] text-primary font-semibold tracking-wider block">CO-PILOT AGENT ACTIVE</span>
            </div>
          </div>
              <span className="text-[10px] text-text-secondary bg-background px-2 py-1 rounded hairline-border font-bold self-start sm:self-auto">
                Demo Mode
              </span>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[300px] bg-background-grid bg-grid-pattern">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-background"
                      : "bg-sub-surface text-on-surface border border-outline-variant/30"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <div className="flex justify-start">
              <div className="bg-sub-surface text-on-surface border border-outline-variant/30 rounded px-4 py-3 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Smart Prompts Inputs */}
        <div className="p-6 bg-sub-surface border-t border-outline-variant/30">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-3">
            Ask Copilot
          </span>
          <div className="flex flex-col gap-2">
            {aiAssistantPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handlePromptClick(p.question, p.answer)}
                disabled={typing}
                className="text-left text-xs bg-background text-on-surface border border-outline-variant/50 hover:border-primary/50 hover:bg-background/80 transition-all p-3 rounded flex items-center justify-between group disabled:opacity-50"
              >
                <span className="font-semibold text-text-secondary group-hover:text-on-surface transition-colors">
                  {p.question}
                </span>
                <MessageSquare className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disease Diagnosis Panel */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        <div className="hairline-border bg-surface-container-lowest p-6 rounded-lg flex-1 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
              Pathogen & Disease Diagnosis
            </span>
            <h3 className="text-xl font-bold tracking-tight text-on-surface mb-2">
              Edge Specimen Scanning
            </h3>
            <p className="text-[10px] text-text-secondary mb-6">Interactive demo — simulated diagnostic scenarios.</p>

            <div className="space-y-4">
              {diagnostics.map((item) => {
                const isCurrent = activeDiagnosticId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`p-4 border rounded transition-all duration-300 ${
                      isCurrent && diagnosticRunning
                        ? "border-primary bg-primary/5 animate-pulse"
                        : "border-outline-variant/50 hover:border-primary/40 bg-background"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xs font-bold text-on-surface">{item.cropName}</h4>
                        <span className="text-[10px] text-text-secondary">{item.symptom}</span>
                      </div>
                      <button
                        onClick={() => handleRunDiagnostic(item)}
                        disabled={diagnosticRunning}
                        className="p-1.5 bg-sub-surface text-primary rounded border border-outline-variant/30 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 disabled:opacity-50"
                      >
                        {isCurrent && diagnosticRunning ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Play className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Specimen image simulator box */}
                    <div className="h-16 w-full bg-sub-surface rounded border border-dashed border-outline-variant/80 flex items-center justify-center text-[10px] text-text-secondary uppercase tracking-widest font-semibold select-none">
                      {item.imagePlaceholder} [RGB-NIR Scan]
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-xs text-text-secondary">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Diagnostic scanner ready.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, Calendar, Check, Mail, Radio, Send } from "lucide-react";
import { contact, type ContactState } from "@/app/actions/contact";

const fieldClass = "w-full border border-[#050b08]/20 bg-[#f7f8f2] px-4 py-3.5 text-sm text-[#050b08] outline-none transition-colors placeholder:text-[#617064]/60 focus:border-[#198049] focus:ring-1 focus:ring-[#198049]";
const labelClass = "text-[9px] font-extrabold uppercase tracking-[.14em] text-[#465249]";

function ContactFormPanel({ onSubmitAnother }: { onSubmitAnother: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    hectares: "100-500",
    message: "",
  });

  const initialState: ContactState = {};
  const [state, formAction, pending] = useActionState(contact, initialState);
  const formSubmitted = state?.success === true;
  const errors = state?.errors;

  if (formSubmitted) {
    return (
      <div className="flex min-h-[620px] flex-col items-center justify-center bg-[#f1f4eb] p-8 text-center text-[#050b08] sm:p-12" aria-live="polite">
        <div className="grid size-20 place-items-center border border-[#198049]/30 text-[#198049]"><Check className="size-9" /></div>
        <p className="mt-8 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#198049]">REQUEST LOGGED / CHANNEL ACTIVE</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-5xl">WE HAVE YOUR FIELD BRIEF.</h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-[#617064]">Thank you, {formData.name}. Someone from AMR Solutions will reach out to {formData.email} within a few business days.</p>
        <button type="button" onClick={onSubmitAnother} className="mt-8 border-b border-[#050b08] pb-1 text-[10px] font-extrabold uppercase tracking-[.12em]">Submit another request</button>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-[#f1f4eb] p-6 text-[#050b08] sm:p-9 lg:p-12">
      <div className="flex flex-col gap-3 border-b border-[#050b08]/18 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#198049]">CONTACT FORM / REQUIRED FIELDS</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.045em] sm:text-4xl">FIELD BRIEFING REQUEST</h2>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[.12em] text-[#617064]">SECURE CHANNEL / 01</span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Jane Doe" className={fieldClass} aria-describedby={errors?.name ? "name-error" : undefined} />
          {errors?.name && <p id="name-error" className="text-xs text-red-700">{errors.name[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>Business email</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="jane@farmco.com" className={fieldClass} aria-describedby={errors?.email ? "email-error" : undefined} />
          {errors?.email && <p id="email-error" className="text-xs text-red-700">{errors.email[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="org" className={labelClass}>Grower organization</label>
          <input id="org" name="org" type="text" autoComplete="organization" required value={formData.org} onChange={(event) => setFormData({ ...formData, org: event.target.value })} placeholder="Valley Growers Inc." className={fieldClass} aria-describedby={errors?.org ? "org-error" : undefined} />
          {errors?.org && <p id="org-error" className="text-xs text-red-700">{errors.org[0]}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hectares" className={labelClass}>Area managed</label>
          <select id="hectares" name="hectares" value={formData.hectares} onChange={(event) => setFormData({ ...formData, hectares: event.target.value })} className={fieldClass} aria-describedby={errors?.hectares ? "hectares-error" : undefined}>
            <option value="under-100">Under 100 hectares</option>
            <option value="100-500">100–500 hectares</option>
            <option value="500-2000">500–2,000 hectares</option>
            <option value="over-2000">Over 2,000 hectares</option>
          </select>
          {errors?.hectares && <p id="hectares-error" className="text-xs text-red-700">{errors.hectares[0]}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>Operational requirements</label>
        <textarea id="message" name="message" rows={7} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell us what you grow, the signals you already collect, and the decision you need to make with more confidence." className={`${fieldClass} resize-y`} aria-describedby={errors?.message ? "message-error" : undefined} />
        {errors?.message && <p id="message-error" className="text-xs text-red-700">{errors.message[0]}</p>}
      </div>

      {state?.message && !state.success && <p className="mt-5 border border-red-700/25 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">{state.message}</p>}

      <button type="submit" disabled={pending} className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 bg-[#050b08] px-7 text-xs font-extrabold uppercase tracking-[.12em] text-[#c8ff45] transition-transform hover:-translate-y-1 disabled:cursor-wait disabled:opacity-55">
        {pending ? "Transmitting…" : "Send field briefing"} <Send className="size-4" />
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0);

  return (
    <div className="bg-[#030705] text-[#edf4ea]">
      <section className="relative overflow-hidden border-b border-white/14 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(200,255,69,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_80%_50%,#000,transparent_65%)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.2fr_.55fr] lg:items-end">
          <div>
            <Link href="/" data-hero-item className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-white/45 hover:text-[#c8ff45]"><ArrowLeft className="size-3.5" /> Back to mission control</Link>
            <p data-hero-item className="mt-12 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]"><span className="size-2 bg-[#c8ff45] shadow-[0_0_14px_#c8ff45]" /> CONTACT / CHANNEL OPEN</p>
            <h1 data-hero-item className="mt-6 max-w-5xl font-display text-[clamp(4rem,8.5vw,9rem)] font-semibold leading-[.82] tracking-[-.08em] uppercase">START WITH<br /><span className="text-[#c8ff45]">THE FIELD.</span></h1>
            <p data-hero-item className="mt-8 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">Request a product walkthrough, discuss a pilot, or describe the operational constraint you want to solve. The form below is the fastest path to our team.</p>
            <Link href="#contact-form" data-hero-item className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 bg-[#c8ff45] px-6 text-xs font-extrabold uppercase tracking-[.1em] text-[#050b08] transition-transform hover:-translate-y-1">Open the contact form <ArrowDown className="size-4" /></Link>
          </div>

          <aside data-hero-item className="border border-[#c8ff45]/28 bg-[#07100c] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/14 pb-5"><Radio className="size-6 text-[#c8ff45]" /><span className="font-mono text-[8px] uppercase tracking-[.14em] text-[#c8ff45]">RECEIVING</span></div>
            <dl className="mt-7 space-y-6">
              <div><dt className="font-mono text-[8px] uppercase tracking-[.14em] text-white/35">Response window</dt><dd className="mt-2 font-display text-2xl font-semibold">A FEW BUSINESS DAYS</dd></div>
              <div><dt className="font-mono text-[8px] uppercase tracking-[.14em] text-white/35">Useful inputs</dt><dd className="mt-2 text-sm leading-7 text-white/58">Crop, acreage, current data sources, and the decision you need to improve.</dd></div>
              <div className="border-t border-white/14 pt-6"><dt className="font-mono text-[8px] uppercase tracking-[.14em] text-white/35">Direct channel</dt><dd className="mt-2"><a href="mailto:contact@amrsolutions.tech" className="inline-flex items-center gap-2 text-sm text-[#c8ff45]"><Mail className="size-4" /> contact@amrsolutions.tech</a></dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="contact-form" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-white/14 lg:grid-cols-[1.25fr_.55fr]">
          <ContactFormPanel key={formKey} onSubmitAnother={() => setFormKey((key) => key + 1)} />
          <aside className="bg-[#08100c] p-7 sm:p-10 lg:p-12">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#c8ff45]">WHAT HAPPENS NEXT / 003</p>
            <ol className="mt-10 space-y-9">
              {[
                ["01", "We review the operation", "Your crop, scale, signals, and immediate constraint shape the conversation."],
                ["02", "We identify the useful starting point", "No generic pitch—just the AMR layer that best matches the field problem."],
                ["03", "We plan the next step", "That may be a product walkthrough, technical discussion, or early pilot conversation."],
              ].map(([number, title, body]) => (
                <li key={number} className="grid grid-cols-[36px_1fr] gap-4 border-t border-white/14 pt-5">
                  <span className="font-mono text-[9px] font-bold text-[#c8ff45]">{number}</span>
                  <div><h2 className="font-display text-xl font-semibold tracking-[-.03em]">{title}</h2><p className="mt-3 text-sm leading-7 text-white/48">{body}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-12 border border-[#c8ff45]/25 p-5">
              <Calendar className="size-5 text-[#c8ff45]" />
              <p className="mt-4 text-xs leading-6 text-white/52">AMR is currently in development. We welcome serious conversations with growers, researchers, and operational partners.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/14 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 font-mono text-[8px] uppercase tracking-[.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>AMR Solutions / Tunisia</span><span className="flex items-center gap-2 text-[#c8ff45]"><Radio className="size-3" /> Contact channel active</span><span>Form endpoint / secure</span>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState, useActionState } from "react";
import Section from "@/components/Section";
import { Send, Mail, Calendar } from "lucide-react";
import { contact, type ContactState } from "@/app/actions/contact";

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

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest hairline-border p-5 sm:p-6 md:p-8 rounded-lg shadow-sm flex flex-col justify-between">
      {formSubmitted ? (
        <div className="grow flex flex-col items-center justify-center text-center p-8 space-y-6">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-on-surface mb-2">
              Request Logged Successfully
            </h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name}. Someone from AMR Solutions will reach out to {formData.email} within a few business days.
            </p>
          </div>
          <button
            type="button"
            onClick={onSubmitAnother}
            className="text-xs font-bold text-primary hover:underline cursor-pointer"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-6">
              Request Early Access / Send a Message
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-primary uppercase">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="border border-outline-variant/60 rounded px-4 py-3 text-sm focus:outline-primary bg-background focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors?.name && <p className="text-xs text-red-500 mt-1">{errors.name[0]}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-primary uppercase">Business Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@farmco.com"
                className="border border-outline-variant/60 rounded px-4 py-3 text-sm focus:outline-primary bg-background focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors?.email && <p className="text-xs text-red-500 mt-1">{errors.email[0]}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="org" className="text-[10px] font-bold text-primary uppercase">Grower Organization</label>
              <input
                id="org"
                name="org"
                type="text"
                required
                value={formData.org}
                onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                placeholder="Valley Growers Inc."
                className="border border-outline-variant/60 rounded px-4 py-3 text-sm focus:outline-primary bg-background focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors?.org && <p className="text-xs text-red-500 mt-1">{errors.org[0]}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="hectares" className="text-[10px] font-bold text-primary uppercase">Acreage Managed (Hectares)</label>
              <select
                id="hectares"
                name="hectares"
                value={formData.hectares}
                onChange={(e) => setFormData({ ...formData, hectares: e.target.value })}
                className="border border-outline-variant/60 rounded px-4 py-3 text-sm focus:outline-primary bg-background focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="under-100">Under 100 Hectares</option>
                <option value="100-500">100 - 500 Hectares</option>
                <option value="500-2000">500 - 2,000 Hectares</option>
                <option value="over-2000">Over 2,000 Hectares</option>
              </select>
              {errors?.hectares && <p className="text-xs text-red-500 mt-1">{errors.hectares[0]}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-primary uppercase">Operational Requirements</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your soil properties, crop types, or primary resource scarcity issues."
              className="border border-outline-variant/60 rounded px-4 py-3 text-sm focus:outline-primary bg-background focus:ring-1 focus:ring-primary focus:border-primary resize-none"
            />
            {errors?.message && <p className="text-xs text-red-500 mt-1">{errors.message[0]}</p>}
          </div>

          {state?.message && !state.success && (
            <p className="text-xs text-red-500 text-center">{state.message}</p>
          )}

          <div className="pt-2">
            <button
              id="submit-btn"
              type="submit"
              disabled={pending}
              className="w-full bg-primary text-background font-semibold text-sm py-4 rounded hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{pending ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-sub-surface py-12 sm:py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
            Connect
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 max-w-3xl leading-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            Request a product walkthrough, discuss early access, or share feedback on the platform we are building.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contacts */}
      <Section id="contact-content" bgType="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <ContactFormPanel
            key={formKey}
            onSubmitAnother={() => setFormKey((key) => key + 1)}
          />

          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="hairline-border bg-surface-container-lowest p-6 rounded-lg shadow-sm space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
                  Contact
                </span>
                <h4 className="text-lg font-bold text-on-surface">AMR Solutions</h4>
                <span className="text-xs text-text-secondary">Early-stage agritech startup</span>
              </div>

              <div className="space-y-3 pt-2 text-xs text-text-secondary border-t border-outline-variant/30">
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>contact@amrsolutions.tech</span>
                </div>
              </div>
            </div>

            <div className="hairline-border bg-sub-surface p-6 rounded-lg">
              <p className="text-sm text-text-secondary leading-relaxed">
                We are currently in development and do not have a commercial product or field deployments yet. Use this form to request a product walkthrough, discuss pilot opportunities, or share feedback.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

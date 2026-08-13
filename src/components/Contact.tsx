"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = { name: string; email: string; subject: string; message: string };
const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Server returned an error");
      }
      setStatus("success");
      setForm(INITIAL);
    } catch (err: any) {
      setStatus("idle");
      console.error(err);
      alert(err?.message || "Failed to send message. Please try again or email directly.");
    }
  };

  const update = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [k]: e.target.value });
      if (errors[k]) setErrors({ ...errors, [k]: undefined });
    };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint [background-size:52px_52px] opacity-[0.25]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-bnb/[0.08] blur-[140px]"
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow mx-auto">
            <MessageSquare className="h-3.5 w-3.5" />
            Contact
          </span>
          <h2 className="section-title mt-4">
            Let&apos;s build something{" "}
            <span className="word-gold">worth shipping</span>
          </h2>
          <p className="section-lead mx-auto">
            Full-time, contract, or consulting — if the problem is
            interesting, I&apos;m probably interested.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Contact cards */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-4"
          >
            <ContactCard
              Icon={Mail}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              accent
            />
            <ContactCard
              Icon={Phone}
              label="Phone / WhatsApp"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              Icon={MapPin}
              label="Location"
              value={personalInfo.location}
            />
            <ContactCard
              Icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/zeeshan8838"
              href={personalInfo.linkedin}
            />
            <ContactCard
              Icon={Github}
              label="GitHub"
              value="@zeeshankhan"
              href={personalInfo.github}
            />

            {/* Availability */}
            <div className="card card-hover relative overflow-hidden p-5 sm:p-6">
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(240,185,11,0.18), rgba(240,185,11,0) 60%)",
                }}
              />
              <div className="relative flex items-start gap-3.5">
                <div className="relative mt-0.5">
                  <span className="flex h-9 w-9">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-success opacity-40" />
                    <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-success/40 bg-success/10 text-success">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-success/90">
                    Status
                  </div>
                  <h4 className="mt-1 font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                    Open to new opportunities
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-tertiary">
                    Replies within <b className="text-bnb">24 hours</b>.
                    WhatsApp is fastest for urgent work.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="card card-hover relative overflow-hidden p-6 sm:p-8 lg:col-span-8 dot-corners gold-wrap"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-bnb/[0.07] blur-3xl"
            />

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex min-h-[400px] flex-col items-center justify-center text-center px-4 py-10 sm:px-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-gold rounded-3xl" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-3xl border border-success/40 bg-success/10 sm:h-24 sm:w-24">
                    <CheckCircle2 className="h-10 w-10 text-success sm:h-12 sm:w-12" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="mt-7 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Message received — thank you ✨
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                  I&apos;ll reply from{" "}
                  <b className="text-bnb">{personalInfo.email}</b> within 24
                  hours. For urgent work, ping me on WhatsApp at{" "}
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="font-semibold text-bnb hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary mt-8"
                >
                  Send another
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-border-subtle pb-5 sm:mb-7 sm:pb-6">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-bnb/90">
                      send a message
                    </div>
                    <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                      Tell me about your project or role
                    </h3>
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                      avg response
                    </div>
                    <div className="font-display text-lg font-bold text-bnb">
                      &lt; 24h
                    </div>
                  </div>
                </div>

                <form onSubmit={submit} className="relative space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Your name"
                      placeholder="Satoshi Nakamoto"
                      value={form.name}
                      onChange={update("name")}
                      error={errors.name}
                    />
                    <Field
                      label="Email address"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update("email")}
                      error={errors.email}
                    />
                  </div>
                  <Field
                    label="Subject"
                    placeholder="Full-time role · Project · Consulting…"
                    value={form.subject}
                    onChange={update("subject")}
                  />
                  <div>
                    <Label>Message</Label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell me about the role/project, scope, timeline, and anything else I should know."
                      className={cn(
                        "block w-full min-h-[170px] resize-y rounded-2xl border bg-bg-tertiary/40 px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted outline-none transition-all focus-ring",
                        errors.message
                          ? "border-danger/60 focus:ring-danger/15"
                          : "border-border focus:border-bnb/70"
                      )}
                    />
                    {errors.message && <ErrorText>{errors.message}</ErrorText>}
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="text-xs text-ink-muted">
                      Or email me directly at{" "}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-semibold text-bnb hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={cn(
                        "btn-primary w-full sm:w-auto",
                        status === "loading" && "opacity-80"
                      )}
                    >
                      {status === "loading" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-25"
                            />
                            <path
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard(props: {
  Icon: any;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const Inner = (
    <div
      className={
        "card card-hover flex items-center gap-4 p-5 sm:p-5 transition-all " +
        (props.accent ? "gold-wrap" : "")
      }
    >
      <div
        className={
          "grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-all sm:h-12 sm:w-12 " +
          (props.accent
            ? "border-bnb/50 bg-bnb text-bg-secondary shadow-glow-gold"
            : "border-border bg-bg-tertiary/60 text-bnb hover:border-bnb/60")
        }
      >
        <props.Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          {props.label}
        </div>
        <div className="mt-0.5 truncate text-sm font-semibold text-ink sm:text-[15px]">
          {props.value}
        </div>
      </div>
    </div>
  );
  return props.href ? (
    <a
      href={props.href}
      target={props.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block"
    >
      {Inner}
    </a>
  ) : (
    Inner
  );
}

function Label(props: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-ink-tertiary">
      {props.children}
    </label>
  );
}
function ErrorText(props: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-danger">{props.children}</p>;
}
function Field(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{props.label}</Label>
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={cn(
          "block w-full rounded-2xl border bg-bg-tertiary/40 px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted outline-none transition-all focus-ring",
          props.error
            ? "border-danger/60 focus:ring-danger/15"
            : "border-border focus:border-bnb/70"
        )}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </div>
  );
}

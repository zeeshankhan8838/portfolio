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
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL);
    }, 1400);
  };

  const update = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [k]: e.target.value });
      if (errors[k]) setErrors({ ...errors, [k]: undefined });
    };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.06), transparent)",
        }}
      />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">
            <MessageSquare className="h-3.5 w-3.5" />
            Contact
          </span>
          <h2 className="section-title mt-3">
            Let&apos;s build something <span className="text-accent">worth shipping</span>
          </h2>
          <p className="section-lead mx-auto">
            Full-time, contract, or consulting — if the problem is
            interesting, I&apos;m probably interested.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="space-y-4 lg:col-span-4"
          >
            <ContactCard
              icon={<Mail className="h-[18px] w-[18px]" />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactCard
              icon={<Phone className="h-[18px] w-[18px]" />}
              label="Phone / WhatsApp"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={<MapPin className="h-[18px] w-[18px]" />}
              label="Location"
              value={personalInfo.location}
            />
            <ContactCard
              icon={<Linkedin className="h-[18px] w-[18px]" />}
              label="LinkedIn"
              value="linkedin.com/in/zeeshan8838"
              href={personalInfo.linkedin}
            />
            <ContactCard
              icon={<Github className="h-[18px] w-[18px]" />}
              label="GitHub"
              value="github.com/zeeshankhan"
              href={personalInfo.github}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="card overflow-hidden p-6 sm:p-8 lg:col-span-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[380px] flex-col items-center justify-center text-center px-4 py-10"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-success/10 ring-1 ring-success/20">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  Message sent — thank you
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-tertiary sm:text-[15px]">
                  I&apos;ll reply from <b>{personalInfo.email}</b> within 24 hours.
                  For urgent work, WhatsApp is fastest.
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
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={update("name")}
                    error={errors.name}
                  />
                  <Field
                    label="Email address"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={update("email")}
                    error={errors.email}
                  />
                </div>
                <Field
                  label="Subject"
                  placeholder="Full-time role · Project inquiry · Consulting…"
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
                      "block w-full resize-y rounded-xl border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-all focus-ring",
                      "min-h-[160px]",
                      errors.message
                        ? "border-danger focus:ring-danger/15"
                        : "border-border focus:border-accent"
                    )}
                  />
                  {errors.message && (
                    <ErrorText>{errors.message}</ErrorText>
                  )}
                </div>

                <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="text-xs text-ink-muted">
                    Or email me directly at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-accent hover:underline"
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard(props: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card card-hover flex items-start gap-4 p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-faint text-accent">
        {props.icon}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          {props.label}
        </div>
        <div className="mt-0.5 truncate text-sm font-medium text-ink">
          {props.value}
        </div>
      </div>
    </div>
  );
  return props.href ? (
    <a
      href={props.href}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Label(props: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-secondary">
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
          "block w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-all focus-ring",
          props.error
            ? "border-danger focus:ring-danger/15"
            : "border-border focus:border-accent"
        )}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </div>
  );
}

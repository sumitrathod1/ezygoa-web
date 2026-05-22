"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ZipGoa! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const url = `https://wa.me/917026889254?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-14 h-14 mb-4" style={{ color: "var(--brand-success)" }} />
        <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">Your WhatsApp is opening with a pre-filled message. We&apos;ll respond within minutes.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Rahul Sharma"
            className="w-full h-11 px-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full h-11 px-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="rahul@example.com"
          className="w-full h-11 px-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your trip — where you're going, when, how many people..."
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full gap-2 h-11 font-semibold"
        style={{ background: "var(--brand-primary)", color: "white" }}
      >
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Clicking send opens WhatsApp with your message pre-filled. We reply within minutes.
      </p>
    </form>
  );
}

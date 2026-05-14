"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Have a question? We&apos;ve got answers. Still not sure?{" "}
            <a
              href="https://wa.me/917026889254"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "var(--brand-primary)" }}
            >
              WhatsApp us.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-white border border-border rounded-2xl px-5 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left text-sm font-semibold py-4 hover:no-underline hover:text-brand-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS, NAV_LINKS, buildWhatsAppUrl } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "py-4"
      }`}
      style={!scrolled ? { background: "linear-gradient(to bottom, rgba(26,54,93,0.75) 0%, transparent 100%)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity" aria-label="ZipGoa - Home">
            <Image
              src={scrolled ? "/logo/logo.png" : "/logo/logo-white.png"}
              alt="ZipGoa - Your Goa, Made Easy"
              width={180}
              height={60}
              priority
              quality={90}
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if ("children" in link) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        scrolled
                          ? "text-foreground hover:text-brand-primary hover:bg-primary/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-60 glass rounded-xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:text-brand-primary hover:bg-primary/5 first:rounded-t-xl last:rounded-b-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-brand-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              onClick={() => trackCallClick("header_desktop")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-brand-primary hover:bg-primary/5"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header_nav")}
            >
              <Button
                size="sm"
                className="bg-brand-success text-white hover:opacity-90 gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-foreground hover:bg-primary/5"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/20 mt-2 mx-4 rounded-2xl shadow-xl">
          <div className="p-4 space-y-1">
            {NAV_LINKS.map((link) => {
              if ("children" in link) {
                const isOpen = openSubmenu === link.label;
                return (
                  <div key={link.label + "-mobile"}>
                    <button
                      onClick={() => setOpenSubmenu(isOpen ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-primary/5 hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-brand-primary hover:bg-primary/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-primary/5 hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-border space-y-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                onClick={() => trackCallClick("header_mobile")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-brand-primary border border-brand-primary/20 hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("header_mobile")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-brand-success hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

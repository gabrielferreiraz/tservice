"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/content";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import HazardStripe from "./HazardStripe";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#capacidade", label: "Como trabalhamos" },
  { href: "#referencias", label: "Referências" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" onClick={() => setOpen(false)}>
          <Logo variant="header" theme="dark" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/80 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label={`Falar com ${COMPANY.ownerName.split(" ")[0]}`} className="py-2.5 text-sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md text-paper lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-paper/80 transition hover:bg-white/5 hover:text-brand active:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-3">
            <WhatsAppButton label={`Falar com ${COMPANY.ownerName.split(" ")[0]}`} className="w-full justify-center" />
          </div>
        </nav>
      )}

      <HazardStripe />
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getOrderLink } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Nossos produtos" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#como-pedir", label: "Como pedir" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner container">
        <a className="brand" href="#inicio" aria-label="Santo Recheio, voltar ao início" onClick={() => setOpen(false)}>
          <Image src="/img/logo.jpg" width={48} height={48} alt="" className="brand-seal" />
          <span className="brand-name">Santo Recheio<span>Confeitaria Artesanal</span></span>
        </a>

        <nav className={`main-nav${open ? " is-open" : ""}`} id="main-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="mobile-order-link" href={getOrderLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Fazer meu pedido</a>
        </nav>

        <a className="header-cta" href={getOrderLink()} target="_blank" rel="noopener noreferrer">
          Fazer meu pedido <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

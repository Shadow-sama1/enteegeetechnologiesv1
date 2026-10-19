"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] },
    );

    links.forEach(({ href }) => {
      const target = document.querySelector(href);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const containFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("keydown", containFocus);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("keydown", containFocus);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);

  const onLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo onClick={onLogoClick} />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "nav-link active" : "nav-link"}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppLink className="button button-primary nav-cta">
          Get My Website Today
          <Icon name="arrow" size={17} />
        </WhatsAppLink>
        <button
          ref={toggleRef}
          type="button"
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            const opening = !menuOpen;
            setMenuOpen(opening);
            if (opening) {
              window.setTimeout(
                () => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
                50,
              );
            }
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "mobile-nav-link active" : "mobile-nav-link"}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppLink className="button button-primary mobile-cta" onClick={() => setMenuOpen(false)}>
            Get My Website Today <Icon name="arrow" size={17} />
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}

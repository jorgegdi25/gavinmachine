"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { media } from "@/lib/media";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/what-we-offer#services",
    label: "Services",
    dropdown: [
      { href: "/cnc-milling-services", label: "CNC Milling" },
      { href: "/cnc-turning-services", label: "CNC Turning" },
      { href: "/what-we-offer#service-details", label: "Prototype & Production" },
      { href: "/what-we-offer#service-details", label: "Secondary Services" },
      { href: "/quality-control", label: "Quality Assurance" },
    ]
  },
  {
    href: "/what-we-offer#capabilities",
    label: "Capabilities",
    dropdown: [
      { href: "/what-we-offer#capabilities", label: "CNC Milling Capabilities" },
      { href: "/what-we-offer#capabilities", label: "CNC Turning Capabilities" },
      { href: "/quality-control", label: "Quality Assurance & Inspection" },
      { href: "/what-we-offer#capabilities", label: "Engineering & CAD/CAM" },
      { href: "/what-we-offer#capabilities", label: "Secondary Services" },
      { href: "/facilities-equipment", label: "Equipment List" },
    ]
  },
  { href: "/industries-served", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenDropdown(null);
    }
  }, [menuOpen]);

  const handleParentLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.dropdown && window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenDropdown(openDropdown === link.label ? null : link.label);
    } else {
      setMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleSublinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
          <img
            src={media.logoGavin}
            alt="Gavin Machine Logo"
            className={styles.logoImage}
          />
        </Link>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main Navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isOpen = openDropdown === link.label;
              return (
                <li key={link.label} className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ""}`}>
                  <div className={styles.navLinkRow}>
                    <Link
                      href={link.href}
                      className={styles.navLink}
                      onClick={(e) => handleParentLinkClick(e, link)}
                    >
                      {link.label}
                    </Link>

                    {link.dropdown && (
                      <button
                        type="button"
                        className={styles.dropdownToggle}
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={isOpen}
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      >
                        <ChevronDown size={14} className={styles.dropdownIcon} />
                      </button>
                    )}
                  </div>

                  {link.dropdown && (
                    <ul className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuOpen : ""}`}>
                      {link.dropdown.map((sublink) => (
                        <li key={`${sublink.href}-${sublink.label}`}>
                          <Link
                            href={sublink.href}
                            className={styles.dropdownLink}
                            onClick={handleSublinkClick}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/get-a-quote"
            className={`btn btn--primary ${styles.navCta}`}
            onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
          >
            Request a Quote
          </Link>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
}

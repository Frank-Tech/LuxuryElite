import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 z-50 border-b border-[#B8860B]/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="font-serif text-2xl text-[#B8860B]">Elite Concierge</div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "text-sm transition-colors hover:text-[#B8860B]",
                  activeSection === item.href.slice(1)
                    ? "text-[#B8860B]"
                    : "text-gray-300"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
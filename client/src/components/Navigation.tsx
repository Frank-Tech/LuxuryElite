import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const { t } = useTranslation();
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/testimonials", label: t("nav.testimonials") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="font-serif text-2xl gold-text">Elite Concierge</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

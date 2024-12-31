import { FadeIn } from "@/components/animations/FadeIn";
import { SiInstagram, SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "X" },
];

export const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-[#B8860B]/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <FadeIn>
          <div className="flex justify-center space-x-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8860B] hover:text-[#DAA520] transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
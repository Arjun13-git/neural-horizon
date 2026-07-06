import type { SocialLink } from "@/types";
import { siteConfig } from "@/config/site";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
];
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  github?: string;
  demo?: string;
  date: string;
  highlights?: string[];
}

export type ProjectCategory = "ai" | "backend" | "research" | "frontend" | "tools";

export type ProjectStatus = "active" | "completed" | "research" | "archived";

export interface Experience {
  slug: string;
  company: string;
  role: string;
  type: ExperienceType;
  duration: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export type ExperienceType = "internship" | "training" | "freelance" | "research";

export interface Research {
  slug: string;
  title: string;
  abstract: string;
  domain: string;
  status: ResearchStatus;
  tech: string[];
  date: string;
  collaborators?: string[];
  paperUrl?: string;
  presentedAt?: string;
}

export type ResearchStatus = "active" | "published" | "completed" | "draft";

export interface Certification {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: AchievementCategory;
  icon?: string;
}

export type AchievementCategory = "hackathon" | "academic" | "certification" | "milestone";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
}

export interface SkillGroup {
  category: string;
  icon?: string;
  description?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

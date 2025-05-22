// Social Media and Contact Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
}

// Home Section Types
export interface BulletPoint {
  text: string;
  icon: string;
}

export interface HomeSection {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  bulletPoints: BulletPoint[];
}

// Tech Stack Types
export interface TechStackItem {
  name: string;
  icon: string;
  invertInDark?: boolean;
}

// Skills Types
export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  invertInDark?: boolean;
  category?: string;
}

// Experience Types
export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  location?: string;
  companyUrl?: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  featured?: boolean;
}

// Open Source Types
export interface OpenSourceContribution {
  project: string;
  description: string;
  prLink: string;
  githubLink: string;
  technologies: string[];
  impact?: string;
}
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, Experience, Research, Certification, BlogPost } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content");

/** Read all markdown files from a content subdirectory. */
function readDirectory(subdir: string) {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

/** Parse a single markdown file with gray-matter. */
function parseFile<T>(filePath: string): T & { content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as T), content };
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function getAllProjects(): Project[] {
  const files = readDirectory("projects");
  return files
    .map((file) =>
      parseFile<Project>(path.join(CONTENT_DIR, "projects", file))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): (Project & { content: string }) | null {
  const filePath = path.join(CONTENT_DIR, "projects", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseFile<Project>(filePath);
}

// ─── Experience ───────────────────────────────────────────────────────────────

export function getAllExperience(): Experience[] {
  const files = readDirectory("experience");
  return files
    .map((file) =>
      parseFile<Experience>(path.join(CONTENT_DIR, "experience", file))
    )
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

// ─── Research ────────────────────────────────────────────────────────────────

export function getAllResearch(): Research[] {
  const files = readDirectory("research");
  return files
    .map((file) =>
      parseFile<Research>(path.join(CONTENT_DIR, "research", file))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ─── Certifications ───────────────────────────────────────────────────────────

export function getAllCertifications(): Certification[] {
  const files = readDirectory("certifications");
  return files
    .map((file) =>
      parseFile<Certification>(path.join(CONTENT_DIR, "certifications", file))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function getAllBlogPosts(): BlogPost[] {
  const files = readDirectory("blog");
  return files
    .map((file) =>
      parseFile<BlogPost>(path.join(CONTENT_DIR, "blog", file))
    )
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): (BlogPost & { content: string }) | null {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseFile<BlogPost>(filePath);
}

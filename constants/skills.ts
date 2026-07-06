import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    description: "Building intelligent systems, ML pipelines, and agentic workflows",
    skills: [
      { name: "Python", level: "advanced" },
      { name: "TensorFlow", level: "intermediate" },
      { name: "LangChain", level: "intermediate" },
      { name: "LangFlow", level: "intermediate" },
      { name: "Qiskit", level: "intermediate" },
      { name: "PennyLane", level: "intermediate" },
      { name: "OpenCV", level: "intermediate" },
      { name: "YOLO", level: "intermediate" },
      { name: "NumPy", level: "advanced" },
      { name: "Pandas", level: "advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Scalable services, REST APIs, database-driven architecture",
    skills: [
      { name: "FastAPI", level: "intermediate" },
      { name: "Node.js", level: "intermediate" },
      { name: "Express", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MongoDB", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "REST APIs", level: "advanced" },
    ],
  },
  {
    category: "Frontend",
    description: "React-based interfaces, responsive design",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "HTML & CSS", level: "advanced" },
      { name: "Next.js", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
    ],
  },
  {
    category: "Languages",
    description: "Core programming languages across domains",
    skills: [
      { name: "Python", level: "advanced" },
      { name: "Java", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "C++", level: "beginner" },
      { name: "SQL", level: "intermediate" },
    ],
  },
  {
    category: "Quantum Computing",
    description: "Quantum ML research and experimentation",
    skills: [
      { name: "Qiskit", level: "intermediate" },
      { name: "PennyLane", level: "intermediate" },
      { name: "Quantum Circuits", level: "intermediate" },
      { name: "QML Algorithms", level: "intermediate" },
    ],
  },
  {
    category: "Developer Tools",
    description: "Tooling, deployment, and development environment",
    skills: [
      { name: "Git & GitHub", level: "advanced" },
      { name: "Linux / Fedora", level: "intermediate" },
      { name: "VS Code", level: "advanced" },
      { name: "Render", level: "intermediate" },
      { name: "Vercel", level: "intermediate" },
      { name: "LaTeX", level: "intermediate" },
    ],
  },
  {
    category: "Graphics & Engineering",
    description: "3D rendering and CAD automation",
    skills: [
      { name: "OpenGL", level: "beginner" },
      { name: "C++ / GLFW", level: "beginner" },
      { name: "Build123d", level: "intermediate" },
      { name: "CadQuery", level: "intermediate" },
    ],
  },
];

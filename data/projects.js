// art: "network" | "pulse" | "blocks" | "rings"  (generated local cover art)
// image: placeholder screenshots live in /public/images/projects. Replace the files (same names) or set a new path. Set to null to show the generated art instead.
// (old note) image: set to "/images/your-cover.jpg" to use a real screenshot instead of the generated art.
// Descriptions for the last two projects are DUMMY: rewrite them in your words.
export const projects = [
  {
    id: "ecommerce-platform",
    title: "AI-driven multi-tenant e-commerce platform",
    year: "2026",
    role: "Full-stack and data science",
    summary:
      "A SaaS platform where vendors open their own stores and sell products. A hybrid recommender (implicit and explicit collaborative filtering, SVD) is retrained on platform data, and a rule-based support bot answers common questions.",
    tools: ["Next.js", "FastAPI", "Java", "PostgreSQL", "PyTorch", "Docker"],
    art: "network",
    image: "/images/projects/project-1.svg",
    code: "https://github.com/Sewmina-as/your-repo", // DUMMY
    demo: "https://example.com/demo", // DUMMY
  },
  {
    id: "heart-failure",
    title: "Heart failure prediction",
    year: "2025",
    role: "Machine learning",
    summary:
      "A classification pipeline that cleans clinical data, compares several models and reports precision, recall and ROC-AUC, so the result can be trusted and not only scored.",
    tools: ["Python", "scikit-learn", "pandas", "NumPy"],
    art: "pulse",
    image: "/images/projects/project-2.svg",
    code: "https://github.com/Sewmina-as/Heart-Failure-Prediction",
    demo: "https://example.com/demo", // DUMMY
  },
  {
    id: "oop-group-project",
    title: "Object-oriented group project",
    year: "2025",
    role: "Backend developer",
    summary:
      "A team project built around clean object-oriented design: clear class responsibilities, encapsulation and a structure that a group could extend without stepping on each other.",
    tools: ["Java", "OOP", "Git"],
    art: "blocks",
    image: "/images/projects/project-3.svg",
    code: "https://github.com/Sewmina-as/OOP-Group-05_Project_2.2",
    demo: "https://example.com/demo", // DUMMY
  },
  {
    id: "next-project",
    title: "Your next project",
    year: "2026",
    role: "Add your role",
    summary:
      "Use this card for another project. Add a short description of the problem, what you built and what you learned, then list the tools and links below.",
    tools: ["Add", "Your", "Tools"],
    art: "rings",
    image: "/images/projects/project-4.svg",
    code: "https://github.com/Sewmina-as/your-repo", // DUMMY
    demo: "https://example.com/demo", // DUMMY
  },
];

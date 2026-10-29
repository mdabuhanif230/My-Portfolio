import projects from "../components/data/projects";

// ---------------------------------------------------------------------------
// EmailJS config — create a free account at https://www.emailjs.com, then put
// these three values in a .env file (see .env.example). No backend is needed.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const splitList = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

export const mapProjectFromApi = (project, index = 0) => ({
  id: project._id || project.id || String(index + 1),
  serial: index + 1,
  name: project.title || project.name || "Untitled Project",
  image: project.imageUrl || project.image || "",
  techStack: splitList(project.tags || project.techStack),
  description: project.description || "",
  features: splitList(project.features),
  liveLink: project.liveLink || "",
  githubClient: project.githubLink || project.githubClient || "",
  challenges: project.challenges || "",
  futurePlans: project.futurePlans || "",
});

export const publicApi = {
  // Projects come straight from src/components/data/projects.js
  getProjects: async () => projects.map(mapProjectFromApi),

  // Contact form -> EmailJS (REST API, no extra package needed)
  sendContactMessage: async (payload) => {
    // hidden honeypot field: bots fill it in, people never see it
    if (payload.website) return { ok: true };

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error("The contact form is not configured yet. Please email me directly.");
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: payload.name,
          from_email: payload.email,
          reply_to: payload.email,
          subject: payload.subject,
          message: payload.message,
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(text || "Unable to send your message.");
    }
    return { ok: true };
  },
};

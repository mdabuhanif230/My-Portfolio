import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaBolt,
  FaReact,
  FaLayerGroup,
  FaRocket,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import "./TechJourney.css";

const commits = [
  {
    id: 1,
    phase: "01",
    hash: "e5f0a12",
    branch: "main",
    verb: "init",
    message: "laid the foundations",
    icon: FaCode,
    tagline: "2026 — Web Development",
    description:
      "I started with HTML and CSS, building structured, styled pages and learning responsive design so layouts work well on every screen size.",
    skills: ["HTML5", "CSS3", "Responsive Design"],
    outcome: "Built responsive pages from scratch.",
  },
  {
    id: 2,
    phase: "02",
    hash: "9c4db83",
    branch: "feat/programming",
    verb: "feat",
    message: "learned to program",
    icon: FaBolt,
    tagline: "2026 — Programming",
    description:
      "I moved on to JavaScript and TypeScript, learning to think in logic, break problems apart, and make pages interactive.",
    skills: ["JavaScript", "TypeScript", "Problem Solving"],
    outcome: "Turned static pages into interactive ones.",
  },
  {
    id: 3,
    phase: "03",
    hash: "61bea77",
    branch: "feat/frontend",
    verb: "refactor",
    message: "adopted component thinking",
    icon: FaReact,
    tagline: "2026 — Frontend Development",
    description:
      "I learned React.js, Tailwind CSS and Next.js, building component-based interfaces and routing between views.",
    skills: ["React.js", "Tailwind CSS", "Next.js"],
    outcome: "Building reusable, maintainable UIs.",
  },
  {
    id: 4,
    phase: "04",
    hash: "3faed09",
    branch: "feat/full-stack",
    verb: "feat",
    message: "started going full stack",
    icon: FaLayerGroup,
    tagline: "2026 — Full-stack Learning",
    description:
      "I am connecting the frontend with the backend through Node.js, MongoDB and authentication, using Git and GitHub to manage my work.",
    skills: ["Node.js", "MongoDB", "Authentication", "Git & GitHub"],
    outcome: "Learning how complete web apps fit together.",
  },
  {
    id: 5,
    phase: "05",
    hash: "d0c4e75",
    branch: "main",
    verb: "ongoing",
    message: "building projects every day",
    icon: FaRocket,
    tagline: "2026 — Ongoing",
    description:
      "Now I focus on project development, AI-assisted coding and practical problem-solving to strengthen my skills and move toward becoming a Full Stack Web Developer.",
    skills: ["Projects", "AI-Assisted Coding", "Problem Solving"],
    outcome: "Learning by building real projects.",
    head: true,
  },
];

const TechJourney = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-transparent px-6 py-20 md:py-28 md:px-12"
    >
      <div className="glow-blob left-1/2 top-0 h-[32rem] w-[48rem] max-w-full -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          kicker="The Path"
          before="Developer "
          highlight="Journey"
          align="center"
        />

        {/* plain terminal card (no cursor-following glow — calmer on the eyes) */}
        <div className="tj-terminal">
          {/* Terminal title bar */}
          <div className="tj-bar">
            <div className="tj-lights">
              <span className="tj-light tj-light--red" />
              <span className="tj-light tj-light--amber" />
              <span className="tj-light tj-light--green" />
            </div>
            <div className="tj-bar-path">abu-hanif — ~/journey</div>
            <div className="tj-bar-spacer" />
          </div>

          {/* Command line */}
          <div className="tj-cmd">
            <span className="tj-prompt">$</span>
            <span className="tj-cmd-text">git log --graph --oneline --reverse</span>
            <span className="tj-caret" />
          </div>
          <p className="tj-hint">
            <span className="tj-hint-key">click</span> a commit to{" "}
            <span className="tj-hint-cmd">git show</span> the full story
          </p>

          {/* Graph */}
          <div className="tj-graph">
            {commits.map((c) => {
              const Icon = c.icon;
              const open = openId === c.id;
              return (
                <motion.article
                  key={c.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`tj-commit ${open ? "tj-commit--open" : ""}`}
                >
                  {/* dot on the spine */}
                  <div className="tj-dot-col">
                    <motion.span
                      className="tj-dot"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                      transition={{ duration: 0.4, ease: "backOut" }}
                    >
                      <Icon className="tj-dot-icon" />
                    </motion.span>
                  </div>

                  {/* commit body */}
                  <div className="tj-commit-body">
                    {/* one-line header (clickable) */}
                    <button
                      className="tj-oneline"
                      onClick={() => toggle(c.id)}
                      aria-expanded={open}
                    >
                      <span className="tj-hash">{c.hash}</span>
                      <span className="tj-branch">
                        <span className="tj-branch-dot" />
                        {c.branch}
                      </span>
                      {c.head && <span className="tj-head-tag">HEAD</span>}
                      <span className="tj-oneline-msg">
                        <span className="tj-verb">{c.verb}:</span> {c.message}
                      </span>
                      <span className="tj-toggle">
                        <FaChevronDown />
                      </span>
                    </button>

                    {/* expandable detail (git show) */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="tj-detail-wrap"
                        >
                          <div className="tj-detail">
                            <p className="tj-tagline">{c.tagline}</p>
                            <p className="tj-desc">{c.description}</p>

                            <div className="tj-skills">
                              {c.skills.map((s, i) => (
                                <motion.span
                                  key={s}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.12 + i * 0.06 }}
                                  className="tj-chip"
                                >
                                  {s}
                                </motion.span>
                              ))}
                            </div>

                            <div className="tj-outcome">
                              <span className="tj-outcome-icon">
                                <FaCheck />
                              </span>
                              <span>{c.outcome}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechJourney;

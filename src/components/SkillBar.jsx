import { useContext, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFireAlt,
  FaLock,
  FaWordpress,
  FaGitAlt,
  FaCode,
  FaFigma,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTypescript,
  SiNextdotjs,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { NavigateContext } from "../context/NavigateContext";
import MagicBentoPanel from "./MagicBento/MagicBento";
import DecryptLabel from "./DecryptLabel";
import { DecryptSplitHeading } from "./DecryptSplitHeading";
import SectionHeading from "./SectionHeading";
import BorderGlow from "./BorderGlow/BorderGlow";
import { glowTheme } from "./BorderGlow/glowTheme";

const frontendSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-300" },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-zinc-200" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
  { name: "Mongoose", icon: SiMongoose, color: "text-red-400" },
  { name: "Firebase", icon: FaFireAlt, color: "text-amber-300" },
  { name: "JWT", icon: FaLock, color: "text-purple-300" },
  { name: "Better Auth", icon: FaLock, color: "text-lime-300" },
];

const toolSkills = [
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-400" },
  { name: "VS Code", icon: FaCode, color: "text-sky-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "WordPress", icon: FaWordpress, color: "text-blue-300" },
  { name: "Elementor", icon: SiElementor, color: "text-rose-400" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "text-purple-300" },
  { name: "AI-Assisted Coding", icon: FaRobot, color: "text-lime-300" },
];

const categories = [
  { title: "Frontend", skills: frontendSkills },
  { title: "Backend", skills: backendSkills },
  { title: "CMS & Tools", skills: toolSkills },
];

const marqueeSkills = [...frontendSkills, ...backendSkills, ...toolSkills];

const SkillBar = () => {
  const { skillRef } = useContext(NavigateContext);
  const marqueeRef = useRef(null);
  // Marquees only animate while visible on screen
  const marqueeInView = useInView(marqueeRef, { margin: "150px 0px" });

  return (
    <section id="skills" ref={skillRef} className="relative overflow-hidden bg-transparent px-6 py-20 md:py-28 md:px-12">
      <div className="glow-blob left-1/2 top-0 h-[30rem] w-[44rem] max-w-full -translate-x-1/2" />
      <div className="max-w-[96rem] mx-auto relative z-10">
        <SectionHeading kicker="What I Do" before="Tech " highlight="Skills" align="center" />
        <p className="mx-auto -mt-8 mb-10 max-w-2xl text-center text-sm md:text-base text-zinc-400">
          Frontend, backend, and tooling I use to build responsive, user-friendly web applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BorderGlow {...glowTheme} backgroundColor="#0a0a0a" borderRadius={24} className="h-full">
                <MagicBentoPanel className="h-full p-6">
                  <h3 className="mb-4 text-xl font-black text-white">
                    <DecryptLabel text={cat.title} parentClassName="text-white font-black" className="text-white" />
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span key={skill.name} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200">
                        {skill.imageUrl ? (
                          <img src={skill.imageUrl} alt={skill.name} loading="lazy" decoding="async" className="h-4 w-4 rounded object-contain" />
                        ) : (
                          <skill.icon className={skill.color} style={skill.style} />
                        )}
                        {skill.name}
                                              </span>
                    ))}
                  </div>
                </MagicBentoPanel>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <BorderGlow {...glowTheme} backgroundColor="#0a0a0a" borderRadius={32}>
          <MagicBentoPanel className="relative p-5 md:p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-cyan-400/5" />
            <div className="relative z-10 mb-5 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.2em] text-white">
                <DecryptSplitHeading before="Skill " highlight="Marquee" />
              </h3>
            </div>

            <div ref={marqueeRef} className="relative z-10 space-y-4">
              <Marquee play={marqueeInView} pauseOnHover speed={42} gradient={false}>
                {marqueeSkills.map((skill, idx) => (
                  <div
                    key={`${skill.name}-top-${idx}`}
                    className="group mx-2.5 flex min-w-[180px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-lime-400/50 hover:bg-lime-400/10"
                  >
                    <div className="rounded-xl bg-black/40 p-2">
                      {skill.imageUrl ? (
                        <img src={skill.imageUrl} alt={skill.name} loading="lazy" decoding="async" className="h-5 w-5 rounded object-contain" />
                      ) : (
                        <skill.icon className={`text-xl ${skill.color}`} style={skill.style} />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-zinc-200">{skill.name}</p>
                  </div>
                ))}
              </Marquee>

              <Marquee play={marqueeInView} pauseOnHover speed={34} gradient={false} direction="right">
                {[...marqueeSkills].reverse().map((skill, idx) => (
                  <div
                    key={`${skill.name}-bottom-${idx}`}
                    className="group mx-2.5 flex min-w-[180px] items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    {skill.imageUrl ? (
                      <img src={skill.imageUrl} alt={skill.name} loading="lazy" decoding="async" className="h-4 w-4 rounded object-contain" />
                    ) : (
                      <skill.icon className={`text-lg ${skill.color}`} style={skill.style} />
                    )}
                    <p className="text-sm font-semibold text-zinc-200">{skill.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </MagicBentoPanel>
        </BorderGlow>
      </div>
    </section>
  );
};

export default SkillBar;

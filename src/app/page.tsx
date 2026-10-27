"use client";

import confetti from "canvas-confetti";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Camera,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Palette,
  Phone,
  Send,
  Sparkles,
  Terminal,
  Wind,
  X,
} from "lucide-react";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";

const projects = [
  {
    title: "Job Search & Hiring Platform",
    category: "Next.js",
    description:
      "A modern platform connecting job seekers with employers. Features include job searching, application tracking, and posting job vacancies.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    number: "01",
    gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    accent: "text-violet-300",
    liveUrl: "https://ish-beryl.vercel.app/",
    repoUrl: "https://github.com/abdulhamidovaziyodaxon376-cloud",
    visual: "planner",
  },
  {
    title: "Hotel Booking Platform (Travel)",
    category: "React",
    description:
      "An online booking system tailored for travelers. Features quick property search, detailed hotel views, and seamless reservation management.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    number: "02",
    gradient: "from-emerald-400/20 via-teal-400/10 to-transparent",
    accent: "text-emerald-300",
    liveUrl: "https://github.com/abdulhamidovaziyodaxon376-cloud/travel",
    repoUrl: "https://github.com/abdulhamidovaziyodaxon376-cloud/travel",
    visual: "community",
  },
];

const skills = [
  { name: "React", detail: "Interfaces", icon: Code2, color: "text-sky-300" },
  { name: "Next.js", detail: "Web apps", icon: Layers3, color: "text-white" },
  {
    name: "TypeScript",
    detail: "Type safety",
    icon: Braces,
    color: "text-blue-300",
  },
  {
    name: "Tailwind CSS",
    detail: "Styling",
    icon: Wind,
    color: "text-cyan-300",
  },
  {
    name: "Node.js",
    detail: "Backend",
    icon: Terminal,
    color: "text-lime-300",
  },
  {
    name: "PostgreSQL",
    detail: "Data",
    icon: Database,
    color: "text-indigo-300",
  },
  {
    name: "UI / UX",
    detail: "Design",
    icon: Palette,
    color: "text-pink-300",
  },
  {
    name: "Web APIs",
    detail: "Integration",
    icon: Globe2,
    color: "text-emerald-300",
  },
];

const roles = ["Frontend Developer", "Full-Stack Developer", "UI Engineer"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function ProjectPreview({ visual }: { visual: string }) {
  if (visual === "planner") {
    return (
      <div className="relative mx-auto w-[82%] max-w-[330px] rounded-2xl border border-white/10 bg-[#14141d]/95 p-4 shadow-2xl shadow-violet-950/30 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
          </div>
          <span className="text-[9px] text-white/40">MONDAY, MAY 12</span>
        </div>
        <div className="mt-5 flex gap-3">
          <div className="w-1/3 space-y-2">
            <div className="h-2 w-4/5 rounded bg-white/15" />
            <div className="h-2 w-full rounded bg-white/5" />
            <div className="h-2 w-3/4 rounded bg-white/5" />
          </div>
          <div className="flex-1 rounded-lg border border-violet-300/15 bg-violet-400/10 p-3">
            <div className="h-2 w-2/3 rounded bg-violet-200/40" />
            <div className="mt-3 h-2 w-full rounded bg-white/10" />
            <div className="mt-1.5 h-2 w-4/5 rounded bg-white/10" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/[0.04] p-2.5">
          <span className="h-3 w-3 rounded border border-emerald-300/60" />
          <span className="h-1.5 w-2/3 rounded bg-white/20" />
          <span className="ml-auto h-1.5 w-1/6 rounded bg-violet-300/40" />
        </div>
      </div>
    );
  }

  if (visual === "community") {
    return (
      <div className="relative mx-auto w-[82%] max-w-[330px] rounded-2xl border border-white/10 bg-[#101918]/95 p-4 shadow-2xl shadow-emerald-950/30 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-2.5 border-b border-white/[0.07] pb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-300/15 text-[10px] font-bold text-emerald-200">
            g.
          </div>
          <span className="text-[10px] font-medium text-white/75">
            makers you might like
          </span>
          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-300" />
        </div>
        {[
          ["MC", "Mia Chen", "Making tiny worlds"],
          ["JR", "Jamie Rivera", "Building in public"],
        ].map(([initials, name, bio]) => (
          <div
            className="mt-3 flex items-center gap-2.5 rounded-xl bg-white/[0.035] p-2.5"
            key={name}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-500/20 text-[9px] text-emerald-100">
              {initials}
            </div>
            <div>
              <p className="text-[10px] font-medium text-white/80">{name}</p>
              <p className="mt-0.5 text-[9px] text-white/40">{bio}</p>
            </div>
            <span className="ml-auto rounded-md border border-emerald-200/20 px-2 py-1 text-[8px] text-emerald-200">
              Follow
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[82%] max-w-[330px] overflow-hidden rounded-2xl border border-white/10 bg-[#191711]/95 p-4 shadow-2xl shadow-amber-950/30 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center justify-between text-[9px] text-white/45">
        <span>MONO® — CREATIVE STUDIO</span>
        <span>MENU +</span>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl bg-gradient-to-br from-[#a98961] via-[#786d5e] to-[#29251f] px-4 py-6">
        <div className="text-center font-serif text-[26px] italic tracking-tight text-[#f4eddf]">
          Less, but
          <br />
          <span className="text-[#d8c3a4]">better.</span>
        </div>
        <div className="mx-auto mt-4 h-px w-8 bg-white/40" />
        <p className="mt-2 text-center text-[8px] tracking-[0.18em] text-white/70">
          DESIGN WITH INTENTION
        </p>
      </div>
      <div className="mt-3 flex justify-between text-[8px] text-white/40">
        <span>Independent by nature.</span>
        <span>Scroll to explore ↓</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;
    const delay = isDeleting ? 45 : isComplete ? 1500 : 85;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
      } else if (isDeleting && !isEmpty) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
      } else if (isComplete) {
        setIsDeleting(true);
      } else {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedRole]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:abdulhamidovaziyodaxon376@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 68,
      origin: { y: 0.72 },
      colors: ["#a78bfa", "#67e8f9", "#86efac", "#f9a8d4"],
      disableForReducedMotion: true,
    });
  }

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090d] text-[#f3f1f8] selection:bg-violet-300/30 selection:text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 6rem;
        }
        body {
          background: #09090d;
        }
        ::selection {
          background: rgba(167, 139, 250, 0.35);
          color: white;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[760px] overflow-hidden">
        <div className="absolute -top-56 left-[42%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[140px]" />
        <div className="absolute right-[-15%] top-40 h-[390px] w-[390px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, -20, 0],
                  y: [0, 25, 50, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-8%] top-72 h-64 w-64 rounded-full bg-fuchsia-500/[0.07] blur-[110px]"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090d]/75 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Abdulhamidova Ziyodaxon, home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-300/[0.08] font-mono text-sm font-bold text-violet-200 transition group-hover:border-violet-300/40">
              az
            </span>
            <span className="text-sm font-semibold tracking-tight text-white/90">
              Abdulhamidova{" "}
              <span className="text-white/40">Ziyodaxon</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] text-white/55 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 transition hover:border-violet-300/30 hover:bg-violet-300/[0.08] sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80 md:hidden"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/[0.06] bg-[#0c0b11] md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
                {[
                  ["About", "#about"],
                  ["Projects", "#projects"],
                  ["Skills", "#skills"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeMobileMenu}
                    className="border-b border-white/[0.05] py-3.5 text-sm text-white/70 last:border-0"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl scroll-mt-24 flex-col justify-center px-5 pb-24 pt-20 sm:px-8 sm:pb-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-3 py-1.5 text-[11px] tracking-wide text-emerald-200/90">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Available for select projects
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-3 text-sm font-medium text-white/50">
                Hey there, I&apos;m
              </p>
              <h1 className="max-w-3xl text-[clamp(3.4rem,9vw,7.4rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
                Abdulhamidova
                <br />
                <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">
                  Ziyodaxon.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex min-h-7 items-center gap-2 text-base text-white/65 sm:text-lg">
                <span className="font-mono text-violet-300" aria-hidden="true">
                  &gt;
                </span>
                <span className="font-medium text-white/85" aria-live="polite">
                  {typedRole}
                </span>
                <span
                  aria-hidden="true"
                  className="h-[18px] w-px animate-pulse bg-violet-300/80"
                />
              </div>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/50 sm:text-base">
                I build thoughtful digital experiences — where clean code,
                playful details, and good design meet.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#101015] transition hover:bg-violet-100"
                >
                  Explore my work
                  <ArrowDownRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-[13px] font-medium text-white/75 transition hover:border-white/25 hover:text-white"
                >
                  Get in touch <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-3">
                <span className="mr-1 text-[11px] text-white/35">Find me</span>
                <a
                  href="https://github.com/abdulhamidovaziyodaxon376-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/60 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  <Code2 size={15} />
                </a>
                <a
                  href="https://instagram.com/abdlhmdva.l7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile (opens in a new tab)"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-[17px] font-medium text-white/60 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  ◎
                </a>
                <a
                  href="https://t.me/abdulhamidova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram profile (opens in a new tab)"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/60 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  <Send size={14} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[390px]" delay={0.25}>
            <div className="absolute inset-8 rounded-full bg-violet-500/15 blur-[80px]" />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[28px] border border-white/[0.1] bg-gradient-to-br from-white/[0.09] to-white/[0.015] p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[21px] border border-white/[0.07] bg-[#111017]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
                    <span className="h-2 w-2 rounded-full bg-[#6ee7a8]" />
                  </div>
                  <span className="font-mono text-[10px] text-white/35">
                    developer.tsx
                  </span>
                  <Code2 size={14} className="text-white/35" />
                </div>
                <div className="space-y-4 px-5 py-6 font-mono text-[11px] leading-6 sm:px-7 sm:py-8 sm:text-xs">
                  <p>
                    <span className="text-fuchsia-300">const</span>{" "}
                    <span className="text-sky-200">developer</span>{" "}
                    <span className="text-white/40">=</span>{" "}
                    <span className="text-amber-200">{"{"}</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-violet-200">name</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-emerald-200">
                      &quot;Abdulhamidova Ziyodaxon&quot;
                    </span>
                    <span className="text-white/40">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-violet-200">focus</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-emerald-200">
                      &quot;the little details&quot;
                    </span>
                    <span className="text-white/40">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-violet-200">stack</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-amber-200">[</span>
                    <span className="text-emerald-200">&quot;React&quot;</span>
                    <span className="text-white/40">, </span>
                    <span className="text-emerald-200">&quot;Next.js&quot;</span>
                    <span className="text-amber-200">]</span>
                    <span className="text-white/40">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-violet-200">isCurious</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-sky-200">true</span>
                  </p>
                  <p>
                    <span className="text-amber-200">{"}"}</span>
                    <span className="text-white/40">;</span>
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[10px] text-white/40">
                    <Sparkles size={12} className="text-violet-300" />
                    <span>Shipping good things to the web.</span>
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -left-5 top-12 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#14131b]/90 px-3 py-2.5 shadow-xl backdrop-blur-lg sm:flex"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-200">
                <Check size={14} />
              </span>
              <span className="text-[10px] font-medium text-white/70">
                pixel-perfect
              </span>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#14131b]/90 px-3 py-2.5 shadow-xl backdrop-blur-lg sm:flex"
            >
              <span className="text-violet-200">
                <Sparkles size={15} />
              </span>
              <span className="text-[10px] font-medium text-white/70">
                made with care
              </span>
            </motion.div>
          </Reveal>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/35 transition hover:text-white/70 sm:flex"
        >
          Scroll to explore <ArrowDown size={12} />
        </a>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-24">
          <Reveal>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
              A little about me
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Thoughtful by
              <br />
              <span className="text-white/40">design.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-[15px] leading-7 text-white/55 sm:text-base sm:leading-8">
              I&apos;m a developer who cares about how things work and how they
              feel. I turn complex ideas into clear, fast, and friendly web
              experiences — partnering with good people from the first sketch
              all the way to launch.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["03+", "Years building"],
                ["12", "Projects shipped"],
                ["100%", "Curiosity"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-semibold tracking-tight text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
      >
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Things I&apos;ve made<span className="text-violet-300">.</span>
            </h2>
            <p className="mt-3 text-sm text-white/45">
              A few recent projects, made with intention.
            </p>
          </div>
          <div
            aria-label="Filter projects"
            className="flex w-fit rounded-full border border-white/[0.08] bg-white/[0.025] p-1"
          >
            {["All", "React", "Next.js"].map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full px-4 py-2 text-[11px] transition ${
                  activeFilter === filter
                    ? "bg-white text-[#111018]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101016] transition-colors hover:border-white/[0.16] ${
                  index === 0 && filteredProjects.length === 3
                    ? "md:col-span-2 md:grid md:grid-cols-[1fr_0.9fr]"
                    : ""
                }`}
              >
                <div
                  className={`relative flex min-h-[245px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} p-7 sm:min-h-[275px]`}
                >
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.11)_0.7px,transparent_0.7px)] [background-size:16px_16px]" />
                  <div className="absolute right-5 top-5 font-mono text-[10px] text-white/30">
                    /{project.number}
                  </div>
                  <ProjectPreview visual={project.visual} />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.15em] ${project.accent}`}
                    >
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live preview in a new tab`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] leading-6 text-white/45">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[9px] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-3 py-2 text-[11px] font-medium text-violet-100 transition hover:border-violet-200/40 hover:bg-violet-300/[0.14]"
                    >
                      Live Demo <ArrowUpRight size={12} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-2 text-[11px] font-medium text-white/65 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      <Code2 size={13} /> GitHub Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-8 text-center">
          <a
            href="https://github.com/abdulhamidovaziyodaxon376-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/45 transition hover:text-white/80"
          >
            View on GitHub <ArrowRight size={13} />
          </a>
        </Reveal>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <Reveal className="mb-10">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-300/80">
              The toolbox
            </p>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Tools of the trade<span className="text-violet-300">.</span>
              </h2>
              <p className="text-sm text-white/40">
                The right tool for the right problem.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.name} delay={index * 0.04}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="group h-full rounded-xl border border-white/[0.07] bg-[#101016]/80 p-4 transition-colors hover:border-violet-300/20 hover:bg-violet-300/[0.035] sm:p-5"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.035] ${skill.color} transition group-hover:border-white/15`}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-4 text-[13px] font-medium text-white/85">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-white/35">
                      {skill.detail}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.1] blur-[130px]" />
        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#171522]/95 via-[#100f18]/95 to-[#11101a]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-indigo-500/[0.12] blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-violet-500/[0.09] blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/90">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.8)]" />
                Let&apos;s connect
              </div>
              <h2 className="max-w-md text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-5xl">
                Let&apos;s make
                <br />
                <span className="bg-gradient-to-r from-violet-200 via-indigo-200 to-sky-200 bg-clip-text text-transparent">
                  something matter.
                </span>
              </h2>
              <p className="mt-5 max-w-sm text-[13px] leading-7 text-white/50">
                Have a project, a question, or just want to say hello? Choose
                whatever way works best for you.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:abdulhamidovaziyodaxon376@gmail.com"
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-violet-300/[0.06] hover:shadow-lg hover:shadow-violet-950/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-400/20 to-indigo-400/[0.08] text-violet-200">
                    <Mail size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-[11px] font-medium text-white/80 transition group-hover:text-white sm:text-xs">
                      abdulhamidovaziyodaxon376@gmail.com
                    </span>
                  </span>
                </a>
                <a
                  href="tel:+998908565689"
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-violet-300/[0.06] hover:shadow-lg hover:shadow-violet-950/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-300/15 bg-gradient-to-br from-indigo-400/20 to-violet-400/[0.08] text-indigo-200">
                    <Phone size={17} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      Phone
                    </span>
                    <span className="mt-1 block text-xs font-medium text-white/80 transition group-hover:text-white">
                      +998 90 856 56 89
                    </span>
                  </span>
                </a>
                <a
                  href="https://t.me/abdulhamidova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram (opens in a new tab)"
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-sky-300/[0.05] hover:shadow-lg hover:shadow-sky-950/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-gradient-to-br from-sky-400/20 to-indigo-400/[0.08] text-sky-200">
                    <Send size={16} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      Telegram
                    </span>
                    <span className="mt-1 block text-xs font-medium text-white/80 transition group-hover:text-white">
                      @abdulhamidova
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                  />
                </a>
                <a
                  href="https://instagram.com/abdlhmdva.l7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/25 hover:bg-fuchsia-300/[0.05] hover:shadow-lg hover:shadow-fuchsia-950/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-400/20 to-violet-400/[0.08] text-fuchsia-200">
                    <Camera size={17} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      Instagram
                    </span>
                    <span className="mt-1 block text-xs font-medium text-white/80 transition group-hover:text-white">
                      @abdlhmdva.l7
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                  />
                </a>
                <a
                  href="https://github.com/abdulhamidovaziyodaxon376-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-violet-300/[0.06] hover:shadow-lg hover:shadow-violet-950/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-400/20 to-indigo-400/[0.08] text-violet-200">
                    <Code2 size={17} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                      GitHub
                    </span>
                    <span className="mt-1 block text-xs font-medium text-white/80 transition group-hover:text-white">
                      View my profile
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <form
                onSubmit={handleContactSubmit}
                className="rounded-[24px] border border-white/[0.09] bg-[#0b0a12]/65 p-5 shadow-xl shadow-black/20 backdrop-blur-xl sm:p-7"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                    Send a message
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/40">
                    I&apos;d love to hear what you&apos;re working on.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium text-white/60">
                      Your name
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[13px] text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/[0.15] focus:border-violet-300/50 focus:bg-violet-300/[0.04] focus:ring-4 focus:ring-violet-400/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium text-white/60">
                      Email address
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[13px] text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/[0.15] focus:border-violet-300/50 focus:bg-violet-300/[0.04] focus:ring-4 focus:ring-violet-400/10"
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-2 block text-[11px] font-medium text-white/60">
                    A little about your project
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me what you're thinking..."
                    className="w-full resize-y rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[13px] leading-6 text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/[0.15] focus:border-violet-300/50 focus:bg-violet-300/[0.04] focus:ring-4 focus:ring-violet-400/10"
                  />
                </label>
                <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p
                    aria-live="polite"
                    className="min-h-4 text-[10px] leading-4 text-white/40"
                  >
                    {formSubmitted
                      ? "Your email app should open with your message ready to send."
                      : "Your message opens in your email app — no backend required."}
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-violet-500 to-indigo-500 px-5 py-3.5 text-[12px] font-semibold text-white shadow-lg shadow-violet-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-400 hover:shadow-xl hover:shadow-violet-900/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300/30 sm:w-auto"
                  >
                    Send Message
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-[#09080d]/55">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
            <a href="#home" className="text-sm font-semibold tracking-[-0.03em] text-white/80 transition hover:text-white">
              Abdulhamidova{" "}
              <span className="text-white/45">Ziyodaxon</span>
              <span className="text-violet-300">.</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://t.me/abdulhamidova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram (opens in a new tab)"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:border-sky-300/25 hover:bg-sky-300/[0.08] hover:text-sky-200"
              >
                <Send size={15} />
              </a>
              <a
                href="https://instagram.com/abdlhmdva.l7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:border-fuchsia-300/25 hover:bg-fuchsia-300/[0.08] hover:text-fuchsia-200"
              >
                <Camera size={15} />
              </a>
              <a
                href="mailto:abdulhamidovaziyodaxon376@gmail.com"
                aria-label="Email Abdulhamidova Ziyodaxon"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:border-violet-300/25 hover:bg-violet-300/[0.08] hover:text-violet-200"
              >
                <Mail size={15} />
              </a>
              <a
                href="tel:+998908565689"
                aria-label="Call +998 90 856 56 89"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:border-violet-300/25 hover:bg-violet-300/[0.08] hover:text-violet-200"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://github.com/abdulhamidovaziyodaxon376-cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition hover:border-violet-300/25 hover:bg-violet-300/[0.08] hover:text-violet-200"
              >
                <Code2 size={15} />
              </a>
            </div>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:border-white/20 hover:text-white"
            >
              <ArrowUpRight size={14} className="-rotate-45" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] py-4 text-[10px] text-white/30 sm:flex-row">
            <p>© 2026 Abdulhamidova Ziyodaxon. All rights reserved.</p>
            <p>Designed &amp; built with care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

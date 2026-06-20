import React, { useEffect, useMemo, useRef, useState } from 'react'
import project1 from "../assets/project1.png";
import Project_1 from "../assets/Project_1.png";
import project2 from "../assets/project2.png";
import Project_2 from "../assets/Project_2.png";
import Project_3 from "../assets/Project_3.png";
import project3 from "../assets/project3.png";
import { AnimatePresence, useMotionValueEvent, useScroll, motion, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from "lucide-react";

const useIsMobile = (query = "(max-width: 767px)") => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.matchMedia(query).matches
    );
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        const handler = (e) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        setIsMobile(mql.matches);
        return () => mql.removeEventListener("change", handler);
    }, [query]);
    return isMobile;
};

const projects = [
    {
        title: "Oco Connect",
        subtitle: "Dashboard Platform",
        link: "https://devhome.ococonnect.com/dashboard/",
        accent: "#1cd8d2",
        tag: "Web App",
        index: "01",
    },
    {
        title: "Polymer Cluster",
        subtitle: "Interactive Map",
        link: "https://polymer-connect.com/?lat=51.93716&lng=-7.61149&zoom=5.39",
        accent: "#a78bfa",
        tag: "GIS Platform",
        index: "02",
    },
    {
        title: "Mountain Trade",
        subtitle: "Trade Network",
        link: "https://mtn-web.proquantic.work/",
        accent: "#f472b6",
        tag: "B2B Platform",
        index: "03",
    },
];

const mobileImages = [project1, project2, project3];
const desktopImages = [Project_1, Project_2, Project_3];

/* ── Desktop: full scroll-snap experience ── */
function DesktopProjects() {
    const sceneRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sceneRef,
        offset: ["start start", "end end"],
    });

    const thresholds = projects.map((_, i) => (i + 1) / projects.length);
    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = thresholds.findIndex((t) => v <= t);
        setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
    });

    const active = projects[activeIndex];

    return (
        <section
            id="projects"
            ref={sceneRef}
            style={{ height: `${100 * projects.length}vh`, position: 'relative', color: '#fff' }}
        >
            <div style={{
                position: 'sticky', top: 0, height: '100vh',
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                background: '#080808',
            }}>
                {/* Ambient color blob that shifts per project */}
                <motion.div
                    animate={{ background: `radial-gradient(ellipse 60% 60% at 70% 50%, ${active.accent}18 0%, transparent 70%)` }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
                />

                {/* Header */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    padding: '48px 80px 0',
                    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexShrink: 0,
                }}>
                    <h2 style={{ fontSize: '48px', fontWeight: 400, letterSpacing: '-1.5px', margin: 0, color: '#fff' }}>
                        My Work
                    </h2>
                    <span style={{ fontSize: '12px', color: active.accent, fontFamily: 'monospace', letterSpacing: '2px', textTransform: 'uppercase', transition: 'color 0.4s' }}>
                        {activeIndex + 1} / {projects.length}
                    </span>
                </div>

                {/* Divider */}
                <div style={{ margin: '24px 80px', height: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0, position: 'relative', zIndex: 2 }} />

                {/* Main content: project info left + image right */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 80px', gap: '60px', position: 'relative', zIndex: 2, minHeight: 0 }}>

                    {/* LEFT: Project info */}
                    <div style={{ width: '320px', flexShrink: 0 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Index */}
                                <div style={{ fontSize: '11px', color: active.accent, fontFamily: 'monospace', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                    Project {active.index}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: 'clamp(32px, 3.5vw, 52px)',
                                    fontWeight: 700,
                                    color: '#fff',
                                    letterSpacing: '-1.5px',
                                    lineHeight: 1.05,
                                    margin: '0 0 10px',
                                }}>
                                    {active.title}
                                </h3>

                                {/* Subtitle */}
                                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: '28px' }}>
                                    {active.subtitle}
                                </div>

                                {/* Tag pill */}
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    padding: '6px 14px', borderRadius: '20px',
                                    background: `${active.accent}14`,
                                    border: `1px solid ${active.accent}35`,
                                    fontSize: '11px', color: active.accent,
                                    fontFamily: 'monospace', letterSpacing: '1px',
                                    marginBottom: '40px',
                                    transition: 'all 0.3s',
                                }}>
                                    {active.tag}
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px' }} />

                                {/* Progress dots */}
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
                                    {projects.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ width: i === activeIndex ? '24px' : '6px', background: i === activeIndex ? active.accent : 'rgba(255,255,255,0.2)' }}
                                            transition={{ duration: 0.3 }}
                                            style={{ height: '6px', borderRadius: '3px' }}
                                        />
                                    ))}
                                </div>

                                {/* CTA */}
                                <motion.a
                                    href={active.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        padding: '13px 24px', borderRadius: '14px',
                                        background: `linear-gradient(135deg, ${active.accent}, ${active.accent}99)`,
                                        color: '#000', fontWeight: 700, fontSize: '14px',
                                        textDecoration: 'none', letterSpacing: '0.2px',
                                        boxShadow: `0 6px 24px ${active.accent}40`,
                                        transition: 'background 0.4s, box-shadow 0.4s',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: '-60%', width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none' }} />
                                    View Project
                                    <ArrowUpRight size={15} />
                                </motion.a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Image */}
                    <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', minWidth: 0 }}>
                        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 200px)' }}>
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    animate={{ opacity: activeIndex === idx ? 1 : 0, scale: activeIndex === idx ? 1 : 0.96, y: activeIndex === idx ? 0 : 24 }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        position: 'absolute', inset: 0,
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)`,
                                    }}
                                >
                                    <img
                                        src={desktopImages[idx]}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                        loading="lazy"
                                    />
                                    {/* Image overlay */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 40%)',
                                        pointerEvents: 'none',
                                    }} />
                                    {/* Accent border glow */}
                                    <motion.div
                                        animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                                        style={{
                                            position: 'absolute', inset: 0,
                                            borderRadius: '24px',
                                            boxShadow: `inset 0 0 0 1px ${projects[idx].accent}30`,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom scroll hint */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    padding: '16px 80px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    flexShrink: 0,
                }}>
                    <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}

/* ── Mobile: vertical card stack ── */
function MobileProjects() {
    return (
        <section id="projects" style={{ background: '#080808', color: '#fff', padding: '60px 0 40px' }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ padding: '0 22px 32px' }}
            >
                <div style={{ fontSize: '9px', color: '#1cd8d2', fontFamily: 'monospace', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Selected Work
                </div>
                <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-1.5px', margin: 0, color: '#fff', lineHeight: 1.1 }}>
                    My Projects
                </h2>
            </motion.div>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 16px' }}>
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            position: 'relative',
                        }}
                    >
                        {/* Accent top bar */}
                        <div style={{ height: '2px', background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

                        {/* Image */}
                        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                            <img
                                src={mobileImages[idx]}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.9) 100%)', pointerEvents: 'none' }} />

                            {/* Index badge */}
                            <div style={{
                                position: 'absolute', top: '12px', left: '12px',
                                padding: '4px 10px', borderRadius: '20px',
                                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                                border: `1px solid ${project.accent}40`,
                                fontSize: '9px', color: project.accent, fontFamily: 'monospace', letterSpacing: '1.5px',
                            }}>
                                {project.index}
                            </div>
                        </div>

                        {/* Info */}
                        <div style={{ padding: '18px 18px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: '#fff', margin: 0, lineHeight: 1.2 }}>
                                    {project.title}
                                </h3>
                                {/* Tag */}
                                <div style={{
                                    flexShrink: 0, marginLeft: '10px',
                                    padding: '3px 10px', borderRadius: '20px',
                                    background: `${project.accent}12`, border: `1px solid ${project.accent}30`,
                                    fontSize: '9px', color: project.accent, fontFamily: 'monospace', letterSpacing: '1px', whiteSpace: 'nowrap',
                                }}>
                                    {project.tag}
                                </div>
                            </div>

                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: '18px' }}>
                                {project.subtitle}
                            </div>

                            {/* CTA */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                                    padding: '10px 20px', borderRadius: '12px',
                                    background: `linear-gradient(135deg, ${project.accent}, ${project.accent}88)`,
                                    color: '#000', fontWeight: 700, fontSize: '12px',
                                    textDecoration: 'none', letterSpacing: '0.3px',
                                    boxShadow: `0 4px 16px ${project.accent}35`,
                                }}
                            >
                                View Project
                                <ArrowUpRight size={13} />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const Projects = () => {
    const isMobile = useIsMobile();
    return isMobile ? <MobileProjects /> : <DesktopProjects />;
};

export default Projects;
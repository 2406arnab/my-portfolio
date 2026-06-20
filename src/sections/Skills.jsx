import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { DiNodejsSmall } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaDatabase } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import {
    SiAngular,
    SiMongodb,
    SiTailwindcss, SiTypescript, SiNextdotjs
} from 'react-icons/si';

export default function Skills() {

    const categories = [
        {
            label: "Frontend",
            skills: [
                { icon: <FaReact />, name: "React" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiAngular />, name: "Angular" },
            ],
        },
        {
            label: "Backend",
            skills: [
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <DiNodejsSmall />, name: "Node.js" },
            ],
        },
        {
            label: "Database",
            skills: [
                { icon: <FaDatabase />, name: "SQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
            ],
        },
    ];

    const allSkills = categories.flatMap(c => c.skills);
    const total = allSkills.length;

    // ── desktop animation state ───────────────────────────────
    const [typed, setTyped] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [count, setCount] = useState(0);
    const [activeIdx, setActiveIdx] = useState(-1);
    const [shimmerIdx, setShimmerIdx] = useState(-1);
    const loopRef = useRef(null);
    const flatIdx = useRef(0);

    useEffect(() => {
        // Phase 1: type heading
        const fullTitle = "Skills";
        let i = 0;
        const typer = setInterval(() => {
            i++;
            setTyped(fullTitle.slice(0, i));
            if (i >= fullTitle.length) {
                clearInterval(typer);
                setTimeout(() => setShowCursor(false), 800);
                // Phase 2: count up
                let n = 0;
                const counter = setInterval(() => {
                    n++;
                    setCount(n);
                    if (n >= total) {
                        clearInterval(counter);
                        // Phase 3: pill scan loop
                        loopRef.current = setInterval(() => {
                            const idx = flatIdx.current % total;
                            setShimmerIdx(idx);
                            setActiveIdx(idx);
                            setTimeout(() => setActiveIdx(i => i === idx ? -1 : i), 900);
                            flatIdx.current++;
                        }, 280);
                    }
                }, 60);
            }
        }, 90);

        return () => {
            clearInterval(typer);
            if (loopRef.current) clearInterval(loopRef.current);
        };
    }, []);

    // flat pill index tracker across categories
    let globalIdx = 0;

    // ── mobile spiral refs (unchanged) ───────────────────────
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => { },
            { threshold: [0.1] }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="w-full relative bg-[#080b10] text-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px] animate-pulse delay-500" />
            </div>

            {/* ========================= */}
            {/* DESKTOP — ANIMATED TABLE  */}
            {/* ========================= */}
            <div className="hidden md:block relative z-10 px-16 py-16 max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-end justify-between pb-6 border-b border-white/[0.08]">
                    <div>
                        <p className="text-[11px] tracking-[0.12em] text-[#1cd8d2] uppercase mb-2">
                            Technical expertise
                        </p>
                        <div className="flex items-center">
                            <h2 className="text-5xl font-bold text-white leading-none">
                                {typed}
                            </h2>
                            {showCursor && (
                                <span className="inline-block w-[3px] h-10 bg-[#1cd8d2] ml-1.5 animate-[blink_1s_step-end_infinite]" />
                            )}
                        </div>
                    </div>
                    <span
                        className={`text-6xl font-bold leading-none select-none tabular-nums transition-colors duration-300 ${count >= total ? "text-[#1cd8d2]/20" : "text-white/[0.06]"
                            }`}
                    >
                        {String(count).padStart(2, "0")}
                    </span>
                </div>

                {/* Category rows */}
                {categories.map((cat, ci) => (
                    <div
                        key={ci}
                        className="grid border-b border-white/[0.07] py-5"
                        style={{ gridTemplateColumns: "140px 1fr" }}
                    >
                        <span className="text-[11px] tracking-[0.1em] text-white/30 uppercase pt-1">
                            {cat.label}
                        </span>

                        <div className="flex flex-wrap gap-2.5">
                            {cat.skills.map((skill, si) => {
                                const myIdx = globalIdx++;
                                const isActive = activeIdx === myIdx;
                                const isShimmer = shimmerIdx === myIdx;

                                return (
                                    <span
                                        key={si}
                                        className={`
                                            relative inline-flex items-center gap-2
                                            px-4 py-2 rounded-full overflow-hidden
                                            text-[13px] font-medium cursor-default
                                            transition-all duration-300
                                            ${isActive
                                                ? "border border-[#1cd8d2]/60 bg-[#1cd8d2]/[0.08] text-[#1cd8d2]"
                                                : "border border-white/10 bg-white/[0.04] text-white/70"
                                            }
                                        `}
                                    >
                                        {/* Shimmer sweep */}
                                        <span
                                            className={`
                                                absolute top-0 left-0 w-full h-full
                                                bg-gradient-to-r from-transparent via-[#1cd8d2]/20 to-transparent
                                                -translate-x-full
                                                ${isShimmer ? "animate-[shimmer_0.6s_ease_forwards]" : ""}
                                            `}
                                        />
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full bg-[#1cd8d2] flex-shrink-0 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"
                                                }`}
                                        />
                                        <span className="text-base leading-none">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* ========================= */}
            {/* MOBILE SPIRAL (unchanged) */}
            {/* ========================= */}
            <div className="md:hidden flex flex-col items-center py-8">
                <p className="text-[11px] tracking-[0.12em] text-[#1cd8d2] uppercase mb-2 z-10">
                    Technical expertise
                </p>
                <motion.h2
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10 mb-1"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <p className="mb-4 text-white/50 text-xs z-10 text-center px-4 uppercase tracking-widest">
                    Modern Applications · Modern Technologies
                </p>

                <div className="relative flex items-center justify-center w-full h-[360px]">
                    <div className="absolute w-[140px] h-[140px] rounded-full bg-[#1cd8d2]/10 blur-[50px]" />

                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute z-20 w-24 h-24 rounded-full border border-[#1cd8d2]/30 bg-white/[0.05] backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <div className="text-[#1cd8d2] text-2xl mb-1"><GrTechnology /></div>
                        <p className="text-[10px] text-center font-medium tracking-wide">Tech Stack</p>
                    </motion.div>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        className="relative w-[260px] h-[260px]"
                    >
                        {allSkills.map((skill, index) => {
                            const angle = (360 / allSkills.length) * index;
                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2"
                                    style={{ transform: `rotate(${angle}deg) translate(95px) rotate(-${angle}deg)` }}
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                            scale: [1, 1, 1.22, 1],
                                            opacity: [0.6, 0.6, 1, 0.6],
                                            boxShadow: ["0 0 0px rgba(28,216,210,0)", "0 0 0px rgba(28,216,210,0)", "0 0 35px rgba(28,216,210,0.7)", "0 0 0px rgba(28,216,210,0)"]
                                        }}
                                        transition={{
                                            duration: allSkills.length * 1.2, repeat: Infinity, ease: "easeInOut", delay: index * 1.1,
                                            y: { duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                        className="w-[60px] h-[60px] rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex flex-col items-center justify-center text-[#1cd8d2]"
                                    >
                                        <div className="text-xl">{skill.icon}</div>
                                        <p className="text-[8px] mt-1 text-center text-white leading-tight px-1">{skill.name}</p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
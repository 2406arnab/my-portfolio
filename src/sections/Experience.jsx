import { useScroll, useTransform, motion, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, Calendar, X, MapPin, TrendingUp, Code2, Users, Zap, Globe } from 'lucide-react';

const experiences = [
    {
        role: "Academic Intern",
        company: "Persistent Systems",
        duration: "2022 – 2023",
        index: "01",
        location: "Pune, India",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        highlight: "First production deployment",
        description:
            "Gained hands-on exposure across the full web development stack, collaborating with senior engineers on real client projects and shipping production features.",
        image: "https://careers.persistent.com/images/site/persistent-careers-opportunities.jpg",
    },
    {
        role: "Software Engineer",
        company: "Persistent Systems",
        duration: "2023 – 2024",
        index: "02",
        location: "Pune, India",
        tech: ["React", "Node.js", "TypeScript", "REST APIs"],
        highlight: "+10% user engagement",
        description:
            "Built high-performance web applications with a cross-functional team, maintained codebases with clean architecture, and improved user engagement by 10%.",
        image: "https://careers.persistent.com/images/site/persistent-careers-opportunities.jpg",
    },
    {
        role: "Junior Software Engineer",
        company: "Sentientgeeks Pvt Ltd",
        duration: "2024 – Present",
        index: "04",
        location: "Remote",
        tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        highlight: "3 product launches",
        description:
            "Engineered the frontend of 3 custom product designs using Next.js and TypeScript, implementing scalable data binding patterns to meet high-demand business requirements. Made real time client review experience.",
        image: "https://content.jdmagicbox.com/comp/kolkata/d6/033pxx33.xx33.220211091125.v9d6/catalogue/sentientgeeks-software-and-consultancy-pvt-ltd-salt-lake-city-sector-5-kolkata-computer-software-developers-ol4pdot2b7.jpg",
    },
];

const techIconMap = {
    "React": <Code2 size={11} />,
    "Next.js": <Globe size={11} />,
    "TypeScript": <Zap size={11} />,
    "Node.js": <TrendingUp size={11} />,
    "React Native": <Users size={11} />,
};

// ── Centered Hover Modal ──
function ExperienceModal({ exp, onClose }) {
    return (
        <AnimatePresence>
            {exp && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.72)',
                            backdropFilter: 'blur(12px)',
                            zIndex: 1000,
                            cursor: 'pointer',
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.82, x: '-50%', y: 'calc(-50% + 24px)' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.88, x: '-50%', y: 'calc(-50% + 16px)' }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: 1001,
                            width: '680px',
                            maxWidth: '90vw',
                            borderRadius: '28px',
                            overflow: 'hidden',
                            background: '#0f0f0f',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 40px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(28,216,210,0.08)',
                        }}
                    >
                        {/* Image Header */}
                        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                            <motion.img
                                src={exp.image}
                                alt={exp.company}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'brightness(0.55)',
                                }}
                            />

                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent 20%, rgba(15,15,15,0.95) 100%)',
                            }} />

                            {/* Index badge */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '24px',
                                fontSize: '11px',
                                fontFamily: 'monospace',
                                color: '#1cd8d2',
                                background: 'rgba(28,216,210,0.12)',
                                border: '1px solid rgba(28,216,210,0.25)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                letterSpacing: '2px',
                            }}>
                                {exp.index}
                            </div>

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '50%',
                                    width: '34px',
                                    height: '34px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#fff',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            >
                                <X size={16} />
                            </button>

                            {/* Floating role on image */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '24px',
                                right: '24px',
                            }}>
                                <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', fontFamily: 'Georgia, serif', lineHeight: 1.2 }}>
                                    {exp.role}
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '24px 28px 28px' }}>

                            {/* Meta row */}
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                                    <Building2 size={13} color="#ec4899" />
                                    <span style={{ fontStyle: 'italic' }}>{exp.company}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace' }}>
                                    <Calendar size={12} color="#a855f7" />
                                    {exp.duration}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                                    <MapPin size={12} color="#1cd8d2" />
                                    {exp.location}
                                </div>
                            </div>

                            {/* Highlight chip */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                background: 'linear-gradient(90deg, rgba(28,216,210,0.12), rgba(168,85,247,0.1))',
                                border: '1px solid rgba(28,216,210,0.2)',
                                borderRadius: '20px',
                                padding: '6px 16px',
                                fontSize: '11px',
                                color: '#1cd8d2',
                                fontFamily: 'monospace',
                                marginBottom: '18px',
                                letterSpacing: '0.5px',
                            }}>
                                <TrendingUp size={11} />
                                {exp.highlight}
                            </div>

                            {/* Divider */}
                            <div style={{
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(236,72,153,0.4), transparent)',
                                marginBottom: '18px',
                            }} />

                            {/* Description */}
                            <p style={{
                                fontSize: '14px',
                                color: 'rgba(255,255,255,0.7)',
                                lineHeight: 1.85,
                                margin: '0 0 22px',
                            }}>
                                {exp.description}
                            </p>

                            {/* Tech stack */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'monospace' }}>Stack</span>
                                {exp.tech.map((t, i) => (
                                    <motion.div
                                        key={t}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + i * 0.06, duration: 0.3 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            padding: '5px 11px',
                                            fontSize: '11px',
                                            color: 'rgba(255,255,255,0.6)',
                                            fontFamily: 'monospace',
                                        }}
                                    >
                                        <span style={{ color: '#1cd8d2' }}>{techIconMap[t] || <Code2 size={11} />}</span>
                                        {t}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Desktop: Spine fill ──
function SpineFill({ scrollYProgress }) {
    const rawProg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const prog = useSpring(rawProg, { stiffness: 60, damping: 20 });
    return (
        <motion.div style={{
            position: 'absolute', left: 0, top: 0,
            width: prog, height: '100%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))',
            borderRadius: '2px',
        }} />
    );
}

function ExpCardDesktop({ exp, scrollYProgress, triggerStart, above, onHover }) {
    const FADE = 0.07;
    const s = triggerStart;
    const e = Math.min(s + FADE, 0.98);

    const rawOp = useTransform(scrollYProgress, [s, e], [0, 1], { clamp: true });
    const opacity = useSpring(rawOp, { stiffness: 120, damping: 20 });
    const rawY = useTransform(scrollYProgress, [s, e], [above ? 28 : -28, 0], { clamp: true });
    const y = useSpring(rawY, { stiffness: 120, damping: 20 });
    const rawDotSize = useTransform(scrollYProgress, [s, e], [0, 16], { clamp: true });
    const dotSize = useSpring(rawDotSize, { stiffness: 200, damping: 18 });

    const [hovered, setHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Track real-time opacity value to gate hover interactions
    useEffect(() => {
        const unsubscribe = rawOp.on('change', (v) => {
            setIsVisible(v > 0.5);
        });
        return unsubscribe;
    }, [rawOp]);

    const handleEnter = () => {
        if (!isVisible) return; // card not yet scrolled in — block modal
        setHovered(true);
        onHover(exp);
    };
    const handleLeave = () => {
        setHovered(false);
    };

    return (
        <div style={{ position: 'relative', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
            {/* Timeline dot */}
            <motion.div style={{
                position: 'relative', zIndex: 2,
                width: dotSize, height: dotSize, borderRadius: '50%',
                background: hovered ? '#fff' : '#1cd8d2',
                opacity,
                flexShrink: 0,
                boxShadow: hovered
                    ? '0 0 0 5px rgba(255,255,255,0.25), 0 0 24px rgba(255,255,255,0.5)'
                    : '0 0 0 5px rgba(255,255,255,0.12)',
                transition: 'background 0.3s, box-shadow 0.3s',
            }} />

            {/* Connector */}
            <motion.div style={{
                position: 'absolute',
                [above ? 'bottom' : 'top']: '100%',
                left: '50%', transform: 'translateX(-50%)',
                width: '1px', height: '36px',
                background: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                opacity, transition: 'background 0.3s',
            }} />

            {/* Card — compact, hover triggers modal */}
            <motion.div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                    position: 'absolute',
                    [above ? 'bottom' : 'top']: 'calc(100% + 36px)',
                    left: '50%',
                    translateX: '-50%',
                    width: '100%',
                    maxWidth: '240px',
                    opacity,
                    y,
                    background: hovered
                        ? 'linear-gradient(135deg, rgba(168,85,247,0.14), rgba(23,225,192,0.5))'
                        : 'rgba(255,255,255,0.03)',
                    border: hovered
                        ? '1px solid rgba(255,255,255,0.25)'
                        : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '18px',
                    padding: '20px 22px',
                    cursor: isVisible ? 'pointer' : 'default',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    transition: 'background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                    transform: hovered ? 'translateX(-50%) scale(1.04)' : 'translateX(-50%) scale(1)',
                    boxShadow: hovered
                        ? '0 0 28px rgba(168,85,247,0.18), 0 12px 48px rgba(0,0,0,0.5)'
                        : '0 4px 24px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                }}
            >
                {/* Top glow line */}
                <div style={{
                    position: 'absolute',
                    [above ? 'bottom' : 'top']: 0,
                    left: 0, right: 0, height: '1px',
                    background: hovered
                        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                }} />

                {/* Big index */}
                <div style={{
                    position: 'absolute', bottom: '-6px', right: '14px',
                    fontSize: '60px', fontWeight: 700,
                    color: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                    fontFamily: 'Georgia, serif', pointerEvents: 'none',
                }}>
                    {exp.index}
                </div>

                {/* Duration */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                    <Calendar size={11} color="#a855f7" />
                    {exp.duration}
                </div>

                {/* Role */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '5px' }}>
                    <Briefcase size={14} style={{ color: '#1cd8d2', opacity: 0.85 }} />
                    {exp.role}
                </div>

                {/* Company + Location row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                        <Building2 size={12} style={{ color: '#ec4899', opacity: 0.7 }} />
                        {exp.company}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                        <MapPin size={10} color="#1cd8d2" />
                        {exp.location}
                    </div>
                </div>

                {/* Highlight chip */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: 'linear-gradient(90deg, rgba(28,216,210,0.1), rgba(168,85,247,0.08))',
                    border: '1px solid rgba(28,216,210,0.18)',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '10px',
                    color: '#1cd8d2',
                    fontFamily: 'monospace',
                    letterSpacing: '0.3px',
                    marginBottom: '2px',
                }}>
                    <TrendingUp size={10} />
                    {exp.highlight}
                </div>

                {/* Hover hint */}
                {hovered && (
                    <div style={{
                        marginTop: '10px',
                        fontSize: '10px',
                        color: '#1cd8d2',
                        fontFamily: 'monospace',
                        letterSpacing: '1px',
                        opacity: 0.8,
                    }}>
                        VIEW DETAILS →
                    </div>
                )}
            </motion.div>
        </div>
    );
}

// ── Mobile: Arc design (unchanged) ──
function MobileExperience({ scrollYProgress }) {
    const n = experiences.length;
    const [activeIdx, setActiveIdx] = useState(-1);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (v) => {
            const SCROLL_START = 0.08;
            const SCROLL_END = 0.88;
            const range = SCROLL_END - SCROLL_START;
            if (v < SCROLL_START) {
                setActiveIdx(-1);
            } else {
                const idx = Math.min(Math.floor(((v - SCROLL_START) / range) * n), n - 1);
                setActiveIdx(idx);
            }
        });
        return unsubscribe;
    }, [scrollYProgress, n]);

    const R = 88, CX = 160, CY = 160, STROKE = 6, GAP_DEG = 12;
    const totalDeg = 360 - GAP_DEG * n;
    const segDeg = totalDeg / n;
    const START_ANGLE = -90;

    const arcProgress = useTransform(scrollYProgress, [0.08, 0.88], [0, n], { clamp: true });
    const [arcVal, setArcVal] = useState(0);
    useEffect(() => {
        const unsub = arcProgress.on('change', setArcVal);
        return unsub;
    }, [arcProgress]);

    function polarToXY(angleDeg, r) {
        const rad = (angleDeg * Math.PI) / 180;
        return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
    }
    function describeArc(startDeg, endDeg, r) {
        const s = polarToXY(startDeg, r);
        const e = polarToXY(endDeg, r);
        const large = endDeg - startDeg > 180 ? 1 : 0;
        return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
    }

    const segments = experiences.map((exp, i) => {
        const startDeg = START_ANGLE + i * (segDeg + GAP_DEG);
        const endDeg = startDeg + segDeg;
        const midDeg = (startDeg + endDeg) / 2;
        const labelPos = polarToXY(midDeg, R + 24);
        const dotPos = polarToXY(midDeg, R);
        const segFill = Math.max(0, Math.min(1, arcVal - i));
        const filledEndDeg = startDeg + segDeg * segFill;
        return { exp, startDeg, endDeg, midDeg, labelPos, dotPos, segFill, filledEndDeg };
    });

    const active = activeIdx >= 0 ? experiences[activeIdx] : null;

    return (
        <div style={{ padding: '0 20px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '320px', height: '320px', flexShrink: 0 }}>
                <svg width="320" height="320" viewBox="0 0 320 320" style={{ overflow: 'visible' }}>
                    {segments.map(({ exp, startDeg, endDeg, filledEndDeg, segFill, dotPos, labelPos }, i) => {
                        const isActive = i === activeIdx;
                        const isPast = i < activeIdx;
                        return (
                            <g key={i}>
                                <path d={describeArc(startDeg, endDeg, R)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={STROKE} strokeLinecap="round" />
                                {segFill > 0 && (
                                    <path d={describeArc(startDeg, filledEndDeg, R)} fill="none"
                                        stroke={isActive ? '#fff' : isPast ? 'rgba(255,255,255,0.55)' : '#fff'}
                                        strokeWidth={isActive ? STROKE + 2 : STROKE}
                                        strokeLinecap="round"
                                        style={{ filter: isActive ? 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' : 'none' }}
                                    />
                                )}
                                <circle cx={dotPos.x} cy={dotPos.y} r={isActive ? 5 : 3.5}
                                    fill={segFill >= 0.5 ? '#1cd8d2' : 'rgba(255,255,255,0.2)'}
                                    style={{ transition: 'r 0.3s, fill 0.3s', filter: isActive && segFill >= 0.5 ? 'drop-shadow(0 0 5px rgba(255,255,255,0.8))' : 'none' }}
                                />
                                <text x={labelPos.x} y={labelPos.y + 4} textAnchor="middle"
                                    fill={segFill > 0 ? '#1cd8d2' : 'rgba(255,255,255,0.2)'}
                                    fontSize="11" fontFamily="monospace"
                                    style={{ transition: 'fill 0.3s' }}
                                >{exp.index}</text>
                                <AnimatePresence>
                                    {activeIdx === i && activeIdx !== -1 && (
                                        <foreignObject x={labelPos.x - 65} y={labelPos.y - 50} width="140" height="50">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                style={{
                                                    background: 'rgba(0,0,0,0.75)', color: '#1cd8d2',
                                                    fontSize: '10px', padding: '6px 10px', borderRadius: '10px',
                                                    textAlign: 'center', backdropFilter: 'blur(8px)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                                                }}
                                            >{exp.company}</motion.div>
                                        </foreignObject>
                                    )}
                                </AnimatePresence>
                            </g>
                        );
                    })}
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '130px', pointerEvents: 'none' }}>
                    <AnimatePresence mode="wait">
                        {active ? (
                            <motion.div key={activeIdx} initial={{ opacity: 0, y: 10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.96 }} transition={{ duration: 0.35 }}>
                                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '6px' }}>{activeIdx + 1} / {n}</div>
                                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '4px' }}>{active.role}</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
                                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: active.duration.includes('Present') ? '#4ade80' : 'rgba(255,255,255,0.3)' }} />
                                    {active.duration}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'monospace' }}>Scroll to explore</motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// ── Main ──
export default function Experience() {
    const sceneRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const n = experiences.length;

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const SCENE_HEIGHT_VH = isMobile ? 200 * n : 160 * n;

    const { scrollYProgress } = useScroll({
        target: sceneRef,
        offset: ['start start', 'end end'],
    });

    const SCROLL_START = 0.10;
    const SCROLL_END = 0.88;
    const triggers = experiences.map((_, i) =>
        SCROLL_START + (i / (n - 1)) * (SCROLL_END - SCROLL_START)
    );

    return (
        <section id="experience" style={{ position: 'relative', background: '#0a0a0a', color: '#fff' }}>
            <div ref={sceneRef} style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: '120vh' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    {/* Header */}
                    <div style={{ padding: isMobile ? '36px 24px 0' : '52px 80px 0', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexShrink: 0 }}>
                        <h2 style={{ fontSize: isMobile ? '28px' : '48px', fontWeight: 400, letterSpacing: '-1.5px', fontFamily: 'Georgia, serif', color: '#fff', margin: 0 }}>Experience</h2>
                        <span style={{ fontSize: isMobile ? '11px' : '12px', color: '#1cd8d2', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'monospace' }}>{n} positions</span>
                    </div>

                    <div style={{ margin: isMobile ? '20px 24px 0' : '28px 80px 0', height: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />

                    {/* Desktop */}
                    {!isMobile && (
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 80px' }}>
                            <div style={{ position: 'relative', width: '100%' }}>
                                <div style={{ position: 'relative', height: '2px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px' }}>
                                    <SpineFill scrollYProgress={scrollYProgress} />
                                </div>
                                <div style={{
                                    position: 'absolute', top: '50%', left: 0, right: 0,
                                    transform: 'translateY(-50%)',
                                    display: 'flex', justifyContent: 'space-between', gap: '24px',
                                }}>
                                    {experiences.map((exp, idx) => (
                                        <ExpCardDesktop
                                            key={idx} exp={exp}
                                            scrollYProgress={scrollYProgress}
                                            triggerStart={triggers[idx]}
                                            above={idx % 2 === 0}
                                            onHover={setActiveModal}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile */}
                    {isMobile && (
                        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <MobileExperience scrollYProgress={scrollYProgress} />
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop hover modal — rendered outside sticky container */}
            {!isMobile && (
                <ExperienceModal
                    exp={activeModal}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </section>
    );
}
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { TfiClose } from "react-icons/tfi";
import { Home, User, Zap, Briefcase, FolderOpen, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const navItems = [
    { label: 'Home', href: '#home', icon: Home, accent: '#1cd8d2', index: '01' },
    { label: 'About', href: '#about', icon: User, accent: '#a78bfa', index: '02' },
    { label: 'Skills', href: '#skills', icon: Zap, accent: '#f472b6', index: '03' },
    { label: 'Experience', href: '#experience', icon: Briefcase, accent: '#1cd8d2', index: '04' },
    { label: 'Projects', href: '#projects', icon: FolderOpen, accent: '#a78bfa', index: '05' },
    { label: 'Contacts', href: '#contacts', icon: Mail, accent: '#f472b6', index: '06' },
];

const socials = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

const stats = [
    { value: '3+', label: 'Years Exp.' },
    { value: '3+', label: 'Projects' },
    { value: '2', label: 'Companies' },
];

const TAGLINE = "Building high-performance web experiences with modern tech.";

function TypingHeadline({ fontSize = '20px' }) {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => { setDisplayed(''); setIndex(0); }, []);

    useEffect(() => {
        if (index >= TAGLINE.length) return;
        const t = setTimeout(() => {
            setDisplayed(p => p + TAGLINE[index]);
            setIndex(i => i + 1);
        }, 38);
        return () => clearTimeout(t);
    }, [index]);

    return (
        <div style={{ fontSize, fontWeight: 400, fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, letterSpacing: '-0.2px' }}>
            {displayed}
            <span style={{
                display: 'inline-block', width: '2px', height: '1.1em',
                background: '#1cd8d2', marginLeft: '2px', verticalAlign: 'text-bottom',
                animation: index >= TAGLINE.length ? 'blink 1s step-end infinite' : 'none',
            }} />
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </div>
    );
}

function NavButton({ item, onClose }) {
    const [hovered, setHovered] = useState(false);
    const Icon = item.icon;
    return (
        <a
            href={item.href}
            onClick={onClose}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '10px', padding: '14px 14px', borderRadius: '16px',
                background: hovered ? `linear-gradient(135deg, ${item.accent}18, ${item.accent}06)` : 'rgba(255,255,255,0.03)',
                border: hovered ? `1px solid ${item.accent}45` : '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none', cursor: 'pointer',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                position: 'relative', overflow: 'hidden',
            }}
        >
            <div style={{ position: 'absolute', bottom: 0, left: '14px', right: '14px', height: '1px', background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.25s' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: hovered ? `${item.accent}22` : `${item.accent}10`, border: `1px solid ${item.accent}${hovered ? '45' : '25'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s' }}>
                    <Icon size={15} color={item.accent} strokeWidth={1.8} />
                </div>
                <span style={{ fontSize: '16px', fontWeight: 500, color: hovered ? '#fff' : 'rgba(255,255,255,0.85)', fontFamily: 'Georgia, serif', letterSpacing: '-0.2px', transition: 'color 0.2s' }}>
                    {item.label}
                </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <span style={{ fontSize: '9px', color: hovered ? item.accent : 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '1px', transition: 'color 0.2s' }}>{item.index}</span>
                <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: hovered ? `${item.accent}20` : 'rgba(255,255,255,0.05)', border: hovered ? `1px solid ${item.accent}40` : '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s' }}>
                    <ArrowUpRight size={10} color={hovered ? item.accent : 'rgba(255,255,255,0.35)'} />
                </div>
            </div>
        </a>
    );
}

// ── Mobile nav item: icon-only grid ──
function MobileNavButton({ item, onClose, index }) {
    return (
        <motion.a
            href={item.href}
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            title={item.label}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '100%', aspectRatio: '1',
                borderRadius: '16px',
                background: `${item.accent}0e`,
                border: `1px solid ${item.accent}28`,
                textDecoration: 'none', cursor: 'pointer',
                position: 'relative', overflow: 'hidden',
            }}
            whileTap={{ scale: 0.92, background: `${item.accent}22` }}
            whileHover={{ background: `${item.accent}20`, borderColor: `${item.accent}55` }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <item.icon size={22} color={item.accent} strokeWidth={1.6} />
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', letterSpacing: '0.5px' }}>{item.label}</span>
            </div>
            {/* index badge */}
            <div style={{ position: 'absolute', top: '7px', right: '8px', fontSize: '8px', color: item.accent, fontFamily: 'monospace', opacity: 0.6 }}>{item.index}</div>
        </motion.a>
    );
}

const OverlayMenu = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    const origin = isMobile ? "95% 5%" : "50% 8%";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 z-50'
                    initial={{ clipPath: `circle(0% at ${origin})` }}
                    animate={{ clipPath: `circle(150% at ${origin})` }}
                    exit={{ clipPath: `circle(0% at ${origin})` }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backgroundColor: "rgba(5,5,8,0.97)", display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                >
                    {/* Ambient blobs */}
                    <div style={{ position: 'absolute', top: '-100px', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(28,216,210,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '-80px', right: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        aria-label='Close Menu'
                        style={{ position: 'absolute', top: isMobile ? '16px' : '24px', right: isMobile ? '16px' : '24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', zIndex: 10 }}
                    >
                        <TfiClose size={16} />
                    </motion.button>

                    {/* ════════════════════════════════
                        DESKTOP LAYOUT (≥768px)
                    ════════════════════════════════ */}
                    {!isMobile && (
                        <>
                            {/* TOP: Identity */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{ padding: '48px 60px 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexShrink: 0 }}
                            >
                                <div>
                                    <div style={{ fontSize: '11px', color: '#1cd8d2', fontFamily: 'monospace', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Portfolio · 2026</div>
                                    <div style={{ fontSize: '44px', fontWeight: 400, fontFamily: 'Georgia, serif', color: '#fff', lineHeight: 1.1, letterSpacing: '-1.5px' }}>Arnab Ghosh</div>
                                    <div style={{ marginTop: '8px', fontSize: '13px', color: '#1cd8d2', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
                                            Available for work
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255, 255, 255, 1)' }}>
                                            <MapPin size={11} color="#1cd8d2" />India
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '32px', paddingBottom: '6px' }}>
                                    {stats.map((s, i) => (
                                        <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '28px', fontWeight: 600, color: '#fff', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.value}</div>
                                            <div style={{ fontSize: '10px', color: '#1cd8d2', fontFamily: 'monospace', letterSpacing: '1px', marginTop: '4px', textTransform: 'uppercase' }}>{s.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Divider */}
                            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ margin: '28px 60px', height: '1px', background: 'linear-gradient(90deg, rgba(28,216,210,0.4), rgba(167,139,250,0.3), rgba(244,114,182,0.3), transparent)', transformOrigin: 'left', flexShrink: 0 }} />

                            {/* MIDDLE: Nav grid */}
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 60px' }}>
                                <div style={{ width: '100%', maxWidth: '860px' }}>
                                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }} style={{ marginBottom: '20px' }}>
                                        <TypingHeadline fontSize="20px" />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                                        Navigate
                                    </motion.div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                        {navItems.map((item, index) => (
                                            <motion.li key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                                                <NavButton item={item} onClose={onClose} />
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* BOTTOM: Footer */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.4 }} style={{ padding: '0 60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <a href="#contacts" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 16px', borderRadius: '10px', background: 'rgba(28,216,210,0.1)', border: '1px solid rgba(28,216,210,0.25)', color: '#1cd8d2', fontSize: '11px', fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.5px', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(28,216,210,0.18)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(28,216,210,0.1)'}>
                                        <Mail size={12} />Get in touch
                                    </a>
                                    <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />
                                    {socials.map(({ icon: Icon, href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                                            <Icon size={15} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}

                    {/* ════════════════════════════════
                        MOBILE LAYOUT (<768px)
                    ════════════════════════════════ */}
                    {isMobile && (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 20px 32px', overflowY: 'auto' }}>

                            {/* Mobile header */}
                            <motion.div
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                style={{ paddingTop: '12px', paddingRight: '52px', marginBottom: '20px', flexShrink: 0 }}
                            >
                                <div style={{ fontSize: '10px', color: '#1cd8d2', fontFamily: 'monospace', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Portfolio · 2026</div>
                                <div style={{ fontSize: '28px', fontWeight: 400, fontFamily: 'Georgia, serif', color: '#fff', lineHeight: 1.1, letterSpacing: '-1px' }}>Arnab Ghosh</div>
                                <div style={{ marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 5px #4ade80' }} />
                                        Available
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.3)' }}>
                                        <MapPin size={10} color="#1cd8d2" />India
                                    </span>
                                </div>
                            </motion.div>

                            {/* Mobile stats row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.28 }}
                                style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexShrink: 0 }}
                            >
                                {stats.map((s, i) => (
                                    <div key={s.label} style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px 8px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.value}</div>
                                        <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', letterSpacing: '0.5px', marginTop: '3px', textTransform: 'uppercase' }}>{s.label}</div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Mobile divider */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                style={{ height: '1px', background: 'linear-gradient(90deg, rgba(28,216,210,0.4), rgba(167,139,250,0.3), transparent)', transformOrigin: 'left', marginBottom: '20px', flexShrink: 0 }}
                            />

                            {/* Mobile tagline */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginBottom: '16px', flexShrink: 0 }}>
                                <TypingHeadline fontSize="15px" />
                            </motion.div>

                            {/* Navigate label */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }} style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', flexShrink: 0 }}>
                                Navigate
                            </motion.div>

                            {/* Mobile nav list — icon grid 3x2 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
                                {navItems.map((item, i) => (
                                    <MobileNavButton key={item.label} item={item} onClose={onClose} index={i} />
                                ))}
                            </div>

                            {/* Mobile footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}
                            >
                                <a href="#contacts" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 16px', borderRadius: '10px', background: 'rgba(28,216,210,0.1)', border: '1px solid rgba(28,216,210,0.25)', color: '#1cd8d2', fontSize: '11px', fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '0.5px' }}>
                                    <Mail size={12} />Get in touch
                                </a>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {socials.map(({ icon: Icon, href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                                            <Icon size={14} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OverlayMenu;
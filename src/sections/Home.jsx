// import React, { useEffect, useMemo, useState } from 'react'
// import ParticlesBackground from "../components/ParticlesBackground"
// import { motion, AnimatePresence } from 'framer-motion'

// import { FaFacebook, FaGithub, FaReact, FaNodeJs } from "react-icons/fa6";
// import { FaLinkedin, FaLaptopCode } from "react-icons/fa";
// import { SiMongodb, SiJavascript } from "react-icons/si";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { FiDownload } from "react-icons/fi";

// import avatar from "../assets/avatar.png"

// /* ─────────────────────────────────────────
//    SOCIALS
// ───────────────────────────────────────── */
// const socials = [
//     { Icon: FaLinkedin, Label: "Linkedin", href: "https://www.linkedin.com/in/arnab-ghosh-6538941b9/?skipRedirect=true" },
//     { Icon: FaGithub, Label: "Github", href: "https://github.com/2406arnab" },
//     { Icon: FaFacebook, Label: "Facebook", href: "https://www.facebook.com/arnab.ghosh.379028" },
// ];

// /* ─────────────────────────────────────────
//    ROLE + ICONS
// ───────────────────────────────────────── */
// const rolesData = [
//     {
//         role: "Web Developer",
//         Icon: FaLaptopCode,
//         color: "#1cd8d2",
//     },
//     {
//         role: "Full Stack Developer",
//         Icon: SiMongodb,
//         color: "#00ed64",
//     },
//     {
//         role: "Frontend Developer",
//         Icon: SiJavascript,
//         color: "#f7df1e",
//     },
//     {
//         role: "React Developer",
//         Icon: FaReact,
//         color: "#61dafb",
//     },
//     {
//         role: "Node Js Developer",
//         Icon: FaNodeJs,
//         color: "#68a063",
//     },
// ];

// /* ─────────────────────────────────────────
//    SOCIAL HOVER EFFECT
// ───────────────────────────────────────── */
// const glowVariants = {
//     initial: {
//         scale: 1,
//         y: 0,
//         filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"
//     },
//     hover: {
//         scale: 1.2,
//         y: -3,
//         filter:
//             "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
//         transition: {
//             type: "spring",
//             stiffness: 300,
//             damping: 15
//         },
//     },
//     tap: {
//         scale: 0.95,
//         y: 0,
//         transition: {
//             duration: 0.08
//         }
//     },
// };

// /* ─────────────────────────────────────────
//    TYPEWRITER WITH ICON
// ───────────────────────────────────────── */
// function useTypewriter(roles) {
//     const [index, setIndex] = useState(0);
//     const [subIndex, setSubIndex] = useState(0);
//     const [deleting, setDeleting] = useState(false);
//     const [showIcon, setShowIcon] = useState(false);

//     useEffect(() => {
//         const current = roles[index].role;

//         const timeout = setTimeout(() => {

//             // typing
//             if (!deleting && subIndex < current.length) {
//                 setSubIndex((v) => v + 1);
//             }

//             // fully typed
//             else if (!deleting && subIndex === current.length) {
//                 setShowIcon(true);

//                 setTimeout(() => {
//                     setShowIcon(false);
//                     setDeleting(true);
//                 }, 1200);
//             }

//             // deleting
//             else if (deleting && subIndex > 0) {
//                 setSubIndex((v) => v - 1);
//             }

//             // next role
//             else if (deleting && subIndex === 0) {
//                 setDeleting(false);
//                 setIndex((p) => (p + 1) % roles.length);
//             }

//         }, deleting ? 40 : 60);

//         return () => clearTimeout(timeout);

//     }, [subIndex, index, deleting, roles]);

//     return {
//         text: roles[index].role.substring(0, subIndex),
//         Icon: roles[index].Icon,
//         color: roles[index].color,
//         showIcon,
//     };
// }

// /* ─────────────────────────────────────────
//    MOBILE HOME
// ───────────────────────────────────────── */
// function MobileHome({ currentRole }) {

//     const CurrentIcon = currentRole.Icon;

//     return (
//         <section className="w-full h-screen relative bg-black overflow-hidden lg:hidden">

//             <ParticlesBackground />

//             {/* Ambient glow */}
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: '-60px',
//                     right: '-60px',
//                     width: '260px',
//                     height: '260px',
//                     borderRadius: '50%',
//                     background:
//                         'radial-gradient(circle, rgba(28,216,210,0.15) 0%, transparent 70%)',
//                     filter: 'blur(40px)',
//                     pointerEvents: 'none'
//                 }}
//             />

//             <div
//                 style={{
//                     position: 'absolute',
//                     bottom: '80px',
//                     left: '-40px',
//                     width: '200px',
//                     height: '200px',
//                     borderRadius: '50%',
//                     background:
//                         'radial-gradient(circle, rgba(48,43,99,0.3) 0%, transparent 70%)',
//                     filter: 'blur(50px)',
//                     pointerEvents: 'none'
//                 }}
//             />

//             {/* Main */}
//             <div
//                 style={{
//                     position: 'absolute',
//                     inset: 0,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     paddingTop: '70px',
//                     paddingLeft: '22px',
//                     paddingRight: '22px',
//                     paddingBottom: '24px',
//                     zIndex: 5,
//                 }}
//             >

//                 {/* Role */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2, duration: 0.5 }}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'flex-start',
//                         marginBottom: '18px'
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             gap: '8px',
//                             background: 'rgba(28,216,210,0.08)',
//                             border: '1px solid rgba(28,216,210,0.22)',
//                             borderRadius: '20px',
//                             padding: '6px 14px',
//                             minHeight: "38px"
//                         }}
//                     >
//                         <span
//                             style={{
//                                 width: '5px',
//                                 height: '5px',
//                                 borderRadius: '50%',
//                                 background: '#1cd8d2',
//                                 boxShadow: '0 0 5px #1cd8d2',
//                                 flexShrink: 0
//                             }}
//                         />

//                         <span
//                             style={{
//                                 fontSize: '11px',
//                                 color: '#1cd8d2',
//                                 fontFamily: 'monospace',
//                                 whiteSpace: 'nowrap',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '8px'
//                             }}
//                         >

//                             {currentRole.text}

//                             <AnimatePresence mode="wait">
//                                 {currentRole.showIcon && (
//                                     <motion.span
//                                         key={currentRole.text}
//                                         initial={{
//                                             opacity: 0,
//                                             scale: 0.4,
//                                             rotate: -90
//                                         }}
//                                         animate={{
//                                             opacity: 1,
//                                             scale: 1,
//                                             rotate: 0
//                                         }}
//                                         exit={{
//                                             opacity: 0,
//                                             scale: 0.4
//                                         }}
//                                         transition={{
//                                             duration: 0.35
//                                         }}
//                                         style={{
//                                             color: currentRole.color,
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             filter: `drop-shadow(0 0 8px ${currentRole.color})`
//                                         }}
//                                     >
//                                         <CurrentIcon size={15} />
//                                     </motion.span>
//                                 )}
//                             </AnimatePresence>

//                             <span
//                                 style={{
//                                     display: 'inline-block',
//                                     width: '1.5px',
//                                     height: '0.9em',
//                                     background: '#1cd8d2',
//                                     marginLeft: '2px',
//                                     verticalAlign: 'text-bottom',
//                                     animation: 'blink 1s step-end infinite'
//                                 }}
//                             />
//                         </span>
//                     </div>
//                 </motion.div>

//                 {/* Name */}
//                 <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
//                     <motion.div
//                         initial={{ y: '100%' }}
//                         animate={{ y: 0 }}
//                         transition={{
//                             delay: 0.3,
//                             duration: 0.65,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                         style={{
//                             fontSize: 'clamp(30px, 9.5vw, 48px)',
//                             fontWeight: 800,
//                             color: '#fff',
//                             lineHeight: 0.93,
//                             fontFamily: 'Georgia, serif',
//                             letterSpacing: '-2px'
//                         }}
//                     >
//                         Hello,
//                     </motion.div>
//                 </div>

//                 <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
//                     <motion.div
//                         initial={{ y: '100%' }}
//                         animate={{ y: 0 }}
//                         transition={{
//                             delay: 0.4,
//                             duration: 0.65,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                         style={{
//                             fontSize: 'clamp(30px, 9.5vw, 48px)',
//                             fontWeight: 800,
//                             lineHeight: 0.93,
//                             fontFamily: 'Georgia, serif',
//                             letterSpacing: '-2px',
//                             background:
//                                 'linear-gradient(90deg, #1cd8d2, #00bf8f)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent'
//                         }}
//                     >
//                         I'm Arnab
//                     </motion.div>
//                 </div>

//                 <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
//                     <motion.div
//                         initial={{ y: '100%' }}
//                         animate={{ y: 0 }}
//                         transition={{
//                             delay: 0.5,
//                             duration: 0.65,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                         style={{
//                             fontSize: 'clamp(30px, 9.5vw, 48px)',
//                             fontWeight: 800,
//                             color: 'rgba(241, 241, 241, 0.91)',
//                             lineHeight: 0.93,
//                             fontFamily: 'Georgia, serif',
//                             letterSpacing: '-2px'
//                         }}
//                     >
//                         Ghosh.
//                     </motion.div>
//                 </div>

//                 {/* Divider */}
//                 <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{
//                         delay: 0.6,
//                         duration: 0.55,
//                         ease: [0.22, 1, 0.36, 1]
//                     }}
//                     style={{
//                         height: '1px',
//                         background:
//                             'linear-gradient(90deg, #1cd8d2, rgba(28,216,210,0.15), transparent)',
//                         transformOrigin: 'left',
//                         marginBottom: '20px'
//                     }}
//                 />

//                 {/* Description */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 14 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.68, duration: 0.55 }}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'flex-start',
//                         gap: '14px',
//                         marginBottom: '22px'
//                     }}
//                 >
//                     <p
//                         style={{
//                             flex: 1,
//                             fontSize: '13px',
//                             color: 'rgba(255,255,255,0.5)',
//                             lineHeight: 1.75,
//                             fontFamily: 'system-ui, sans-serif',
//                             margin: 0
//                         }}
//                     >
//                         I turn complex ideas into seamless, high-impact web experiences — modern, scalable and lightning-fast.
//                     </p>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.85 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{
//                             delay: 0.78,
//                             duration: 0.55,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                         style={{
//                             flexShrink: 0,
//                             width: '100px',
//                             height: '128px',
//                             borderRadius: '18px',
//                             overflow: 'hidden',
//                             border: '1px solid rgba(28,216,210,0.2)',
//                             boxShadow:
//                                 '0 0 24px rgba(28,216,210,0.1), 0 16px 40px rgba(0,0,0,0.6)',
//                             position: 'relative'
//                         }}
//                     >
//                         <img
//                             src={avatar}
//                             alt="Arnab Ghosh"
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 objectFit: 'cover',
//                                 objectPosition: 'top'
//                             }}
//                         />

//                         <div
//                             style={{
//                                 position: 'absolute',
//                                 inset: 0,
//                                 background:
//                                     'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)'
//                             }}
//                         />
//                     </motion.div>
//                 </motion.div>
//                 {/* ── ROW 4: CTA buttons ── */}
//                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
//                     style={{ display: 'flex', gap: '12px', marginBottom: '0' }}>

//                     {/* View Work — filled */}
//                     <motion.a
//                         href="#projects"
//                         whileTap={{ scale: 0.96 }}
//                         whileHover={{ scale: 1.03 }}
//                         style={{
//                             display: 'inline-flex', alignItems: 'center', gap: '8px',
//                             padding: '12px 22px', borderRadius: '14px',
//                             fontSize: '13px', fontWeight: 700, letterSpacing: '0.2px',
//                             color: '#000',
//                             background: 'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
//                             boxShadow: '0 4px 20px rgba(28,216,210,0.35), 0 2px 6px rgba(0,0,0,0.3)',
//                             textDecoration: 'none', position: 'relative', overflow: 'hidden',
//                             transition: 'box-shadow 0.25s',
//                         }}
//                     >
//                         {/* ripple shine */}
//                         <div style={{ position: 'absolute', top: 0, left: '-60%', width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none' }} />
//                         <FaGithub size={0} style={{ display: 'none' }} />{/* spacer import trick */}
//                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <polygon points="5 3 19 12 5 21 5 3" />
//                         </svg>
//                         View Work
//                     </motion.a>

//                     {/* Résumé — outlined */}
//                     <motion.a
//                         href="/Arnab_Ghosh_Resume.pdf"
//                         download
//                         whileTap={{ scale: 0.96 }}
//                         whileHover={{ scale: 1.03 }}
//                         style={{
//                             display: 'inline-flex', alignItems: 'center', gap: '8px',
//                             padding: '12px 22px', borderRadius: '14px',
//                             fontSize: '13px', fontWeight: 700, letterSpacing: '0.2px',
//                             color: 'rgba(255,255,255,0.85)',
//                             background: 'rgba(255,255,255,0.06)',
//                             border: '1px solid rgba(255,255,255,0.15)',
//                             backdropFilter: 'blur(8px)',
//                             boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
//                             textDecoration: 'none',
//                             transition: 'border 0.25s, box-shadow 0.25s',
//                         }}
//                     >
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                             <polyline points="7 10 12 15 17 10" />
//                             <line x1="12" y1="15" x2="12" y2="3" />
//                         </svg>
//                         Résumé
//                     </motion.a>
//                 </motion.div>


//                 {/* Socials */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.0, duration: 0.5 }}
//                     style={{
//                         marginTop: 'auto',
//                         paddingTop: '16px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between'
//                     }}
//                 >
//                     <div style={{ display: 'flex', gap: '8px' }}>
//                         {socials.map(({ Icon, Label, href }) => (
//                             <a
//                                 key={Label}
//                                 href={href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 style={{
//                                     width: '34px',
//                                     height: '34px',
//                                     borderRadius: '9px',
//                                     background: 'rgba(255,255,255,0.05)',
//                                     border: '1px solid rgba(255,255,255,0.1)',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     color: 'rgba(255,255,255,0.55)',
//                                     textDecoration: 'none'
//                                 }}
//                             >
//                                 <Icon size={14} />
//                             </a>
//                         ))}
//                     </div>

//                     <div
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '6px'
//                         }}
//                     >
//                         <div
//                             style={{
//                                 width: '16px',
//                                 height: '1px',
//                                 background: 'rgba(255,255,255,0.18)'
//                             }}
//                         />

//                         <span
//                             style={{
//                                 fontSize: '8px',
//                                 color: 'rgba(255,255,255,0.2)',
//                                 fontFamily: 'monospace',
//                                 letterSpacing: '2px',
//                                 textTransform: 'uppercase'
//                             }}
//                         >
//                             Scroll
//                         </span>

//                         <div
//                             style={{
//                                 width: '16px',
//                                 height: '1px',
//                                 background: 'rgba(255,255,255,0.18)'
//                             }}
//                         />
//                     </div>
//                 </motion.div>
//             </div>

//             <style>{`
//                 @keyframes blink {
//                     0%,100% { opacity:1 }
//                     50% { opacity:0 }
//                 }
//             `}</style>
//         </section>
//     );
// }

// /* ─────────────────────────────────────────
//    MAIN HOME
// ───────────────────────────────────────── */
// const Home = () => {

//     const currentRole = useTypewriter(rolesData);

//     const DesktopIcon = currentRole.Icon;

//     return (
//         <div id="home">

//             {/* MOBILE */}
//             <MobileHome currentRole={currentRole} />

//             {/* DESKTOP */}
//             <section className="w-full h-screen relative bg-black overflow-hidden hidden lg:block">

//                 <ParticlesBackground />

//                 {/* Glow blobs */}
//                 <div className='absolute inset-0'>
//                     <div className='absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse'></div>

//                     <div className='absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse delay-500'></div>
//                 </div>

//                 <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>

//                     {/* LEFT */}
//                     <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>

//                         <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>

//                             {/* TYPEWRITER */}
//                             <motion.div
//                                 className='mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em] flex items-center gap-4'
//                                 initial={{ opacity: 0, y: 12 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6 }}
//                             >

//                                 <span>{currentRole.text}</span>

//                                 <AnimatePresence mode="wait">
//                                     {currentRole.showIcon && (
//                                         <motion.div
//                                             key={currentRole.text}
//                                             initial={{
//                                                 opacity: 0,
//                                                 scale: 0.3,
//                                                 rotate: -90
//                                             }}
//                                             animate={{
//                                                 opacity: 1,
//                                                 scale: 1,
//                                                 rotate: 0
//                                             }}
//                                             exit={{
//                                                 opacity: 0,
//                                                 scale: 0.3
//                                             }}
//                                             transition={{
//                                                 duration: 0.35
//                                             }}
//                                             style={{
//                                                 color: currentRole.color,
//                                                 filter: `drop-shadow(0 0 12px ${currentRole.color})`
//                                             }}
//                                         >
//                                             <DesktopIcon size={34} />
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>

//                                 <span
//                                     className='inline-block w-[2px] bg-white animate-pulse align-middle'
//                                     style={{ height: "1em" }}
//                                 />
//                             </motion.div>

//                             {/* TITLE */}
//                             <motion.h1
//                                 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
//                                 initial={{ opacity: 0, y: 40 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1 }}
//                             >
//                                 Hello, I'm
//                                 <br />

//                                 <span className='text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap'>
//                                     Arnab Ghosh
//                                 </span>
//                             </motion.h1>

//                             {/* DESCRIPTION */}
//                             <motion.p
//                                 className='mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.4, duration: 0.8 }}
//                             >
//                                 I turn complex ideas into seamless, high impact web experiences — building modern, scalable and lightning-fast applications that make a difference.
//                             </motion.p>

//                             {/* BUTTONS */}
//                             <motion.div
//                                 className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4'
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.8, duration: 0.8 }}
//                             >

//                                 <motion.a
//                                     href='#projects'
//                                     whileHover={{ scale: 1.04 }}
//                                     whileTap={{ scale: 0.97 }}
//                                     style={{
//                                         display: 'inline-flex',
//                                         alignItems: 'center',
//                                         gap: '9px',
//                                         padding: '14px 28px',
//                                         borderRadius: '14px',
//                                         fontSize: '15px',
//                                         fontWeight: 700,
//                                         color: '#000',
//                                         background:
//                                             'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
//                                         boxShadow:
//                                             '0 4px 24px rgba(28,216,210,0.35)',
//                                         textDecoration: 'none',
//                                     }}
//                                 >
//                                     <HiOutlineArrowRight size={18} />
//                                     View My Work
//                                 </motion.a>

//                                 <motion.a
//                                     href='/Arnab_Ghosh_Resume.pdf'
//                                     download
//                                     whileHover={{ scale: 1.04 }}
//                                     whileTap={{ scale: 0.97 }}
//                                     style={{
//                                         display: 'inline-flex',
//                                         alignItems: 'center',
//                                         gap: '9px',
//                                         padding: '14px 28px',
//                                         borderRadius: '14px',
//                                         fontSize: '15px',
//                                         fontWeight: 700,
//                                         color: 'rgba(255,255,255,0.85)',
//                                         background: 'rgba(255,255,255,0.06)',
//                                         border: '1px solid rgba(255,255,255,0.15)',
//                                         backdropFilter: 'blur(8px)',
//                                         boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
//                                         textDecoration: 'none',
//                                     }}
//                                 >
//                                     <FiDownload size={18} />
//                                     My Resume
//                                 </motion.a>
//                             </motion.div>

//                             {/* SOCIALS */}
//                             <motion.div
//                                 className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'
//                                 initial={{ opacity: 0, y: 40 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 1.4, duration: 0.8 }}
//                             >
//                                 {socials.map(({ Icon, Label, href }) => (
//                                     <motion.a
//                                         href={href}
//                                         key={Label}
//                                         target='_blank'
//                                         aria-label={Label}
//                                         rel='noopener noreferrer'
//                                         variants={glowVariants}
//                                         initial="initial"
//                                         whileHover="hover"
//                                         whileTap="tap"
//                                         className='text-gray-300'
//                                     >
//                                         <Icon />
//                                     </motion.a>
//                                 ))}
//                             </motion.div>
//                         </div>
//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className='relative hidden lg:block'>

//                         <div
//                             className='absolute top-1/2 -translate-y-1/2 pointer-events-none'
//                             style={{
//                                 right: "10px",
//                                 width: "min(22vw, 410px)",
//                                 height: "min(40vw, 760px)",
//                                 borderRadius: "50%",
//                                 filter: "blur(38px)",
//                                 opacity: 0.32,
//                                 background:
//                                     "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
//                             }}
//                         />

//                         <motion.img
//                             src={avatar}
//                             alt='Arnab Ghosh'
//                             className='absolute top-1/2 -translate-y-1/2 objet-contain select-none pointer-events-none'
//                             style={{
//                                 right: "-30px",
//                                 width: "min(45vw, 780px)",
//                                 maxHeight: "90vh"
//                             }}
//                             initial={{
//                                 opacity: 0,
//                                 y: 40,
//                                 scale: 0.98
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                                 scale: 1
//                             }}
//                             transition={{
//                                 delay: 0.2,
//                                 duration: 0.8
//                             }}
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;



import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticlesBackground from "../components/ParticlesBackground";

import { FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { SiAngular, SiJavascript, SiMongodb, SiNextdotjs, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

import avatar from "../assets/avatar.png";

/* ─────────────────────────────────────────
   SOCIALS
───────────────────────────────────────── */
const socials = [
    { Icon: FaLinkedin, Label: "Linkedin", href: "https://www.linkedin.com/in/arnab-ghosh-6538941b9/?skipRedirect=true" },
    { Icon: FaGithub, Label: "Github", href: "https://github.com/2406arnab" },
    { Icon: FaFacebook, Label: "Facebook", href: "https://www.facebook.com/arnab.ghosh.379028" },
];

/* ─────────────────────────────────────────
   ROLE + ICONS
───────────────────────────────────────── */
const rolesData = [
    {
        role: "Web Developer",
        Icon: FaLaptopCode,
        color: "#1cd8d2",
    },
    {
        role: "Full Stack Developer",
        Icon: SiMongodb,
        color: "#00ed64",
    },
    {
        role: "Frontend Developer",
        Icon: SiJavascript,
        color: "#f7df1e",
    },
    {
        role: "React Developer",
        Icon: FaReact,
        color: "#61dafb",
    },
    {
        role: "Node Js Developer",
        Icon: FaNodeJs,
        color: "#68a063",
    },
];

/* ─────────────────────────────────────────
   TECH STACK — used by the mobile marquee
   to fill the empty space below the CTAs
───────────────────────────────────────── */
const techStack = [
    { label: "React", Icon: FaReact, color: "#61dafb" },
    { label: "Node.js", Icon: FaNodeJs, color: "#68a063" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#61dafb" },
    { label: "Angular", Icon: SiAngular, color: "#fcda3fff" },
    { label: "MongoDB", Icon: SiMongodb, color: "#00ed64" },
    { label: "PostgreSQL", Icon: SiSqlite, color: "#00ed64" },
    { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
];

/* ─────────────────────────────────────────
   SOCIAL HOVER EFFECT
───────────────────────────────────────── */
const glowVariants = {
    initial: {
        scale: 1,
        y: 0,
        filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"
    },
    hover: {
        scale: 1.2,
        y: -3,
        filter:
            "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        },
    },
    tap: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.08
        }
    },
};

/* ─────────────────────────────────────────
   TYPEWRITER WITH ICON
───────────────────────────────────────── */
function useTypewriter(roles) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const current = roles[index].role;

        const timeout = setTimeout(() => {

            // typing
            if (!deleting && subIndex < current.length) {
                setSubIndex((v) => v + 1);
            }

            // fully typed
            else if (!deleting && subIndex === current.length) {
                setShowIcon(true);

                setTimeout(() => {
                    setShowIcon(false);
                    setDeleting(true);
                }, 1200);
            }

            // deleting
            else if (deleting && subIndex > 0) {
                setSubIndex((v) => v - 1);
            }

            // next role
            else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((p) => (p + 1) % roles.length);
            }

        }, deleting ? 40 : 60);

        return () => clearTimeout(timeout);

    }, [subIndex, index, deleting, roles]);

    return {
        text: roles[index].role.substring(0, subIndex),
        Icon: roles[index].Icon,
        color: roles[index].color,
        showIcon,
    };
}

/* ─────────────────────────────────────────
   MOBILE TECH MARQUEE
   Fills the dead space between the CTA buttons
   and the bottom-pinned socials row.
───────────────────────────────────────── */
function TechMarquee() {
    const loop = [...techStack, ...techStack];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '64px',
            }}
        >
            <span
                style={{
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.25)',
                    fontFamily: 'monospace',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                }}
            >
                Tools &amp; Technologies
            </span>

            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
                }}
            >
                <div className="tech-marquee-track" style={{ display: 'flex', gap: '30px', width: 'max-content' }}>
                    {loop.map((t, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '9px',
                                flexShrink: 0,
                                padding: '8px 14px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <t.Icon size={16} color={t.color} />
                            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace' }}>
                                {t.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   MOBILE HOME
───────────────────────────────────────── */
function MobileHome({ currentRole }) {

    const CurrentIcon = currentRole.Icon;

    return (
        <section className="w-full h-screen relative bg-black overflow-hidden lg:hidden">

            <ParticlesBackground />

            {/* Ambient glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(28,216,210,0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none'
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: '-40px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(48,43,99,0.3) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    pointerEvents: 'none'
                }}
            />

            {/* Main */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '70px',
                    paddingLeft: '22px',
                    paddingRight: '22px',
                    paddingBottom: '24px',
                    zIndex: 5,
                }}
            >

                {/* Role */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: '18px'
                    }}
                >
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(28,216,210,0.08)',
                            border: '1px solid rgba(28,216,210,0.22)',
                            borderRadius: '20px',
                            padding: '6px 14px',
                            minHeight: "38px"
                        }}
                    >
                        <span
                            style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: '#1cd8d2',
                                boxShadow: '0 0 5px #1cd8d2',
                                flexShrink: 0
                            }}
                        />

                        <span
                            style={{
                                fontSize: '11px',
                                color: '#1cd8d2',
                                fontFamily: 'monospace',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >

                            {currentRole.text}

                            <AnimatePresence mode="wait">
                                {currentRole.showIcon && (
                                    <motion.span
                                        key={currentRole.text}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.4,
                                            rotate: -90
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.4
                                        }}
                                        transition={{
                                            duration: 0.35
                                        }}
                                        style={{
                                            color: currentRole.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            filter: `drop-shadow(0 0 8px ${currentRole.color})`
                                        }}
                                    >
                                        <CurrentIcon size={15} />
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '1.5px',
                                    height: '0.9em',
                                    background: '#1cd8d2',
                                    marginLeft: '2px',
                                    verticalAlign: 'text-bottom',
                                    animation: 'blink 1s step-end infinite'
                                }}
                            />
                        </span>
                    </div>
                </motion.div>

                {/* Name */}
                <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                            fontSize: 'clamp(30px, 9.5vw, 48px)',
                            fontWeight: 800,
                            color: '#fff',
                            lineHeight: 0.93,
                            fontFamily: 'Georgia, serif',
                            letterSpacing: '-2px'
                        }}
                    >
                        Hello,
                    </motion.div>
                </div>

                <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                            fontSize: 'clamp(30px, 9.5vw, 48px)',
                            fontWeight: 800,
                            lineHeight: 0.93,
                            fontFamily: 'Georgia, serif',
                            letterSpacing: '-2px',
                            background:
                                'linear-gradient(90deg, #1cd8d2, #00bf8f)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        I'm Arnab
                    </motion.div>
                </div>

                <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                            fontSize: 'clamp(30px, 9.5vw, 48px)',
                            fontWeight: 800,
                            color: 'rgba(241, 241, 241, 0.91)',
                            lineHeight: 0.93,
                            fontFamily: 'Georgia, serif',
                            letterSpacing: '-2px'
                        }}
                    >
                        Ghosh.
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{
                        height: '1px',
                        background:
                            'linear-gradient(90deg, #1cd8d2, rgba(28,216,210,0.15), transparent)',
                        transformOrigin: 'left',
                        marginBottom: '20px'
                    }}
                />

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.68, duration: 0.55 }}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        marginBottom: '22px'
                    }}
                >
                    <p
                        style={{
                            flex: 1,
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: 1.75,
                            fontFamily: 'system-ui, sans-serif',
                            margin: 0
                        }}
                    >
                        I turn complex ideas into seamless, high-impact web experiences — modern, scalable and lightning-fast.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.78,
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                            flexShrink: 0,
                            width: '100px',
                            height: '128px',
                            borderRadius: '18px',
                            overflow: 'hidden',
                            border: '1px solid rgba(28,216,210,0.2)',
                            boxShadow:
                                '0 0 24px rgba(28,216,210,0.1), 0 16px 40px rgba(0,0,0,0.6)',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={avatar}
                            alt="Arnab Ghosh"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />

                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)'
                            }}
                        />
                    </motion.div>
                </motion.div>
                {/* ── ROW 4: CTA buttons ── */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
                    style={{ display: 'flex', gap: '12px', marginBottom: '0' }}>

                    {/* View Work — filled */}
                    <motion.a
                        href="#projects"
                        whileTap={{ scale: 0.96 }}
                        whileHover={{ scale: 1.03 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '12px 22px', borderRadius: '14px',
                            fontSize: '13px', fontWeight: 700, letterSpacing: '0.2px',
                            color: '#000',
                            background: 'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
                            boxShadow: '0 4px 20px rgba(28,216,210,0.35), 0 2px 6px rgba(0,0,0,0.3)',
                            textDecoration: 'none', position: 'relative', overflow: 'hidden',
                            transition: 'box-shadow 0.25s',
                        }}
                    >
                        {/* ripple shine */}
                        <div style={{ position: 'absolute', top: 0, left: '-60%', width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none' }} />
                        <FaGithub size={0} style={{ display: 'none' }} />{/* spacer import trick */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        View Work
                    </motion.a>

                    {/* Résumé — outlined */}
                    <motion.a
                        href="/Arnab_Ghosh_Resume.pdf"
                        download
                        whileTap={{ scale: 0.96 }}
                        whileHover={{ scale: 1.03 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '12px 22px', borderRadius: '14px',
                            fontSize: '13px', fontWeight: 700, letterSpacing: '0.2px',
                            color: 'rgba(255,255,255,0.85)',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                            textDecoration: 'none',
                            transition: 'border 0.25s, box-shadow 0.25s',
                        }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Résumé
                    </motion.a>
                </motion.div>

                {/* ── Tech marquee — fills the gap above the socials ── */}
                <TechMarquee />

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {socials.map(({ Icon, Label, href }) => (
                            <a
                                key={Label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '34px',
                                    height: '34px',
                                    borderRadius: '9px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.55)',
                                    textDecoration: 'none'
                                }}
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        <div
                            style={{
                                width: '16px',
                                height: '1px',
                                background: 'rgba(255,255,255,0.18)'
                            }}
                        />

                        <span
                            style={{
                                fontSize: '8px',
                                color: 'rgba(255,255,255,0.2)',
                                fontFamily: 'monospace',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Scroll
                        </span>

                        <div
                            style={{
                                width: '16px',
                                height: '1px',
                                background: 'rgba(255,255,255,0.18)'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes blink {
                    0%,100% { opacity:1 }
                    50% { opacity:0 }
                }
                @keyframes techMarquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .tech-marquee-track {
                    animation: techMarquee 18s linear infinite;
                }
            `}</style>
        </section>
    );
}

/* ─────────────────────────────────────────
   MAIN HOME
───────────────────────────────────────── */
const Home = () => {

    const currentRole = useTypewriter(rolesData);

    const DesktopIcon = currentRole.Icon;

    return (
        <div id="home">

            {/* MOBILE */}
            <MobileHome currentRole={currentRole} />

            {/* DESKTOP */}
            <section className="w-full h-screen relative bg-black overflow-hidden hidden lg:block">

                <ParticlesBackground />

                {/* Glow blobs */}
                <div className='absolute inset-0'>
                    <div className='absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse'></div>

                    <div className='absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse delay-500'></div>
                </div>

                <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>

                    {/* LEFT */}
                    <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>

                        <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>

                            {/* TYPEWRITER */}
                            <motion.div
                                className='mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em] flex items-center gap-4'
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >

                                <span>{currentRole.text}</span>

                                <AnimatePresence mode="wait">
                                    {currentRole.showIcon && (
                                        <motion.div
                                            key={currentRole.text}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.3,
                                                rotate: -90
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                rotate: 0
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.3
                                            }}
                                            transition={{
                                                duration: 0.35
                                            }}
                                            style={{
                                                color: currentRole.color,
                                                filter: `drop-shadow(0 0 12px ${currentRole.color})`
                                            }}
                                        >
                                            <DesktopIcon size={34} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <span
                                    className='inline-block w-[2px] bg-white animate-pulse align-middle'
                                    style={{ height: "1em" }}
                                />
                            </motion.div>

                            {/* TITLE */}
                            <motion.h1
                                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Hello, I'm
                                <br />

                                <span className='text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap'>
                                    Arnab Ghosh
                                </span>
                            </motion.h1>

                            {/* DESCRIPTION */}
                            <motion.p
                                className='mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                I turn complex ideas into seamless, high impact web experiences — building modern, scalable and lightning-fast applications that make a difference.
                            </motion.p>

                            {/* BUTTONS */}
                            <motion.div
                                className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >

                                <motion.a
                                    href='#projects'
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '9px',
                                        padding: '14px 28px',
                                        borderRadius: '14px',
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: '#000',
                                        background:
                                            'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
                                        boxShadow:
                                            '0 4px 24px rgba(28,216,210,0.35)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <HiOutlineArrowRight size={18} />
                                    View My Work
                                </motion.a>

                                <motion.a
                                    href='/Arnab_Ghosh_Resume.pdf'
                                    download
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '9px',
                                        padding: '14px 28px',
                                        borderRadius: '14px',
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.85)',
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        backdropFilter: 'blur(8px)',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <FiDownload size={18} />
                                    My Resume
                                </motion.a>
                            </motion.div>

                            <TechMarquee />

                            {/* SOCIALS */}
                            <motion.div
                                className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                            >
                                {socials.map(({ Icon, Label, href }) => (
                                    <motion.a
                                        href={href}
                                        key={Label}
                                        target='_blank'
                                        aria-label={Label}
                                        rel='noopener noreferrer'
                                        variants={glowVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                        className='text-gray-300'
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className='relative hidden lg:block'>

                        <div
                            className='absolute top-1/2 -translate-y-1/2 pointer-events-none'
                            style={{
                                right: "10px",
                                width: "min(22vw, 410px)",
                                height: "min(40vw, 760px)",
                                borderRadius: "50%",
                                filter: "blur(38px)",
                                opacity: 0.32,
                                background:
                                    "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
                            }}
                        />

                        <motion.img
                            src={avatar}
                            alt='Arnab Ghosh'
                            className='absolute top-1/2 -translate-y-1/2 objet-contain select-none pointer-events-none'
                            style={{
                                right: "-30px",
                                width: "min(45vw, 780px)",
                                maxHeight: "90vh"
                            }}
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.98
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
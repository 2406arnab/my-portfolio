import React from 'react'
import { motion } from 'framer-motion'
import {
    Briefcase,
    Layers3,
    Code2,
    Sparkles,
    User,
    Rocket,
    Mail,
    FolderOpen,
    Code,
    Zap,
} from 'lucide-react'

import profile from "../assets/Profile.jfif"

const About = () => {

    const stats = [
        {
            label: "Experience",
            value: "3+ Years",
            icon: <Briefcase size={18} />
        },
        {
            label: "Focus",
            value: "Performance & UX",
            icon: <Sparkles size={18} />
        },
        {
            label: "Speciality",
            value: "Full Stack",
            icon: <Layers3 size={18} />
        },
        {
            label: "Advanced",
            value: "Frontend",
            icon: <Code2 size={18} />
        },
    ]

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
    ]

    return (
        <section
            id='about'
            className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'
        >

            {/* Background Glow */}
            <div className='absolute inset-0 pointer-events-none'>
                {
                    glows.map((c, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
                        />
                    ))
                }
            </div>

            <div className='relative z-10 max-w-6xl w-full mx-auto px-5 md:px-10 lg:px-12 py-20 flex flex-col gap-14'>

                {/* TOP SECTION */}
                <motion.div
                    className='flex flex-col md:flex-row items-center md:items-stretch gap-10'
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                >

                    {/* PROFILE CARD */}
                    <motion.div
                        className='relative group'
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    >

                        <div className='absolute -inset-2 rounded-[32px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] blur-lg opacity-40 md:hidden'></div>

                        <div className='relative w-[220px] h-[280px] md:w-[200px] md:h-[260px] rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,191,143,0.2)]'>

                            <img
                                src={profile}
                                alt='profile'
                                className='w-full h-full object-cover'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent'></div>

                            {/* Open To Work Full Width */}
                            <div className='absolute bottom-0 left-0 w-full px-4 py-3 bg-black/70 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-2'>
                                <Rocket size={16} className='text-[#1cd8d2]' />
                                <span className='text-sm font-semibold tracking-wide uppercase'>
                                    Open To Work
                                </span>
                            </div>

                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <div className='flex flex-1 flex-col justify-center text-center md:text-left'>

                        {/* SMALL TAG */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className='mb-4 flex justify-center md:justify-start'
                        >
                            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-[#1cd8d2]'>
                                <User size={16} />
                                About Me
                            </div>
                        </motion.div>

                        {/* NAME */}
                        <h2 className='text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
                            Arnab Ghosh
                        </h2>

                        {/* ROLE */}
                        <p className='mt-3 text-lg sm:text-xl text-white/90 font-semibold'>
                            Full Stack Developer
                        </p>

                        {/* DESCRIPTION */}
                        <p className='mt-5 text-gray-300 leading-relaxed text-[15px] sm:text-lg max-w-2xl md:max-w-3xl'>
                            I build scalable, modern applications with a strong focus on architecture,
                            delightful UX and performance. My toolkit spans React, Next.js,
                            Angular, Node.js, TypeScript, Tailwind CSS and RESTful APIs —
                            bringing ideas to life from concept to production with robust APIs
                            and smooth interfaces.
                        </p>

                        {/* STATS */}
                        <div className='mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl'>

                            {
                                stats.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 hover:border-[#1cd8d2]/30 transition-all duration-300'
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.4 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        whileHover={{ y: -4 }}
                                    >

                                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1cd8d2]/10 to-transparent'></div>

                                        <div className='relative z-10'>
                                            <div className='w-10 h-10 rounded-xl bg-[#1cd8d2]/10 flex items-center justify-center text-[#1cd8d2] mb-3 mx-auto md:mx-0'>
                                                {item.icon}
                                            </div>

                                            <div className='text-sm text-gray-400'>
                                                {item.label}
                                            </div>

                                            <div className='text-base font-semibold mt-1'>
                                                {item.value}
                                            </div>
                                        </div>

                                    </motion.div>
                                ))
                            }

                        </div>

                        {/* BUTTONS */}
                        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>

                            <a
                                href="#projects"
                                className='group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition'
                            >
                                <FolderOpen size={18} />
                                View Projects
                            </a>

                            <a
                                href="#contacts"
                                className='group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white px-6 py-3 hover:bg-white/20 transition'
                            >
                                <Mail size={18} />
                                Get In Touch
                            </a>

                        </div>

                    </div>
                </motion.div>

                {/* ABOUT SECTION */}
                <motion.div
                    className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 md:p-10'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Glow Effects */}
                    <div className='absolute top-0 right-0 w-40 h-40 bg-[#1cd8d2]/10 blur-[90px] rounded-full'></div>
                    <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#302b63]/20 blur-[80px] rounded-full'></div>

                    <div className='relative z-10'>

                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1cd8d2]/20 bg-[#1cd8d2]/5 text-[#1cd8d2] text-sm font-medium mb-5'
                        >
                            <Sparkles size={16} />
                            Passioniate Developer
                        </motion.div>

                        {/* Heading */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className='text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight'
                        >
                            Building Experiences <br className='hidden sm:block' />
                            That Feel Modern & Meaningful
                        </motion.h3>

                        {/* Paragraph Cards */}
                        <div className='grid md:grid-cols-2 gap-6'>

                            {/* Card 1 */}
                            <motion.div
                                whileHover={{
                                    y: -6,
                                    scale: 1.01
                                }}
                                transition={{ duration: 0.3 }}
                                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1cd8d2]/10 to-transparent p-6'
                            >

                                {/* Animated Background */}
                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#1cd8d2]/10 via-transparent to-[#302b63]/10'></div>

                                {/* Icon */}
                                <div className='relative z-10 w-14 h-14 rounded-2xl bg-[#1cd8d2]/10 border border-[#1cd8d2]/20 flex items-center justify-center text-[#1cd8d2] mb-5'>
                                    <Code size={26} />
                                </div>

                                {/* Title */}
                                <h4 className='relative z-10 text-xl font-semibold text-white mb-3'>
                                    Developer & Creator
                                </h4>

                                {/* Text */}
                                <p className='relative z-10 text-gray-300 leading-relaxed text-base sm:text-lg'>
                                    I'm a Software Developer, Content Creator and Web Developer —
                                    passionate about building fast, resilient applications and sharing
                                    coding insights on Instagram and YouTube.
                                </p>

                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                whileHover={{
                                    y: -6,
                                    scale: 1.01
                                }}
                                transition={{ duration: 0.3 }}
                                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#302b63]/30 to-black/30 p-6'
                            >

                                {/* Animated Glow */}
                                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'></div>

                                <div className='absolute -right-10 -bottom-10 w-40 h-40 bg-[#1cd8d2]/10 blur-[80px] rounded-full'></div>

                                {/* Icon */}
                                <div className='relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1cd8d2] mb-5'>
                                    <Zap size={26} />
                                </div>

                                {/* Title */}
                                <h4 className='relative z-10 text-xl font-semibold text-white mb-3'>
                                    Modern Product Builder
                                </h4>

                                {/* Text */}
                                <p className='relative z-10 text-gray-400 text-base sm:text-lg leading-relaxed'>
                                    I love turning ideas into scalable, user-friendly products
                                    that make a real impact through clean architecture,
                                    modern UI and performance-driven development.
                                </p>

                            </motion.div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default About
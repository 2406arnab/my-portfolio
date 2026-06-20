// import { AnimatePresence } from 'framer-motion';
// import React, { useEffect, useMemo, useState } from 'react'
// import { motion } from 'framer-motion'

// const IntroAnimation = ({ onFinish }) => {
//     const greetings = [
//         "Hello", "नमस्ते", "Hola", "Bonjour",
//         "Ciao", "Olá", "Здравствуйте",
//         "Merhaba", "Γειά", "Hej", "Hallo", "Salam"
//     ];
//     const [index, setIndex] = useState(0);
//     const [visible, setVisible] = useState(true);
//     useEffect(() => {
//         if (index < greetings.length - 1) {
//             const id = setInterval(() => setIndex((i) => i + 1), 180);
//             return () => clearInterval(id);
//         }
//         else {
//             const t = setTimeout(() => setVisible(false), 200);
//             return () => clearTimeout(t);
//         }
//     }, [index, greetings.length])
//     return (
//         <AnimatePresence onExitComplete={onFinish}>
//             {
//                 visible && (
//                     <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden" initial={{ y: 0 }} exit={{
//                         y: "-100%", transition: {
//                             duration: 1.05,
//                             ease: [0.22, 1, 0.36, 1]
//                         }
//                     }}>
//                         <motion.h1 key={index} className="text-5xl md:text-7xl lg:text-8xl font-bold"
//                             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.12 }}>
//                             {greetings[index]}
//                         </motion.h1>
//                     </motion.div>
//                 )
//             }
//         </AnimatePresence>
//     )
// }

// export default IntroAnimation

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import {
    Sparkles,
    Globe2,
    Code2,
    Zap
} from "lucide-react";

const IntroAnimation = ({ onFinish }) => {

    const greetings = [
        "Hello",
        "नमस्ते",
        "Hola",
        "Bonjour",
        "Ciao",
        "Olá",
        "Здравствуйте",
        "Merhaba",
        "Γειά",
        "Hej",
        "Hallo",
        "Salam"
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {

        if (index < greetings.length - 1) {

            const id = setInterval(() => {
                setIndex((i) => i + 1);
            }, 220);

            return () => clearInterval(id);

        } else {

            const t = setTimeout(() => {
                setVisible(false);
            }, 900);

            return () => clearTimeout(t);

        }

    }, [index, greetings.length]);

    return (

        <AnimatePresence onExitComplete={onFinish}>

            {
                visible && (

                    <motion.div
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            bg-black
                            text-white
                        "
                        initial={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.05,
                            transition: {
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        }}
                    >

                        {/* ========================= */}
                        {/* BACKGROUND */}
                        {/* ========================= */}

                        <div className="absolute inset-0 overflow-hidden">

                            {/* Cyan Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.15, 0.3, 0.15],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity
                                }}
                                className="
                                    absolute
                                    top-[-10%]
                                    left-[-10%]
                                    w-[400px]
                                    h-[400px]
                                    rounded-full
                                    bg-cyan-500/30
                                    blur-[120px]
                                "
                            />

                            {/* Purple Glow */}
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.15, 0.25, 0.15],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity
                                }}
                                className="
                                    absolute
                                    bottom-[-10%]
                                    right-[-10%]
                                    w-[400px]
                                    h-[400px]
                                    rounded-full
                                    bg-fuchsia-500/20
                                    blur-[120px]
                                "
                            />

                            {/* Grid */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                                    bg-[size:55px_55px]
                                    opacity-20
                                "
                            />

                        </div>

                        {/* ========================= */}
                        {/* CENTER CONTENT */}
                        {/* ========================= */}

                        <div
                            className="
                                relative
                                z-10
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                px-6
                            "
                        >

                            {/* Floating Badge */}
                            <motion.div
                                animate={{
                                    y: [0, -6, 0]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity
                                }}
                                className="
                                    mb-6
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.05]
                                    px-5
                                    py-2
                                    backdrop-blur-xl
                                "
                            >

                                <Sparkles
                                    size={16}
                                    className="text-cyan-300"
                                />

                                <span className="text-xs sm:text-sm tracking-wide text-white/80">
                                    Welcome To My Portfolio
                                </span>

                            </motion.div>

                            {/* Circular Animation */}
                            <motion.div
                                animate={{
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="
                                    relative
                                    mb-10
                                    w-[120px]
                                    h-[120px]
                                    sm:w-[150px]
                                    sm:h-[150px]
                                "
                            >

                                {/* Outer Ring */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        border
                                        border-cyan-400/20
                                    "
                                />

                                {/* Inner Ring */}
                                <div
                                    className="
                                        absolute
                                        inset-3
                                        rounded-full
                                        border
                                        border-fuchsia-400/20
                                    "
                                />

                                {/* Top Icon */}
                                <motion.div
                                    animate={{
                                        y: [0, -6, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                    className="
                                        absolute
                                        top-0
                                        left-1/2
                                        -translate-x-1/2
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-cyan-500/20
                                        backdrop-blur-xl
                                        border
                                        border-cyan-300/20
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Code2
                                        size={18}
                                        className="text-cyan-300"
                                    />

                                </motion.div>

                                {/* Bottom Icon */}
                                <motion.div
                                    animate={{
                                        y: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity
                                    }}
                                    className="
                                        absolute
                                        bottom-0
                                        left-1/2
                                        -translate-x-1/2
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-fuchsia-500/20
                                        backdrop-blur-xl
                                        border
                                        border-fuchsia-300/20
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Zap
                                        size={18}
                                        className="text-fuchsia-300"
                                    />

                                </motion.div>

                                {/* Left Icon */}
                                <motion.div
                                    animate={{
                                        x: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 2.1,
                                        repeat: Infinity
                                    }}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-white/10
                                        backdrop-blur-xl
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Globe2
                                        size={18}
                                        className="text-white"
                                    />

                                </motion.div>

                                {/* Center Core */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.08, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                    className="
                                        absolute
                                        inset-1/2
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        w-16
                                        h-16
                                        rounded-full
                                        bg-gradient-to-br
                                        from-cyan-400
                                        to-fuchsia-500
                                        shadow-[0_0_35px_rgba(34,211,238,0.55)]
                                    "
                                />

                            </motion.div>

                            {/* Greeting Text */}
                            <AnimatePresence mode="wait">

                                <motion.h1
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                        scale: 0.92
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -30,
                                        scale: 1.08
                                    }}
                                    transition={{
                                        duration: 0.35
                                    }}
                                    className="
                                        text-5xl
                                        sm:text-6xl
                                        md:text-7xl
                                        lg:text-8xl
                                        font-black
                                        tracking-tight
                                        text-center
                                    "
                                >

                                    <motion.span
                                        animate={{
                                            color: [
                                                "#ffffff",
                                                "#67e8f9",
                                                "#ffffff",
                                                "#22d3ee",
                                                "#ffffff"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {greetings[index]}
                                    </motion.span>

                                </motion.h1>

                            </AnimatePresence>

                            {/* Bottom Text */}
                            <motion.p
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 0.3
                                }}
                                className="
                                    mt-6
                                    text-sm
                                    sm:text-base
                                    text-white/60
                                    tracking-[0.3em]
                                    uppercase
                                "
                            >
                                Full Stack Developer
                            </motion.p>

                        </div>

                    </motion.div>

                )
            }

        </AnimatePresence>

    );
};

export default IntroAnimation;
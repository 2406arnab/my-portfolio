import React from "react";
import { motion } from "framer-motion";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import {
  ArrowUpRight,
  Sparkles,
  Heart,
  Code2,
  Send,
} from "lucide-react";

const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arnab-ghosh-6538941b9/?skipRedirect=true",
    color: "from-cyan-400 to-blue-600",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/2406arnab",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    Icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/arnab.ghosh.379028",
    color: "from-cyan-400 to-blue-800",
  },
];

const Footer = () => {

  return (

    <footer className="relative overflow-hidden bg-black text-white">

      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-10%]
            left-[-10%]
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-500/20
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[420px]
            h-[420px]
            rounded-full
            bg-fuchsia-600/20
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:60px_60px]
            opacity-20
          "
        />

      </div>

      {/* ========================= */}
      {/* DESKTOP VIEW */}
      {/* ========================= */}

      <div className="hidden md:block">

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            md:px-10
            py-16
            md:py-20
          "
        >

          {/* TOP */}
          <div
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >

            <motion.div
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-xl
                text-sm
                font-medium
                text-white/80
              "
            >

              <Sparkles
                size={16}
                className="text-cyan-300"
              />

              Available For Freelance Work

            </motion.div>

            <h1
              className="
                font-black
                leading-none
                text-center
                tracking-tight
                bg-gradient-to-r
                from-#1cd8d2
                via-cyan-200
                to-1cd8d2
                bg-clip-text
                text-transparent
              "
              style={{
                fontSize: "clamp(3.2rem,9vw,8rem)"
              }}
            >
              Arnab Ghosh
            </h1>

            <p
              className="
                mt-4
                text-base
                md:text-lg
                text-white/70
                max-w-2xl
                leading-relaxed
              "
            >
              Full Stack Developer crafting modern,
              scalable and high-performance digital
              experiences with elegant UI and backend systems.
            </p>

            <div
              className="
                mt-8
                h-[3px]
                w-32
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-white
                to-fuchsia-500
              "
            />

          </div>

          {/* SOCIALS */}
          <div
            className="
              mt-12
              flex
              items-center
              justify-center
              gap-5
            "
          >

            {
              socials.map(
                ({
                  Icon,
                  label,
                  href,
                  color
                }) => (

                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -8,
                      scale: 1.08
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="group relative"
                  >

                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-2xl
                        bg-gradient-to-r
                        ${color}
                        blur-xl
                        opacity-0
                        group-hover:opacity-60
                        transition-all
                        duration-500
                      `}
                    />

                    <div
                      className="
                        relative
                        w-[78px]
                        h-[78px]
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        backdrop-blur-2xl
                        flex
                        items-center
                        justify-center
                        text-3xl
                      "
                    >

                      <Icon />

                    </div>

                  </motion.a>

                )
              )
            }

          </div>

          {/* QUOTE */}
          <div
            className="
              mt-14
              mx-auto
              max-w-3xl
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              text-center
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                mb-4
                text-cyan-300
              "
            >

              <Code2 size={18} />

              <span className="text-sm tracking-[0.2em] uppercase">
                Philosophy
              </span>

            </div>

            <p
              className="
                text-2xl
                italic
                font-medium
                text-white/90
              "
            >
              “Success is when preparation meets opportunity.”
            </p>

          </div>

          {/* BOTTOM */}
          <div
            className="
              mt-12
              pt-6
              border-t
              border-white/10
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-white/60
              "
            >

              Built with

              <Heart
                size={15}
                className="text-red-400 fill-red-400"
              />

              and modern web technologies

            </div>

            <motion.a
              href="#home"
              whileHover={{
                y: -4
              }}
              whileTap={{
                scale: 0.95
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-xl
                text-sm
                font-semibold
              "
              style={{
                color: "#1cd8d2",
                borderColor: "#1cd8d2"
              }}
            >

              Back To Top

              <ArrowUpRight size={18} />

            </motion.a>

          </div>

          <p
            className="
              mt-8
              text-center
              text-sm
              text-[#1cd8d2]
            "
          >
            © {new Date().getFullYear()} Arnab Ghosh.
            All rights reserved.
          </p>

        </motion.div>

      </div>

      {/* ========================= */}
      {/* MOBILE VIEW */}
      {/* ========================= */}

      <div className="md:hidden relative z-10 px-5 py-12">

        {/* Mobile Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-40
              h-40
              rounded-full
              bg-cyan-500/20
              blur-[80px]
            "
          />

          {/* Badge */}
          <motion.div
            animate={{
              y: [0, -4, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
            className="
              mx-auto
              mb-5
              w-fit
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-gradient-to-r
              from-[#1cd8d2]/20
              to-[#1cd8d2]/20
              border
              border-white/10
              text-xs
              font-medium
            "
          >

            <Sparkles size={14} />

            Open To Work

          </motion.div>

          {/* Name */}
          <h1
            className="
              text-center
              text-5xl
              font-black
              leading-none
              bg-gradient-to-r
              from-white
              via-cyan-200
              to-fuchsia-300
              bg-clip-text
              text-transparent
            "
          >
            Arnab
          </h1>

          <h1
            className="
              text-center
              text-5xl
              font-black
              leading-none
              mt-1
              bg-gradient-to-r
              from-[#1cd8d2]
              via-white
              to-[#1cd8d2]
              bg-clip-text
              text-transparent
            "
          >
            Ghosh
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              text-center
              text-sm
              leading-relaxed
              text-white/70
            "
          >
            Full Stack Developer creating modern,
            scalable and premium digital experiences
            with clean UI and strong performance.
          </p>

          {/* Socials */}
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-4
            "
          >

            {
              socials.map(
                ({
                  Icon,
                  label,
                  href,
                  color
                }) => (

                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -5
                    }}
                    whileTap={{
                      scale: 0.92
                    }}
                    className="group relative"
                  >

                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-2xl
                        bg-gradient-to-r
                        ${color}
                        blur-lg
                        opacity-40
                      `}
                    />

                    <div
                      className="
                        relative
                        w-[58px]
                        h-[58px]
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/40
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        text-xl
                      "
                    >

                      <Icon />

                    </div>

                  </motion.a>

                )
              )
            }

          </div>

          {/* Quote */}
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-white/10
              bg-black/30
              p-5
              text-center
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                mb-3
                text-cyan-300
              "
            >

              <Code2 size={16} />

              <span className="text-[10px] tracking-[0.3em] uppercase">
                Philosophy
              </span>

            </div>

            <p
              className="
                text-base
                italic
                text-white/90
                leading-relaxed
              "
            >
              “Success is when preparation meets opportunity.”
            </p>

          </div>

          {/* CTA */}
          <motion.a
            href="#contacts"
            whileTap={{
              scale: 0.95
            }}
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              w-full
              py-4
              rounded-2xl
              font-semibold
              text-sm
              bg-gradient-to-r
              from-cyan-500
              via-[#000]
              to-[#1cd8d2]
              shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >

            Let's Connect

            <Send size={16} />

          </motion.a>

          {/* Bottom */}
          <div
            className="
              mt-8
              pt-5
              border-t
              border-white/10
              flex
              flex-col
              items-center
              gap-3
            "
          >

            <motion.a
              href="#home"
              whileTap={{
                scale: 0.95
              }}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-white/70
              "
            >

              Back To Top

              <ArrowUpRight size={16} />

            </motion.a>

            <p
              className="
                text-[11px]
                text-[#1cd8d2]
                text-center
              "
            >
              © {new Date().getFullYear()} Arnab Ghosh.
              All rights reserved.
            </p>

          </div>

        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;
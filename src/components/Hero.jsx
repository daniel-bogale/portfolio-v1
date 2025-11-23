"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { styles } from "../styles";

const Hero = () => {
  const skills = [
    { name: "React", level: 99, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 98, color: "from-gray-700 to-black" },
    { name: "Node.js", level: 98, color: "from-green-400 to-green-600" },
    { name: "TypeScript", level: 97, color: "from-blue-500 to-indigo-600" },
    { name: "Python", level: 97, color: "from-yellow-400 to-orange-500" },
    { name: "JavaScript", level: 99, color: "from-yellow-400 to-yellow-600" },
    { name: "Express.js", level: 97, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", level: 96, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 95, color: "from-blue-400 to-blue-800" },
    { name: "Docker", level: 94, color: "from-blue-300 to-blue-700" },
    { name: "GraphQL", level: 93, color: "from-pink-400 to-purple-600" },
    { name: "Redux", level: 97, color: "from-purple-400 to-purple-700" },
    { name: "Tailwind CSS", level: 98, color: "from-cyan-400 to-blue-500" },
    { name: "HTML5", level: 99, color: "from-orange-400 to-orange-600" },
    { name: "CSS3", level: 98, color: "from-blue-400 to-blue-700" },
    { name: "Sass", level: 95, color: "from-pink-400 to-pink-700" },
    { name: "C++", level: 92, color: "from-blue-700 to-gray-700" },
    { name: "Java", level: 93, color: "from-red-400 to-red-700" },
    { name: "Figma", level: 90, color: "from-pink-500 to-yellow-500" },
    { name: "Three.js", level: 94, color: "from-black to-gray-700" },
  ];

  const achievements = [
    { number: "4+", label: "Years Experience" },
    { number: "9+", label: "Projects" },
    { number: "8+", label: "Team Led" },
    { number: "45+", label: "Mentored" },
  ];

  const skillsListRef = useRef(null);
  const [showScrollFade, setShowScrollFade] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const el = skillsListRef.current;
    if (!el) return;
    const checkScroll = () => {
      setShowScrollFade(el.scrollHeight - el.scrollTop > el.clientHeight + 2);
      setShowScrollUp(
        el.scrollTop > 2 &&
          el.scrollHeight - el.scrollTop <= el.clientHeight + 2
      );
    };
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className={`${styles.paddingX} relative max-w-7xl mx-auto w-full`}>
          <div className="grid md:grid-cols-2 gap-20 lg:gap-24 items-start pt-52 pb-24">
            <div className="space-y-12">
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="space-y-6"
                >
                  {/* Greeting */}
                  <motion.p
                    className="text-gray-400 text-base font-medium flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                      transition={{
                        duration: 2.5,
                        delay: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      👋
                    </motion.span>
                    <span className="tracking-wide">Hello, I'm</span>
                  </motion.p>

                  {/* Name */}
                  <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-white"
                    >
                      Daniel
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-transparent bg-gradient-to-r from-purple-400/70 via-pink-400/70 to-purple-400/70 bg-clip-text"
                    >
                      Bogale
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Role & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="space-y-5"
                >
                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-400/15 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400/60 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400/80"></span>
                    </span>
                    <h2 className="text-base font-medium text-gray-300">
                      Senior Software Developer
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg">
                    I build scalable web apps that help startups automate
                    workflows. Specializing in full-stack development, team
                    leadership, and mentoring developers.
                  </p>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    View My Work
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-2 md:px-8 md:py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full overflow-hidden backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <span className="relative flex items-center gap-2">
                    Work With Me
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.28,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4 md:gap-10"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                      delay: 0.42 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.04 }}
                    className={`text-center transition-transform duration-200 ${
                      index === 2 ? "hidden md:block" : ""
                    }`}
                  >
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1.5">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Compact Cards */}
            <div className="space-y-8 lg:pt-0">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: 42 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.25,
                  ease: [0.45, 0, 0.2, 1],
                }}
                className="backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_16px_40px_-30px_rgba(168,139,250,0.5)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_52px_-34px_rgba(168,139,250,0.65)]"
              >
                {/* Profile Image */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0.84 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.4,
                      ease: [0.45, 0, 0.2, 1],
                    }}
                    whileHover={{ scale: 1.04 }}
                    className="relative mx-auto h-24 w-24 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600  shadow-lg"
                  >
                    <motion.img
                      key="profile-photo"
                      src={"/profile/main.png"}
                      alt="Portrait of Daniel Bogale"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.46,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </motion.div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <motion.a
                    href="mailto:dannybg090909@gmail.com"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.45,
                      ease: [0.45, 0, 0.2, 1],
                    }}
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                  >
                    <span className="text-lg">✉️</span>
                    <div>
                      <p className="text-gray-400 text-xs">EMAIL</p>
                      <p className="text-white font-medium">
                        dannybg090909@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+251917826840"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.55,
                      ease: [0.45, 0, 0.2, 1],
                    }}
                    className="flex items-center space-x-2.5 p-3 rounded-xl  bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                  >
                    <span className="text-lg">📱</span>
                    <div>
                      <p className="text-gray-400 text-xs">PHONE</p>
                      <p className="text-white font-medium">+251917826840</p>
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6,
                      ease: [0.45, 0, 0.2, 1],
                    }}
                    className="flex items-center space-x-2.5 p-3 rounded-xl  bg-white/5 text-sm"
                  >
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-gray-400 text-xs">LOCATION</p>
                      <p className="text-white font-medium">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.75,
                    ease: [0.45, 0, 0.2, 1],
                  }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center text-sm gap-1 border-emerald-300/30">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border-emerald-300/30 border backdrop-blur-sm">
                      <span className="relative flex h-3 w-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>

                      <p className="text-green-300 font-medium">
                        Available for opportunities
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll Indicator */}
      <div className="xs:bottom-10 bottom-32 w-full flex justify-center items-center my-5 py-8">
        <a href="#about" className="z-10">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

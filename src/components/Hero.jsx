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
    <section className="relative w-full ">
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
                    className="text-gray-400 text-sm font-medium flex items-center gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.span
                      className="text-xl"
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
                  <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-purple-400/15 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400/60 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400/80"></span>
                    </span>
                    <h2 className="text-sm font-medium text-gray-300">
                      Senior Software Developer
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-lg">
                    Passionate about creating innovative digital solutions. I
                    specialize in full-stack development, team leadership, and
                    mentoring developers.
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
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 2px 8px -4px rgba(168, 85, 247, 0.05)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-500/80 via-purple-400/80 to-pink-500/80 text-white font-medium rounded-full overflow-hidden shadow-none hover:shadow-purple-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                >
                  {/* Animated shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>

                  {/* Button content */}
                  <span className="relative flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    View My Work
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    borderColor: "rgba(168, 85, 247, 0.6)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="group relative px-6 py-2.5 border-2 border-purple-400/60 text-purple-200/90 font-medium rounded-full overflow-hidden backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                >
                  {/* Animated gradient background on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                  {/* Button content */}
                  <span className="relative flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Let's Connect
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
                className="grid grid-cols-4 gap-10"
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
                    className="text-center transition-transform duration-200"
                  >
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
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
                className="backdrop-blur-md rounded-2xl p-8 shadow-[0_16px_40px_-30px_rgba(168,139,250,0.5)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_52px_-34px_rgba(168,139,250,0.65)]"
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
                    className="relative mx-auto h-20 w-20 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-[3px] shadow-lg"
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
                    className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                  >
                    <span>✉️</span>
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
                    className="flex items-center space-x-2 p-2.5 rounded-xl  bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181020]"
                  >
                    <span>📱</span>
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
                    className="flex items-center space-x-2 p-2.5 rounded-xl  bg-white/5 text-sm"
                  >
                    <span>📍</span>
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
                  <div className="flex items-center justify-center text-xs gap-1 border-emerald-300/30">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border-emerald-300/30 border backdrop-blur-sm">
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

              {/* <motion.div
                initial={{ opacity: 0, x: 42 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.35,
                  ease: [0.45, 0, 0.2, 1],
                }}
                className=" backdrop-blur-sm rounded-2xl p-5 shadow-[0_16px_40px_-30px_rgba(168,139,250,0.5)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_52px_-34px_rgba(168,139,250,0.65)]"
              >
                <h3 className="text-lg font-bold text-white mb-3 text-center">
                  Core Technologies
                </h3>
                <div className="relative">
                  <div
                    ref={skillsListRef}
                    className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar"
                    style={{
                      scrollbarWidth: "none",
                      scrollbarColor: "#a78bfa #2d2a4a",
                    }}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 26 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.75 + index * 0.03,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="space-y-1"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-white text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 0.7,
                              delay: 0.95 + index * 0.03,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {showScrollFade && (
                    <>
                      <div
                        className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 z-10 backdrop:blur-md"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(24,16,32,0.1) 70%, rgba(24,16,32,0.0) 100%)",
                        }}
                      />
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 bottom-2 z-20"
                        initial={false}
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#a78bfa"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-none"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </>
                  )}
                  {showScrollUp && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-2 z-10"
                      initial={false}
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a78bfa"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-none"
                      >
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll Indicator */}
      <div className="xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-16 py-8">
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

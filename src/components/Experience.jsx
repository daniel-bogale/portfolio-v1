import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TimelineProgressBar from "./TimelineProgressBar";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          className="flex justify-center items-center w-full h-full cursor-pointer"
          onClick={() => {
            openInNewTab(experience.company_url);
          }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold cursor-pointer"
          style={{ margin: 0 }}
          onClick={() => {
            openInNewTab(experience.company_url);
          }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const [trackMetrics, setTrackMetrics] = useState({
    top: 0,
    height: 0,
    left: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const PADDING = 20;
    const computeMetrics = () => {
      const icons = container.querySelectorAll(
        ".vertical-timeline-element-icon"
      );
      if (!icons || icons.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = icons[0].getBoundingClientRect();
      const lastRect = icons[icons.length - 1].getBoundingClientRect();

      const offsetTop = firstRect.top - containerRect.top;
      const offsetBottom = lastRect.bottom - containerRect.top;
      const top = Math.max(0, offsetTop - PADDING);
      const height = Math.max(0, offsetBottom + PADDING - top);

      const centerX = firstRect.left + firstRect.width / 2 - containerRect.left;

      setTrackMetrics({ top, height, left: centerX });
    };

    const raf = requestAnimationFrame(computeMetrics);

    const onResize = () => requestAnimationFrame(computeMetrics);
    window.addEventListener("resize", onResize);

    let resizeObserver;
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => computeMetrics());
      resizeObserver.observe(container);
    }

    const computeScrollProgress = () => {
      const icons = container.querySelectorAll(
        ".vertical-timeline-element-icon"
      );
      if (!icons || icons.length === 0) return;
      const firstRect = icons[0].getBoundingClientRect();
      const lastRect = icons[icons.length - 1].getBoundingClientRect();

      const trackTop = firstRect.top - PADDING;
      const trackBottom = lastRect.bottom + PADDING;
      const trackHeight = Math.max(1, trackBottom - trackTop);
      const h = window.innerHeight;

      const END_OFFSET = 64; // finish a bit earlier (px)
      const raw = (h - trackTop) / (trackHeight + h - END_OFFSET);
      const pct = Math.max(0, Math.min(1, raw)) * 100;
      setProgress(pct);
    };

    const onScroll = () => requestAnimationFrame(computeScrollProgress);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial compute after metrics
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver && resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div
        ref={sectionRef}
        className="mt-20 flex flex-col relative experience-section"
      >
        {/* Vertical progress bar that fills/unfills with scroll, shown only within Work section */}
        {inView && trackMetrics.height > 0 && (
          <TimelineProgressBar
            progress={progress}
            className="absolute -translate-x-1/2"
            style={{
              top: `${trackMetrics.top}px`,
              left: `${trackMetrics.left}px`,
              height: `${trackMetrics.height}px`,
            }}
          />
        )}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

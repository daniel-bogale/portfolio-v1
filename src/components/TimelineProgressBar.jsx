import React from "react";

const TimelineProgressBar = ({ progress = 0, className = "", style }) => {
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <div
      className={`pointer-events-none z-0 transform ${className}`}
      style={style}
      aria-hidden
    >
      <div className="w-[3px] xl:w-[5px] h-full bg-white/10 dark:bg-gray-800/30 rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 transition-[height] duration-150 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          style={{ height: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default TimelineProgressBar;

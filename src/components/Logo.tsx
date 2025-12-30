import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <rect width="32" height="32" rx="8" fill="#0A4D8C" />
        <path
          d="M8 12L12 22L16 12L20 22L24 12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-[#0A4D8C]">
          WebCraft <span className="text-[#0A4D8C]">Solutions</span>
        </span>
      )}
    </div>
  );
}

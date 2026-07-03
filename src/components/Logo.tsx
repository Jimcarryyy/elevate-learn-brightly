import { cn } from "@/lib/utils";
import { useId } from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  variant?: "default" | "light";
}

const Logo = ({
  className,
  iconClassName,
  showWordmark = true,
  wordmarkClassName,
  variant = "default",
}: LogoProps) => {
  const uid = useId().replace(/:/g, "");
  const gradId = `elevateLogoGrad-${uid}`;
  const shineId = `elevateLogoShine-${uid}`;

  const wordmarkColor =
    variant === "light" ? "text-white" : "text-foreground";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-9 w-9 shrink-0", iconClassName)}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D28D9" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#C084FC" />
          </linearGradient>
          <linearGradient id={shineId} x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill={`url(#${gradId})`} />
        <path
          d="M11 27L20 11L29 27H24.2L20 19.4L15.8 27H11Z"
          fill="white"
          fillOpacity="0.95"
        />
        <path
          d="M14.5 24.5H25.5L23.5 20.5H16.5L14.5 24.5Z"
          fill={`url(#${shineId})`}
        />
        <circle cx="30" cy="10" r="2.5" fill="white" fillOpacity="0.35" />
      </svg>
      {showWordmark && (
        <span className={cn("font-display text-xl font-semibold tracking-tight", wordmarkColor, wordmarkClassName)}>
          Elevate
        </span>
      )}
    </span>
  );
};

export default Logo;

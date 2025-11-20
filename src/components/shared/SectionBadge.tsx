interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
}

export function SectionBadge({ children, variant = "light" }: SectionBadgeProps) {
  const isDark = variant === "dark";

  return (
    <div className="inline-block">
      <span
        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
          isDark
            ? "bg-orange-600/20 border border-orange-500/30 text-orange-400"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

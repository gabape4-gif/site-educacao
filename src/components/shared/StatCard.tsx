import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  number?: string;
  label: string;
  variant?: "dark" | "light";
}

export function StatCard({ icon, number, label, variant = "dark" }: StatCardProps) {
  const isDark = variant === "dark";
  
  return (
    <div
      className={`group relative rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-2 ${
        isDark
          ? "bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-orange-500/50"
          : "bg-white border-neutral-200 hover:border-orange-400 shadow-lg hover:shadow-2xl"
      }`}
    >
      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100"
            : "bg-gradient-to-br from-orange-500/5 to-orange-50/50 opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      {/* Content */}
      <div className="relative text-center space-y-4">
        {/* Icon with background circle */}
        <div className="inline-flex p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl">
          {icon}
        </div>

        {/* Number */}
        {number && (
          <p
            className={`text-4xl md:text-5xl transition-colors ${
              isDark ? "text-orange-400" : "text-orange-600"
            }`}
          >
            {number}
          </p>
        )}

        {/* Label */}
        <p
          className={`text-lg leading-relaxed ${
            isDark ? "text-neutral-300" : "text-neutral-700"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

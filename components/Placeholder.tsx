import React from "react";
import { Image as ImageIcon, Plus } from "lucide-react";

interface PlaceholderProps {
  label: string;
  className?: string;
  height?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  label,
  className = "",
  height = "h-64",
}) => {
  return (
    <div
      className={`relative w-full ${height} overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center group ${className}`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Icon and Text */}
      <div className="z-10 flex flex-col items-center text-gray-500 group-hover:text-violet-400 transition-colors duration-300">
        <div className="mb-4 rounded-full bg-white/5 p-4 border border-white/5 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all">
          <ImageIcon className="h-8 w-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest opacity-70 mb-2">
          {label}
        </span>
        <span className="text-xs opacity-40">Aspect Ratio 4:3</span>
      </div>

      {/* Corners for visual flair */}
      <Plus className="absolute top-4 left-4 text-white/10 h-4 w-4" />
      <Plus className="absolute top-4 right-4 text-white/10 h-4 w-4" />
      <Plus className="absolute bottom-4 left-4 text-white/10 h-4 w-4" />
      <Plus className="absolute bottom-4 right-4 text-white/10 h-4 w-4" />
    </div>
  );
};

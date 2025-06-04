import { ButtonHTMLAttributes } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function GlassButton({ 
  children, 
  className = "", 
  ...props 
}: GlassButtonProps) {
  return (
    <button
      {...props}
      className={`px-3 py-1 border border-white/20 rounded-lg
        bg-white/5 backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105
        active:scale-95
        ${className}`.trim()}
    >
      {children}
    </button>
  );
}
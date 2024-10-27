import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}) => {
  return (
    <button
      className={cn(
        "glass relative group overflow-hidden",
        "flex items-center justify-center px-6 py-3 rounded-xl",
        "text-white font-medium",
        "transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "hover:scale-105 hover:shadow-lg active:scale-95",
        variant === 'primary' 
          ? "hover:shadow-purple-900/20 hover:border-purple-800/50" 
          : "hover:shadow-violet-900/20 hover:border-violet-800/50",
        className
      )}
      {...props}
    >
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        variant === 'primary'
          ? "bg-gradient-to-r from-purple-900/40 to-violet-900/40"
          : "bg-gradient-to-r from-violet-900/40 to-purple-900/40"
      )} />
      <div className="relative z-10 flex items-center gap-2">{children}</div>
    </button>
  );
};

export default Button;
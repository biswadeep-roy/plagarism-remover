import React from 'react';
import { cn } from '../utils/cn';

interface TextAreaProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
}) => {
  return (
    <div className="flex flex-col transform transition-all duration-300 hover:scale-[1.01]">
      <label className="text-lg font-semibold mb-3 flex items-center space-x-2">
        <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          {label}
        </span>
        <div className="h-px flex-grow bg-gradient-to-r from-purple-800/50 to-transparent" />
      </label>
      <textarea
        className={cn(
          "glass min-h-[400px] p-6 rounded-xl",
          "text-gray-200 placeholder-gray-600 text-lg leading-relaxed",
          "transition-all duration-300 ease-in-out",
          "focus:ring-2 focus:ring-purple-900/50 focus:border-purple-800/50",
          "hover:shadow-lg hover:shadow-purple-900/10",
          !readOnly && "glass-hover",
          readOnly && "bg-black/20 cursor-not-allowed"
        )}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

export default TextArea;
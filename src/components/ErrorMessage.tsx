import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-6 glass p-4 border-red-900/30 rounded-xl flex items-center gap-2 text-red-400 animate-float">
      <AlertCircle className="w-5 h-5 flex-shrink-0" />
      <p className="text-red-400/90">{message}</p>
    </div>
  );
};

export default ErrorMessage;
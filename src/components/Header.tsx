import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 transform hover:scale-[1.01] transition-transform duration-300">
      <h1 className="text-6xl font-bold mb-6 flex items-center justify-center gap-4">
        <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Transform Your Text
        </span>
        <Sparkles className="w-12 h-12 text-purple-500 animate-pulse-glow" />
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed glass p-6 rounded-xl group hover:bg-purple-950/20 transition-colors duration-300">
        Transform your text into unique content while preserving its original meaning.
        Our advanced AI-powered system helps you avoid plagiarism by intelligently
        restructuring sentences and using contextual synonyms.
      </p>
    </header>
  );
};

export default Header;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Paraphraser from './components/Paraphraser';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-950/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-violet-950/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-950/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '-4s' }}></div>
        </div>

        <nav className="glass border-b border-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2 group">
                <Sparkles className="w-6 h-6 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                  Plagiarism Remover
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Paraphraser />
        </div>
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { Wand2, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: 'Advanced AI Integration',
    description: 'Powered by state-of-the-art language models for high-quality paraphrasing results.',
    icon: Wand2
  },
  {
    title: 'Contextual Rewriting',
    description: 'Maintains context and meaning while providing unique, plagiarism-free content.',
    icon: Sparkles
  },
  {
    title: 'Real-time Processing',
    description: 'Quick and efficient text transformation with immediate results.',
    icon: Zap
  }
];

const Features: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300 group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-violet-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <Icon className="w-8 h-8 mb-4 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
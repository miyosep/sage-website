import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  const currentQuests = [
    "Learning Chess",
    "Reading some Greek Philosophy",
    "Attending my first hackathon in hk",
    "Trying to apply mathematical techniques to real-world problems",
  ];
  const recentQuests = [
    "Entering basic Japanese level",
    "Studying some basic DeFi protocols",
    "Tutoring math for international students",
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-6 border-b border-stone-200/60">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-sage-100 rounded-full">
              <Zap className="w-3.5 h-3.5 text-sage-600" />
            </div>
            <h3 className="font-serif text-lg text-sage-900">Current Quests</h3>
          </div>
          <ul className="space-y-2 pl-1">
            {currentQuests.map((quest, i) => (
              <li key={i} className="flex items-start group">
                <span className="mr-3 mt-2 w-1 h-1 bg-stone-300 rounded-full group-hover:bg-sage-400 transition-colors"></span>
                <span className="font-sans text-sm text-stone-600 group-hover:text-stone-900 transition-colors">{quest}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-stone-100 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-600" />
            </div>
            <h3 className="font-serif text-lg text-stone-900">Recent Quests</h3>
          </div>
          <ul className="space-y-2 pl-1">
            {recentQuests.map((quest, i) => (
              <li key={i} className="flex items-start group">
                <span className="mr-3 mt-2 w-1 h-1 bg-stone-300 rounded-full group-hover:bg-stone-500 transition-colors"></span>
                <span className="font-sans text-sm text-stone-500 decoration-stone-300 group-hover:text-stone-700 transition-colors">{quest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="prose prose-stone prose-lg font-serif text-stone-700 leading-loose max-w-none">
        <p>I'm an undergraduate math student at Peking University, deeply into theoretical and applied cryptography and all sorts of math-related stuff.</p>
        <p>In my free time, I have some hobbies like researching DPRK(in a legal way), playing baseball/softball, and learning unfamiliar languages.</p>
        <p>I'm kind of introvert, but I'm trying to be more extrovert by meeting new people and learning different cultures and languages. so feel free to reach out if you'd like to connect!</p>
        <p>contact: sagejhkim@proton.me</p>
      </div>
    </div>
  );
};

export default AboutPage;

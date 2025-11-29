
import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  const currentQuests = [
    "Thinking about real-world privacy-preserving system",
    "Studying DeFi smart contracts",
    "Learning Japanese (DuoLingo)",
    "Math tutor for Mongolian international students",
  ];

  const recentQuests = [
    "Participating in a softball tournament on behalf of Yuanpei College, PKU",
    "Attending exchange program in EdUHK",
    "Joining the PKU Blockchain Association",
  ];

  return (
    <div className="space-y-12">
      
      {/* Quests Section - Moved to Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-6 border-b border-stone-200/60">
        {/* Current Quests */}
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

        {/* Recent Quests */}
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
      
      {/* Main Bio */}
      <div className="prose prose-stone prose-lg font-serif text-stone-700 leading-loose max-w-none">
        <p>
          I'm primarily interested in theoratical and applied cryptography, blockchain and privacy rights more generally.
        </p>
        <p>
          I’m Korean and currently studying mathematics at Peking University. I think a lot about community building and governance systems, and I hope to explore different kinds of volunteering work—I believe these things can help make the world a better place.
        </p>
        <p>
          I also enjoy baseball, softball, and various other sports. Even though my comfort zone is math, I’m trying to explore more diverse fields. You can find the things I’m curious about on my “Curius” page on the Home section of my website(click the bookmark icon).
        </p>
        <p>
          If anything interests you, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

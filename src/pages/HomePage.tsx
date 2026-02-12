import React from 'react';
import { Mail, Instagram, X, Github, BookMarked, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/miyosep', icon: Github, label: 'miyosep'},
    { name: 'Email', url: 'mailto:ensage3@gmail.com', icon: Mail, label: 'ensage3@gmail.com' },
    { name: 'X', url: 'https://x.com/sagekim_jh', icon: X, label: '@sagekim_jh' },
    { name: 'Instagram', url: 'https://www.instagram.com/sagejh_/', icon: Instagram, label: '@sagejh_' },
    { name: 'Curius', url: 'https://curius.app/sage-kim', icon: BookMarked, label: 'sage-kim' },
    { name: 'NaverBlog', url: 'https://blog.naver.com/nomorecoercion', icon: BookOpen, label: 'nomorecoercion' },
  ];

  return (
    <div className="md:pt-12">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-10 relative z-10">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-sage-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl leading-[1.05] text-stone-900 tracking-tight">
              Hey <br /> I'm Sage :)
            </h3>
            <p className="font-sans text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg border-l-2 border-sage-300 pl-6">
              see also:
            </p>
          </div>
          <div className="flex items-center gap-6 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1 -ml-1"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-stone-400 group-hover:text-sage-600 group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 md:col-start-9 relative mt-8 md:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-200 shadow-sm">
            <img
              src="/image/Sage_profile.jpg"
              alt="Sage Kim"
              className="w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-1000 ease-out hover:cursor-grab active:cursor-grabbing"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-100/50 -z-10 rounded-full blur-2xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

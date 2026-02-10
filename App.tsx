
import React, { useState, useRef } from 'react';
import { PLATFORMS } from './constants';
import PlatformCard from './components/PlatformCard';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(PLATFORMS[0].id);
  
  // Refs for smooth scrolling
  const guidesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const selectedPlatform = PLATFORMS.find(p => p.id === selectedPlatformId)!;

  const scrollToSection = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              DeployMaster
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#guides" 
              onClick={(e) => scrollToSection(e, guidesRef)}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Guides
            </a>
            <a 
              href="#resources" 
              onClick={(e) => scrollToSection(e, resourcesRef)}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Resources
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Star on GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section: Guides */}
        <div className="lg:col-span-7 space-y-10" ref={guidesRef}>
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Deploy your React App</h2>
              <p className="text-slate-500">How would you like to publish your application to the world?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PLATFORMS.map(platform => (
                <PlatformCard 
                  key={platform.id}
                  platform={platform}
                  isSelected={selectedPlatformId === platform.id}
                  onSelect={setSelectedPlatformId}
                />
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedPlatform.color}`}>
                <i className={`${selectedPlatform.icon} text-xl`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedPlatform.name} Checklist</h3>
                <p className="text-sm text-slate-500">Follow these steps to go live</p>
              </div>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line connector */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-slate-100 -z-0"></div>
              
              {selectedPlatform.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative z-10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    {step.command && (
                      <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-blue-300 flex justify-between items-center group">
                        <code>{step.command}</code>
                        <button 
                          onClick={() => navigator.clipboard.writeText(step.command!)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-white"
                          title="Copy command"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
              <div className="text-amber-500 flex-shrink-0">
                <i className="fa-solid fa-triangle-exclamation text-xl"></i>
              </div>
              <div>
                <h5 className="font-bold text-amber-900 text-sm">Security Tip: The API Key</h5>
                <p className="text-amber-800 text-xs leading-relaxed mt-1">
                  Never commit your <strong>API_KEY</strong> directly into your code or push it to GitHub. 
                  Always use <strong>Environment Variables</strong> in your hosting provider's dashboard 
                  (e.g., Vercel Dashboard > Project Settings > Environment Variables).
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Section: AI Assistant & Resources */}
        <div className="lg:col-span-5 space-y-8" ref={resourcesRef}>
          <AIAssistant />

          <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
            <h3 className="font-bold text-xl mb-4">Quick Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-file-invoice"></i>
                  <span>Gemini API Billing Docs</span>
                </a>
              </li>
              <li>
                <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-book"></i>
                  <span>Vercel Documentation</span>
                </a>
              </li>
              <li>
                <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform">
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub Pages Guide</span>
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-code text-blue-500"></i>
              Common Commands
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Build for Production</p>
                <code className="block bg-slate-50 p-2 rounded border border-slate-100 text-xs text-slate-700">
                  npm run build
                </code>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Preview Build Locally</p>
                <code className="block bg-slate-50 p-2 rounded border border-slate-100 text-xs text-slate-700">
                  npm run preview
                </code>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm mb-2">
            Built with Gemini 3 Pro & React for the AI Studio Community
          </p>
          <div className="flex justify-center gap-4 text-slate-300 text-lg">
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import { Placeholder } from './Placeholder';

const BentoGrid: React.FC = () => {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          Build Your AI Chatbot, Your Way
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Customize, train, and launch intelligent chatbots effortlessly — a flexible, no-code platform built to fit your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: A/B Testing */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-1 hover:border-white/20 transition-colors">
            <div className="p-8 h-full flex flex-col">
                <div className="mb-6 h-48 md:h-56">
                    <Placeholder label="A/B Testing UI" height="h-full" />
                </div>
                <div className="mt-auto">
                    <h3 className="text-xl font-medium text-white mb-2">A/B Testing & Optimization</h3>
                    <p className="text-sm text-gray-400">Test, analyze, and refine chatbot flows to boost performance.</p>
                </div>
            </div>
        </div>

        {/* Card 2: Visual Builder */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-1 hover:border-white/20 transition-colors">
             <div className="p-8 h-full flex flex-col">
                <div className="mb-6 h-48 md:h-56">
                     <Placeholder label="Visual Node Builder" height="h-full" />
                </div>
                <div className="mt-auto">
                    <h3 className="text-xl font-medium text-white mb-2">Visual Chatbot Builder</h3>
                    <p className="text-sm text-gray-400">Track key metrics and measure performance to improve results.</p>
                </div>
            </div>
        </div>

        {/* Card 3: Integrations (Wider on large screens if desired, but 2x2 grid fits the image better) */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-1 hover:border-white/20 transition-colors">
             <div className="p-8 h-full flex flex-col">
                <div className="mb-6 h-48 md:h-56">
                    <Placeholder label="App Integrations Grid" height="h-full" />
                </div>
                <div className="mt-auto">
                    <h3 className="text-xl font-medium text-white mb-2">All-in-One Integrations</h3>
                    <p className="text-sm text-gray-400">Unify your workflows across every platform with ease.</p>
                </div>
            </div>
        </div>

        {/* Card 4: Analytics */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-1 hover:border-white/20 transition-colors">
             <div className="p-8 h-full flex flex-col">
                <div className="mb-6 h-48 md:h-56">
                    <Placeholder label="Analytics Charts" height="h-full" />
                </div>
                <div className="mt-auto">
                    <h3 className="text-xl font-medium text-white mb-2">Real-Time Analytics & Insights</h3>
                    <p className="text-sm text-gray-400">Track key metrics, measure performance to improve results.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
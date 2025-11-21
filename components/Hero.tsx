import React from "react";
import { ArrowRight } from "lucide-react";
import { Placeholder } from "./Placeholder";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
          Instantly Engage Customers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-600">
            with Smart AI Chatbots
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Automate conversations, boost sales, and provide 24/7 support, all
          with one intelligent chatbot platform designed for your business.
        </p>

        {/* Input Group */}
        <div
          id="email-input"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 w-full max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your business email"
            className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full outline-none focus:border-violet-500 transition-colors placeholder:text-gray-600"
          />
          <button className="w-full sm:w-auto whitespace-nowrap bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 transition-colors font-medium flex items-center justify-center gap-2">
            Get your AI Agent
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="relative mx-auto w-full max-w-3xl perspective-1000">
          <div className="relative rounded-2xl bg-neutral-900/50 p-2 border border-white/10 shadow-2xl shadow-violet-900/20 backdrop-blur-sm">
            <Placeholder
              label="Dashboard / Conversation Screenshot"
              height="h-[400px] md:h-[500px]"
            />

            {/* Floating UI Elements Mockup (CSS only decorations) */}
            <div className="absolute -left-12 top-1/3 hidden md:flex items-center gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[3000ms]">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">98% Satisfaction</span>
            </div>

            <div className="absolute -right-8 bottom-1/4 hidden md:flex items-center gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[4000ms]">
              <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs">
                AI
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium">Ticket Resolved</span>
                <span className="text-[10px] text-gray-400">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Placeholder } from "./Placeholder";

const FeatureBlock: React.FC<{
  title: string;
  description: string;
  ctaText: string;
  reversed?: boolean;
}> = ({ title, description, ctaText, reversed = false }) => {
  const handleScrollToEmail = () => {
    const element = document.querySelector("#email-input");
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center lg:gap-20 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Visual Side */}
      <div className="flex-1 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-blue-500/10 blur-2xl rounded-full opacity-50"></div>
        <div className="relative p-6 rounded-3xl bg-neutral-900/50 border border-white/5">
          <Placeholder label={`${title} Interface`} height="h-80 md:h-96" />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
        <button
          onClick={
            ctaText.toLowerCase().includes("try it free")
              ? handleScrollToEmail
              : undefined
          }
          className="rounded-full bg-indigo-500/10 px-6 py-2.5 text-sm font-medium text-indigo-300 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 md:px-6">
      <FeatureBlock
        title="Smarter Conversations with AI Assistance"
        description="Discover how intelligent chatbots transform customer experiences across industries and business functions. Automate routine queries effectively while keeping a human touch available when needed."
        ctaText="Try it Free" // Typo intentional to match image or corrected "Sign up free"
      />

      <FeatureBlock
        title="Scanning with AI Assist"
        description="Turn conversations into conversions. Suggest relevant products, recover abandoned carts, and guide customers to purchase with intelligent, personalized recommendations — all in real time."
        ctaText="Try it Free"
        reversed={true}
      />
    </section>
  );
};

export default Features;

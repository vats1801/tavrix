import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { Placeholder } from "./Placeholder";
import { saveEmail } from "../firebase";
import Snackbar from "./Snackbar";

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
    isOpen: boolean;
  }>({ message: "", type: "error", isOpen: false });

  const handleSubmit = async () => {
    // Validate email
    if (!email || !email.includes("@")) {
      setSnackbar({
        message: "Please enter a valid email address",
        type: "error",
        isOpen: true,
      });
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setSnackbar({ message: "", type: "error", isOpen: false });

    try {
      // Save email to Firebase and wait for API response
      const response = await saveEmail(email);

      // Only show success state after successful API response
      if (response && response.success) {
        setIsLoading(false);
        setIsSuccess(true);
        setSnackbar({
          message: "Email successfully saved!",
          type: "success",
          isOpen: true,
        });

        // Reset success state after 3 seconds (only on successful API response)
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
        }, 3000);
      }
    } catch (error: any) {
      console.error("Error saving email:", error);
      setIsLoading(false);
      setIsSuccess(false); // Ensure success state is false on error

      // Display the error message in snackbar
      setSnackbar({
        message: error?.message || "Failed to save. Please try again.",
        type: "error",
        isOpen: true,
      });
    }
  };

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
          <div className="w-full flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isLoading && !isSuccess) {
                  handleSubmit();
                }
              }}
              placeholder="Enter your business email"
              className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full outline-none focus:border-violet-500 transition-colors placeholder:text-gray-600"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isLoading || isSuccess}
            className={`w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-full transition-all font-medium flex items-center justify-center gap-2 ${
              isSuccess
                ? "bg-green-600 text-white"
                : isLoading
                ? "bg-violet-600/70 text-white cursor-not-allowed"
                : "bg-violet-600 text-white hover:bg-violet-700"
            }`}
          >
            {isSuccess ? (
              <>
                <CheckCircle size={16} />
                Successfully Saved!
              </>
            ) : isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                Get your AI Agent
                <ArrowRight size={16} />
              </>
            )}
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

      {/* Snackbar for notifications */}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      />
    </section>
  );
};

export default Hero;

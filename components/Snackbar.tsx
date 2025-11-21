import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface SnackbarProps {
  message: string;
  type: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type,
  isOpen,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-md border min-w-[300px] max-w-[500px] ${
          type === "success"
            ? "bg-green-600/90 border-green-500/50 text-white"
            : "bg-red-600/90 border-red-500/50 text-white"
        }`}
      >
        {type === "success" ? (
          <CheckCircle size={20} className="flex-shrink-0" />
        ) : (
          <AlertCircle size={20} className="flex-shrink-0" />
        )}
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(true);

  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoRedirect, navigate]);

  const suggestedLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/solutions", label: "Solutions", icon: "⚙️" },
    { path: "/about", label: "About Us", icon: "ℹ️" },
    { path: "/contact", label: "Contact", icon: "💬" },
    { path: "/blog", label: "Blog", icon: "📝" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-2xl w-full">
        {/* 404 Animation */}
        <div className="text-center mb-12">
          <div className="inline-block mb-8">
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              404
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Page Not Found
          </h1>

          <p className="text-xl text-slate-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Error Details Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2">
                What happened?
              </h2>
              <p className="text-slate-300">
                The URL you're trying to access either doesn't exist, or the
                page may have been deleted or moved to a different location.
                Let's get you back on track.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => navigate("/")}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 px-8 py-4 bg-slate-700/50 hover:bg-slate-700/80 text-white font-semibold rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
          >
            ← Go Back
          </button>
        </div>

        {/* Auto Redirect Info */}
        <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-300 mb-2">
                Redirecting to home in{" "}
                <span className="font-bold text-cyan-400">{countdown}s</span>
              </p>
              <p className="text-sm text-slate-400">
                Want to stay here? Click below to disable auto-redirect.
              </p>
            </div>
          </div>
          <button
            onClick={() => setAutoRedirect(!autoRedirect)}
            className="w-full px-4 py-2 bg-slate-700/30 hover:bg-slate-700/60 text-slate-300 hover:text-cyan-400 rounded-lg transition-all duration-300 text-sm font-medium border border-slate-600/50 cursor-pointer"
          >
            {autoRedirect
              ? "✓ Auto-redirect Enabled"
              : "✗ Auto-redirect Disabled"}
          </button>
        </div>

        {/* Suggested Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Suggested Pages:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suggestedLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-cyan-500/40 rounded-lg p-4 transition-all duration-300 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <p className="text-slate-300 group-hover:text-cyan-400 font-semibold transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-slate-500">{link.path}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm mb-2">
            Still can't find what you're looking for?
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors cursor-pointer"
          >
            Contact our support team →
          </button>
        </div>
      </div>
    </div>
  );
}

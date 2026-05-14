export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Animated taxi icon */}
        <div className="relative">
          <div className="text-6xl animate-bounce">🚕</div>
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full blur-sm opacity-30 animate-pulse"
            style={{ background: "var(--brand-primary)" }}
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{ background: "var(--brand-primary)" }}
          />
        </div>

        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0; }
          50% { width: 70%; margin-left: 15%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}

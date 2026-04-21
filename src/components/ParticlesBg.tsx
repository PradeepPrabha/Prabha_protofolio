export default function ParticlesBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${6 + (i * 7) % 18}px`, height: `${6 + (i * 7) % 18}px`,
          borderRadius: "50%",
          background: i % 3 === 0 ? "rgba(134,239,172,0.18)" : i % 3 === 1 ? "rgba(52,211,153,0.12)" : "rgba(16,185,129,0.10)",
          left: `${(i * 37 + 11) % 100}%`,
          top: `${(i * 53 + 7) % 100}%`,
          animation: `float${i % 3} ${8 + (i % 5) * 2}s ease-in-out infinite`,
          animationDelay: `${(i * 0.7) % 5}s`,
        }} />
      ))}
    </div>
  );
}
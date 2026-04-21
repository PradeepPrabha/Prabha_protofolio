import FadeIn from "./FadeIn";

const timeline = [
  { year: "2025", title: "Hospital Intern", place: "Snekeram Multiple Facility Hospital", desc: "Supported OPD, In-patient (medical & surgical), ECG procedures, Casualty, Labour ward, Laboratory & ICU departments. Gained hands-on clinical and lab experience.", icon: "🏥" },
  { year: "2022–2026", title: "BSc. Zoology", place: "Avinashilingam Institute for Home Science & Higher Education for Women", desc: "Pursuing undergraduate degree in Zoology with strong focus on laboratory practices, ecology, and field research.", icon: "🎓" },
  { year: "2021–2022", title: "HSLC", place: "Government Higher Secondary School, Alandurai, Coimbatore", desc: "Higher Secondary Level Certificate.", icon: "📚" },
  { year: "2020–2021", title: "SSLC", place: "Government Higher Secondary School, Alandurai, Coimbatore", desc: "Secondary School Level Certificate.", icon: "🏫" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 40px", background: "rgba(52,211,153,0.02)", borderTop: "1px solid rgba(52,211,153,0.08)", borderBottom: "1px solid rgba(52,211,153,0.08)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <p className="section-title">03 · Experience & Education</p>
          <div className="accent-line" style={{ marginTop: "12px" }} />
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, marginBottom: "70px", fontStyle: "italic" }}>My <span className="shimmer-text">Journey</span></h2>
        </FadeIn>

        <div style={{ position: "relative", paddingLeft: "32px" }}>
          <div style={{ position: "absolute", left: "12px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg,#34d399,rgba(52,211,153,0.1))" }} />
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ display: "flex", gap: "24px", marginBottom: "48px", position: "relative" }}>
                <div style={{ position: "absolute", left: "-27px", top: "6px", width: "28px", height: "28px", borderRadius: "50%", background: "#0a0f0d", border: "1px solid #34d399", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", animation: "pulse-border 2.5s ease-in-out infinite", animationDelay: `${i * 0.4}s` }}>{item.icon}</div>
                <div className="card" style={{ padding: "24px 28px", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "#ecfdf5" }}>{item.title}</h3>
                    <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#34d399", background: "rgba(52,211,153,0.1)", padding: "3px 10px", borderRadius: "20px" }}>{item.year}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "#6ee7b7", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 200, letterSpacing: "0.05em", marginBottom: "10px" }}>{item.place}</p>
                  <p style={{ fontSize: "0.92rem", color: "#a7f3d0", fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
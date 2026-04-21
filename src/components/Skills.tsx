import FadeIn from "./FadeIn";

const skills = {
  "Laboratory & Practical": ["Real-Time Laboratory Practices", "Practical Experiment Handling", "Equipment Handling & Safety Awareness"],
  "Scientific & Analytical": ["Scientific Understanding", "Logical Thinking", "Observation Skills", "Analytical Skills"],
  "Technical": ["Professional Computer Skills", "MS Office (Word, Excel, PowerPoint)", "Editing and Graphic Design"],
  "Strengths": ["Leadership", "Team Work", "Punctuality", "Good Motivator"],
};

const languages = ["English", "Tamil", "Kannada", "Telugu"];

export default function Skills() {
  return (
    <section id="skills" style={{ 
      padding: "100px 40px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      width: "100%"
    }}>
      <FadeIn>
        <p className="section-title">02 · Skills</p>
        <div className="accent-line" style={{ marginTop: "12px" }} />
        <h2 style={{ 
          fontSize: "clamp(2rem,4vw,3.5rem)", 
          fontWeight: 300, 
          marginBottom: "60px", 
          fontStyle: "italic" 
        }}>
          Capabilities &amp; <span className="shimmer-text">Expertise</span>
        </h2>
      </FadeIn>

      {/* Skills Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "28px",
        marginBottom: "60px"
      }}>
        {Object.entries(skills).map(([cat, items], ci) => (
          <FadeIn key={cat} delay={ci * 0.1}>
            <div className="card" style={{ 
              padding: "32px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(52,211,153,0.15)",
              borderRadius: "16px",
              transition: "all 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              <h3 style={{ 
                fontFamily: "'Josefin Sans',sans-serif", 
                fontSize: "0.75rem", 
                letterSpacing: "0.2em", 
                color: "#34d399", 
                marginBottom: "24px", 
                textTransform: "uppercase", 
                fontWeight: 500,
                borderBottom: "1px solid rgba(52,211,153,0.2)",
                paddingBottom: "12px",
                display: "inline-block"
              }}>
                {cat}
              </h3>
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "14px",
                flex: 1
              }}>
                {items.map(s => (
                  <div key={s} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "12px",
                    transition: "transform 0.2s ease"
                  }}>
                    <div style={{ 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      background: "#34d399", 
                      flexShrink: 0,
                      opacity: 0.8
                    }} />
                    <span style={{ 
                      fontSize: "0.9rem", 
                      color: "#d1fae5", 
                      fontWeight: 300,
                      lineHeight: 1.4
                    }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Languages Section */}
      <FadeIn delay={0.4}>
        <div style={{ 
          marginTop: "20px",
          padding: "40px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(52,211,153,0.1)",
          borderRadius: "16px",
          textAlign: "center"
        }}>
          <p style={{ 
            fontFamily: "'Josefin Sans',sans-serif", 
            fontSize: "0.75rem", 
            letterSpacing: "0.2em", 
            color: "#34d399", 
            marginBottom: "24px", 
            textTransform: "uppercase", 
            fontWeight: 500 
          }}>
            Languages Known
          </p>
          <div style={{ 
            display: "flex", 
            gap: "16px", 
            flexWrap: "wrap", 
            justifyContent: "center",
            alignItems: "center"
          }}>
            {languages.map(l => (
              <span key={l} className="skill-pill" style={{ 
                fontSize: "0.9rem", 
                padding: "10px 24px",
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: "40px",
                color: "#a7f3d0",
                fontFamily: "'Josefin Sans',sans-serif",
                transition: "all 0.3s ease",
                cursor: "default"
              }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <style>{`
        .card:hover {
          transform: translateY(-5px);
          background: rgba(52,211,153,0.06);
          border-color: rgba(52,211,153,0.35);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .skill-pill:hover {
          background: rgba(52,211,153,0.15);
          border-color: #34d399;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .card {
            padding: 24px !important;
          }
          
          .skill-pill {
            padding: 8px 18px !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .card {
            padding: 20px !important;
          }
          
          .skill-pill {
            padding: 6px 14px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
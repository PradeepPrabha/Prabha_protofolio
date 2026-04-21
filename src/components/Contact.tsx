import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 40px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <FadeIn>
        <p className="section-title">06 · Get In Touch</p>
        <div className="accent-line" style={{ marginTop: "12px", margin: "12px auto 24px" }} />
        <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, marginBottom: "24px", fontStyle: "italic" }}>Let's <span className="shimmer-text">Connect</span></h2>
        <p style={{ fontSize: "1rem", color: "#86efac", fontWeight: 300, lineHeight: 1.8, marginBottom: "48px" }}>
          I'm actively looking for entry-level opportunities in life sciences, laboratory research, or healthcare. Feel free to reach out!
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          {[
            { icon: "📧", label: "Email", value: "Sindhuprabha605@gmail.com", href: "mailto:Sindhuprabha605@gmail.com" },
            { icon: "📞", label: "Phone", value: "+91 98420 01344", href: "tel:+919842001344" },
            { icon: "📍", label: "Location", value: "Alandurai, Coimbatore, Tamil Nadu", href: null },
          ].map((c) => (
            <div key={c.label} className="card" style={{ padding: "20px 36px", width: "100%", maxWidth: "420px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#34d399", textTransform: "uppercase", marginBottom: "2px" }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} style={{ fontSize: "0.95rem", color: "#d1fae5", fontWeight: 300, textDecoration: "none" }}>{c.value}</a>
                ) : (
                  <p style={{ fontSize: "0.95rem", color: "#d1fae5", fontWeight: 300 }}>{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
import ParticlesBg from "./ParticlesBg";
import img from "../assets/photoes/111.png";
import resumeFile from "../assets/Resume/sindhu-prabha-resume.pdf.pdf";

interface HeroProps {
  heroAnim: boolean;
}

export default function Hero({ heroAnim }: HeroProps) {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link to download the resume using the imported file
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Sindhu_Prabha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      position: "relative", 
      overflow: "hidden", 
      paddingTop: "80px",
      paddingBottom: "60px"
    }}>
      <ParticlesBg />
      
      {/* Decorative elements - kept from original */}
      <div style={{ position: "absolute", right: "-60px", top: "10%", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "5%", bottom: "5%", fontSize: "180px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }}>🌿</div>
      <div style={{ position: "absolute", right: "8%", top: "20%", fontSize: "120px", opacity: 0.03, pointerEvents: "none", userSelect: "none" }}>🔬</div>
      <div style={{ position: "absolute", left: "10%", top: "50%", fontSize: "80px", opacity: 0.03, pointerEvents: "none", userSelect: "none" }}>🧬</div>

      <div style={{ 
        display: "flex",
        width: "100%",
        minHeight: "calc(100vh - 140px)",
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        {/* Left side - Content */}
        <div style={{ 
          flex: 1,
          minWidth: "300px",
          padding: "40px 30px 40px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: heroAnim ? 1 : 0, 
          transform: heroAnim ? "none" : "translateY(30px)", 
          transition: "all 0.8s ease 0.2s",
          zIndex: 2,
          background: "linear-gradient(90deg, rgba(10,15,13,0.95) 0%, rgba(10,15,13,0.85) 100%)",
        }}>
          {/* Greeting */}
          <p style={{ 
            fontSize: "clamp(0.75rem, 2vw, 0.85rem)", 
            color: "#34d399", 
            fontFamily: "'Josefin Sans', sans-serif",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            HELLO, I'M
          </p>
          
          {/* Name */}
          <h1 style={{ 
            fontSize: "clamp(2rem, 6vw, 4.5rem)", 
            fontWeight: 400, 
            lineHeight: 1.2, 
            marginBottom: "15px",
            color: "#e8f5e9"
          }}>
            Sindhu Prabha P
          </h1>
          
          {/* Title with shimmer effect */}
          <h2 style={{ 
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)", 
            fontWeight: 300, 
            color: "#86efac", 
            marginBottom: "20px",
            letterSpacing: "0.5px"
          }}>
            <span className="shimmer-text">Zoology Graduate</span>
          </h2>
          
          {/* Description */}
          <p style={{ 
            fontSize: "clamp(0.9rem, 2vw, 1rem)", 
            lineHeight: 1.6, 
            color: "#a7f3d0", 
            marginBottom: "25px",
            maxWidth: "550px"
          }}>
            Motivated Zoology graduate seeking entry-level positions in laboratory research, 
            clinical practices, and life sciences. Passionate about scientific discovery and 
            hands-on laboratory work.
          </p>
          
          {/* Contact Information */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px", 
            marginBottom: "30px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                borderRadius: "50%", 
                background: "rgba(52,211,153,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0
              }}>
                📧
              </div>
              <a href="mailto:Sindhuprabha605@gmail.com" style={{ 
                color: "#cbd5e1", 
                textDecoration: "none",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                transition: "color 0.2s",
                wordBreak: "break-all"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#34d399"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cbd5e1"}>
                Sindhuprabha605@gmail.com
              </a>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                borderRadius: "50%", 
                background: "rgba(52,211,153,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0
              }}>
                📞
              </div>
              <span style={{ color: "#cbd5e1", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>+91 98420 01344</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                borderRadius: "50%", 
                background: "rgba(52,211,153,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0
              }}>
                📍
              </div>
              <span style={{ color: "#cbd5e1", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Coimbatore, Tamil Nadu</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "35px" }}>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#34d399",
                color: "#0a0f0d",
                border: "none",
                padding: "10px 24px",
                fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "4px",
                letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#059669";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(52,211,153,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#34d399";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get In Touch
            </button>
            
            <button
              onClick={handleDownloadResume}
              style={{
                background: "transparent",
                color: "#86efac",
                border: "1px solid #34d399",
                padding: "10px 24px",
                fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "4px",
                letterSpacing: "0.5px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(52,211,153,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>📄</span>
              Download Resume
            </button>
          </div>
          
          {/* Stats Section */}
          <div style={{ 
            display: "flex", 
            gap: "clamp(20px, 5vw, 40px)", 
            flexWrap: "wrap",
            paddingTop: "20px",
            borderTop: "1px solid rgba(52,211,153,0.15)"
          }}>
            <div>
              <div style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 500, color: "#34d399" }}>8+</div>
              <div style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)", color: "#86efac", fontFamily: "'Josefin Sans', sans-serif" }}>Certifications</div>
            </div>
            <div>
              <div style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 500, color: "#34d399" }}>15+</div>
              <div style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)", color: "#86efac", fontFamily: "'Josefin Sans', sans-serif" }}>Lab Projects</div>
            </div>
            <div>
              <div style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 500, color: "#34d399" }}>5+</div>
              <div style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)", color: "#86efac", fontFamily: "'Josefin Sans', sans-serif" }}>Leadership Roles</div>
            </div>
          </div>
        </div>

        {/* Right side - Full size image covering entire right side from top to bottom */}
        <div style={{ 
          flex: 1,
          position: "relative",
          minWidth: "280px",
          minHeight: { xs: "400px", sm: "500px", md: "auto" },
          overflow: "hidden",
          opacity: heroAnim ? 1 : 0,
          transform: heroAnim ? "none" : "translateX(50px)",
          transition: "all 0.8s ease 0.4s",
          zIndex: 1
        }}>
          {/* Full height image container */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%"
          }}>
            <img 
              src={img}
              alt="Sindhu Prabha P"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                display: "block"
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = "linear-gradient(135deg, #1a2a1f, #0a0f0d)";
                  parent.style.display = "flex";
                  parent.style.alignItems = "center";
                  parent.style.justifyContent = "center";
                  const fallback = document.createElement("div");
                  fallback.style.textAlign = "center";
                  fallback.style.color = "#86efac";
                  fallback.style.fontSize = "3rem";
                  fallback.innerHTML = "📸<br/><span style='font-size: 14px;'>Profile Image</span>";
                  parent.appendChild(fallback);
                }
              }}
            />
            
            {/* Subtle gradient overlay for better blending */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(90deg, rgba(10,15,13,0.3) 0%, rgba(10,15,13,0) 50%, rgba(10,15,13,0) 100%)",
              pointerEvents: "none"
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.1);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
          }
        }
        
        @media (max-width: 768px) {
          #about {
            padding-top: 60px;
            padding-bottom: 40px;
          }
        }
        
        @media (max-width: 640px) {
          #about {
            padding-top: 50px;
          }
        }
        
        /* Ensure smooth transitions */
        * {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
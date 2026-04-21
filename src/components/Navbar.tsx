import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects",  "Contact"];

interface NavbarProps {
  active: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ active, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        background: "rgba(10,15,13,0.95)", 
        backdropFilter: "blur(16px)", 
        borderBottom: "1px solid rgba(52,211,153,0.15)", 
        padding: "16px 5%", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        {/* Logo */}
        <div style={{ 
          fontFamily: "'Josefin Sans', sans-serif", 
          fontSize: "clamp(0.7rem, 4vw, 0.8rem)", 
          letterSpacing: "0.3em", 
          fontWeight: 300, 
          color: "#86efac",
          cursor: "pointer"
        }} 
        onClick={() => handleScroll("About")}>
          SINDHU PRABHA P
        </div>

        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? "none" : "flex", 
          gap: "32px" 
        }}>
          {NAV_LINKS.map(l => (
            <span 
              key={l} 
              className={`nav-link${active === l ? " active" : ""}`} 
              onClick={() => handleScroll(l)}
              style={{
                cursor: "pointer",
                transition: "color 0.2s"
              }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              zIndex: 1001,
              position: "relative"
            }}
          >
            <div style={{
              width: "25px",
              height: "2px",
              background: menuOpen ? "transparent" : "#86efac",
              transition: "all 0.3s ease",
              marginBottom: "6px"
            }} />
            <div style={{
              width: "25px",
              height: "2px",
              background: "#86efac",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              marginBottom: menuOpen ? "0" : "6px"
            }} />
            <div style={{
              width: "25px",
              height: "2px",
              background: menuOpen ? "transparent" : "#86efac",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none"
            }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && menuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 999,
              animation: "fadeIn 0.3s ease"
            }}
          />
          
          {/* Menu Panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "70%",
              maxWidth: "300px",
              height: "100vh",
              background: "rgba(10, 15, 13, 0.98)",
              backdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(52, 211, 153, 0.2)",
              zIndex: 1000,
              padding: "100px 30px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              animation: "slideIn 0.3s ease",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)"
            }}
          >
            {NAV_LINKS.map((l, index) => (
              <div
                key={l}
                onClick={() => handleScroll(l)}
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: active === l ? "#34d399" : "#86efac",
                  padding: "12px 0",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(52, 211, 153, 0.1)",
                  transition: "all 0.2s ease",
                  animation: `fadeInSlide 0.3s ease ${index * 0.05}s both`,
                  fontWeight: active === l ? 500 : 300
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#34d399";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active === l ? "#34d399" : "#86efac";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {l}
              </div>
            ))}
            
            {/* Contact Info in Mobile Menu */}
            <div style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(52, 211, 153, 0.2)"
            }}>
              <p style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "0.7rem",
                color: "#34d399",
                letterSpacing: "0.15em",
                marginBottom: "15px"
              }}>
                CONTACT
              </p>
              <a 
                href="mailto:Sindhuprabha605@gmail.com"
                style={{
                  display: "block",
                  color: "#a7f3d0",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  marginBottom: "10px",
                  fontFamily: "'Josefin Sans', sans-serif"
                }}
              >
                📧 Sindhuprabha605@gmail.com
              </a>
              <p style={{
                color: "#a7f3d0",
                fontSize: "0.8rem",
                fontFamily: "'Josefin Sans', sans-serif"
              }}>
                📞 +91 98420 01344
              </p>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          .nav-link {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </>
  );
}
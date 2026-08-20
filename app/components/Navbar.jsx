"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Process", href: "#process", id: "process" },
    { name: "About", href: "#about", id: "about" },
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu
  const handleLinkClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <nav
      className="fixed-top"
      style={{
        background: "rgba(245, 245, 242, 0.94)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(6, 26, 36, 0.08)",
        zIndex: 9999,
      }}
    >
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            minHeight: "78px",
          }}
        >
          

          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="text-decoration-none d-flex align-items-center"
            style={{
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#F5F5F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src="/logo1.png"
                width={60}
                height={60}
                alt="CB Logo"
                
              />
            </div>

            <div
              style={{
                lineHeight: "1.1",
              }}
            >
              <div
                style={{
                  color: "#061A24",
                  fontSize: "18px",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                }}
              >
                Chayan Biswas
              </div>

              <div
                style={{
                  color: "#687780",
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Web Developer
              </div>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}

          <div className="d-none d-lg-flex align-items-center gap-2">
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-decoration-none position-relative"
                  style={{
                    color: isActive ? "#061A24" : "#687780",
                    fontSize: "18px",
                    fontWeight: isActive ? "700" : "600",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    transition:
                      "color 0.25s ease, background 0.25s ease",
                  }}
                  
                   onMouseEnter={(e) => {
                
                e.currentTarget.style.boxShadow =
                  "0 12px 30px hsl(58, 98%, 49%)";
              }}

               onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow =
                  "none";
                e.currentTarget.style.color =
                  "#687780";
              }}
                  
                >
                  {link.name}

                  {/* Active Indicator */}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        left: "14px",
                        right: "14px",
                        bottom: "4px",
                        height: "2px",
                        borderRadius: "10px",
                        background: "#FFD84D",
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* ================= CTA ================= */}

            <a
              href="#contact"
              className="text-decoration-none d-flex align-items-center gap-2 ms-2"
              style={{
                background: "rgb(253, 234, 90)",
                color: "#061A24",
                padding: "12px 19px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(255, 216, 77, 0.20)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px hsl(58, 98%, 49%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(255, 216, 77, 0.20)";
              }}
            >
              Start a Project
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setOpen(!open)}
            className="d-lg-none border-0 d-flex align-items-center justify-content-center"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#061A24",
              color: "#fff",
              transition: "transform 0.2s ease",
            }}
            aria-label="Toggle navigation"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {open && (
          <div
            className="d-lg-none pb-4"
            style={{
              borderTop: "1px solid rgba(6, 26, 36, 0.08)",
              paddingTop: "12px",
              animation: "navMenuOpen 0.25s ease",
            }}
          >
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className="d-flex align-items-center justify-content-between text-decoration-none"
                  style={{
                    color: isActive ? "#061A24" : "#687780",
                    fontSize: "16px",
                    fontWeight: isActive ? "700" : "600",
                    padding: "15px 8px",
                    borderBottom:
                      "1px solid rgba(6, 26, 36, 0.07)",
                    transition: "0.25s ease",
                  }}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#FFD84D",
                        boxShadow:
                          "0 0 0 5px rgba(255, 216, 77, 0.15)",
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Mobile CTA */}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-decoration-none d-flex align-items-center justify-content-center gap-2 mt-4"
              style={{
                background: "#FFD84D",
                color: "#061A24",
                padding: "14px 20px",
                borderRadius: "50px",
                fontWeight: "700",
                boxShadow:
                  "0 8px 24px rgba(255, 216, 77, 0.20)",
              }}
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        )}
      </div>

      {/* Small animation */}
      <style jsx>{`
        @keyframes navMenuOpen {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
"use client";

import { ArrowUpRight, Code2, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "#061A24",
        color: "#fff",
        padding: "70px 0 25px",
      }}
    >
      <div className="container">

        {/* ================= TOP ================= */}

        <div className="row gy-5">

          {/* BRAND */}

          <div className="col-lg-6">

            <a
              href="#home"
              className="d-inline-flex align-items-center text-decoration-none"
              style={{
                gap: "12px",
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
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "800",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Chayan Biswas
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "9px",
                    fontWeight: "600",
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  Web Developer
                </div>
              </div>
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "13px",
                lineHeight: "1.8",
                maxWidth: "390px",
                marginTop: "25px",
                marginBottom: 0,
              }}
            >
              I build modern, responsive websites and digital
              experiences that help businesses look professional
              and grow online.
            </p>

            {/* SOCIAL */}

            <div
              className="d-flex align-items-center gap-2"
              style={{
                marginTop: "25px",
              }}
            >

              <a
                href="https://wa.me/8801991291400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFD84D";
                  e.currentTarget.style.color = "#061A24";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <MessageCircle size={17} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFD84D";
                  e.currentTarget.style.color = "#061A24";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <Code2 size={17} />
              </a>

              

            </div>

          </div>

          {/* NAVIGATION */}

          <div className="col-6 col-lg-3">

            <div
              style={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "18px",
                textTransform: "uppercase",
                letterSpacing: "1.3px",
              }}
            >
              Navigation
            </div>

            <div className="d-flex flex-column gap-2">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.43)",
                    fontSize: "12px",
                    transition: "0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFD84D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(255,255,255,0.43)";
                  }}
                >
                  {link.name}
                </a>

              ))}

            </div>

          </div>

          {/* SERVICES */}

          <div className="col-6 col-lg-3">

            <div
              style={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "18px",
                textTransform: "uppercase",
                letterSpacing: "1.3px",
              }}
            >
              Services
            </div>

            <div className="d-flex flex-column gap-2">

              {[
                "Landing Page",
                "Business Website",
                "React Website",
                "Next.js Development",
                "Website Redesign",
              ].map((service) => (

                <a
                  key={service}
                  href="#services"
                  className="text-decoration-none"
                  style={{
                    color: "rgba(255,255,255,0.43)",
                    fontSize: "12px",
                    transition: "0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFD84D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(255,255,255,0.43)";
                  }}
                >
                  {service}
                </a>

              ))}

            </div>

          </div>

        </div>
           <div
  style={{
    marginTop: "20px",
  }}
>
  <div
    style={{
      color: "rgba(255,255,255,0.35)",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "6px",
    }}
  >
    Get in touch
  </div>

  <a
    href="mailto:your@email.com"
    className="text-decoration-none"
    style={{
      color: "#FFD84D",
      fontSize: "13px",
      fontWeight: "600",
    }}
  >
  itzchayan24@gmail.com
  </a>
</div>

        {/* ================= DIVIDER ================= */}

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginTop: "60px",
            marginBottom: "22px",
          }}
        />

        {/* ================= BOTTOM ================= */}

        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
        >

          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "10px",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Chayan Biswas. All rights reserved.
          </p>

       

          <a
            href="#contact"
            className="d-flex align-items-center gap-1 text-decoration-none"
            style={{
              color: "#FFD84D",
              fontSize: "11px",
              fontWeight: "700",
            }}
          >
            Lets work together
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>

    </footer>
  );
}
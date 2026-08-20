"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#F5F5F2",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ================= MAIN CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            position: "relative",
            background: "#061A24",
            borderRadius: "28px",
            padding: "70px 40px",
            overflow: "hidden",
            border: "1px solid rgba(6,26,36,0.08)",
          }}
        >

          {/* Background glow */}

          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,216,77,0.12), transparent 70%)",
              right: "-140px",
              top: "-180px",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(84,214,194,0.08), transparent 70%)",
              left: "-150px",
              bottom: "-160px",
              pointerEvents: "none",
            }}
          />

          {/* Content */}

          <div
            className="row align-items-center position-relative"
            style={{
              zIndex: 2,
            }}
          >

            {/* LEFT */}

            <div className="col-lg-8">

              <div
                className="d-flex align-items-center gap-2"
                style={{
                  color: "#54D6C2",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                <Sparkles size={14} />

                Lets build something
              </div>

              <h2
                style={{
                  color: "#FFFFFF",
                  fontSize:
                    "clamp(40px, 6vw, 72px)",
                  lineHeight: "0.98",
                  letterSpacing: "-3px",
                  fontWeight: "800",
                  margin: 0,
                  maxWidth: "760px",
                }}
              >
                Ready to build
                <br />

                <span
                  style={{
                    color: "#FFD84D",
                    fontStyle: "italic",
                  }}
                >
                  something great?
                </span>
              </h2>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.45)",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  maxWidth: "540px",
                  marginTop: "25px",
                  marginBottom: 0,
                }}
              >
                Tell me what youre building, what you need,
                and where you want to go. Ill help turn your
                idea into a polished digital experience.
              </p>

            </div>

            {/* RIGHT */}

            <div className="col-lg-4 mt-5 mt-lg-0">

              <div
                className="d-flex flex-column align-items-lg-end"
              >

                <motion.a
  href="https://wa.me/8801991291400"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    y: -4,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="d-inline-flex align-items-center gap-2 text-decoration-none"
  style={{
    background: "#FFD84D",
    color: "#061A24",
    padding: "15px 21px",
    borderRadius: "50px",
    fontSize: "20px",
    fontWeight: "800",
  }}
>
  Contact Me
  <ArrowUpRight size={17} />
</motion.a>

               

              </div>

            </div>

          </div>

        </motion.div>

        {/* ================= CONTACT OPTIONS ================= */}

        <div
          className="row g-3"
          style={{
            marginTop: "18px",
          }}
        >

          {/* Email */}

          <div className="col-12 col-md-4">

            <motion.a
              href="mailto:hello@example.com"
              whileHover={{
                y: -4,
              }}
              className="d-block text-decoration-none"
              style={{
                height: "100%",
                padding: "25px",
                borderRadius: "18px",
                background: "#FFFFFF",
                border:
                  "1px solid rgba(6,26,36,0.07)",
              }}
            >

              <Mail
                size={20}
                color="#061A24"
              />

              <div
                style={{
                  color: "#061A24",
                  fontSize: "16px",
                  fontWeight: "750",
                  marginTop: "18px",
                }}
              >
                Email me
              </div>

              <div
                style={{
                  color: "#7A878D",
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                Lets discuss your project
              </div>

            </motion.a>

          </div>

          {/* Project */}

          <div className="col-12 col-md-4">

            <motion.a
              href="#contact"
              whileHover={{
                y: -4,
              }}
              className="d-block text-decoration-none"
              style={{
                height: "100%",
                padding: "25px",
                borderRadius: "18px",
                background: "#FFFFFF",
                border:
                  "1px solid rgba(6,26,36,0.07)",
              }}
            >

              <MessageCircle
                size={20}
                color="#061A24"
              />

              <div
                style={{
                  color: "#061A24",
                  fontSize: "16px",
                  fontWeight: "750",
                  marginTop: "18px",
                }}
              >
                Have an idea?
              </div>

              <div
                style={{
                  color: "#7A878D",
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                Tell me what you have in mind
              </div>

            </motion.a>

          </div>

          {/* Availability */}

          <div className="col-12 col-md-4">

            <motion.div
              whileHover={{
                y: -4,
              }}
              style={{
                height: "100%",
                padding: "25px",
                borderRadius: "18px",
                background: "#FFD84D",
                border:
                  "1px solid rgba(6,26,36,0.04)",
              }}
            >

              <div
                className="d-flex align-items-center gap-2"
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#16A34A",
                    boxShadow:
                      "0 0 0 5px rgba(22,163,74,0.12)",
                  }}
                />

                <span
                  style={{
                    color: "#061A24",
                    fontSize: "11px",
                    fontWeight: "750",
                  }}
                >
                  Available for projects
                </span>
              </div>

              <div
                style={{
                  color: "#061A24",
                  fontSize: "16px",
                  fontWeight: "750",
                  marginTop: "18px",
                }}
              >
                Lets work together.
              </div>

              <div
                style={{
                  color:
                    "rgba(6,26,36,0.58)",
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                New projects welcome
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
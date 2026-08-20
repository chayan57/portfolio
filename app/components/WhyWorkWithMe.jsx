"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  MessageCircle,
  Smartphone,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Sparkles,
    title: "Design that feels intentional",
    text: "Every section is designed with a clear purpose, strong visual hierarchy, and a professional look that builds trust.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Responsive by default",
    text: "Your website will look and work properly across desktop, tablet, and mobile screens.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Built for performance",
    text: "Clean development and optimized experiences help your website load faster and feel smoother.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Clear communication",
    text: "You will always know what is being worked on, what comes next, and where your project stands.",
  },
];

const expectations = [
  "Modern and professional design",
  "Fully responsive experience",
  "Clean and maintainable code",
  "Fast and optimized website",
  "Clear communication",
  "Deployment-ready project",
];

export default function WhyWorkWithMe() {
  return (
    <section
      style={{
        background: "#061A24",
        padding: "110px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="row align-items-end">

          <div className="col-lg-7">

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="d-flex align-items-center gap-2"
              style={{
                color: "#54D6C2",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#54D6C2",
                }}
              />

              Why Work With Me
            </motion.div>

            <motion.h2
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
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(38px, 5vw, 62px)",
                lineHeight: "1",
                letterSpacing: "-2.7px",
                fontWeight: "800",
                margin: 0,
              }}
            >
              More than just
              <br />
              <span
                style={{
                  color: "#FFD84D",
                  fontStyle: "italic",
                }}
              >
                a website.
              </span>
            </motion.h2>

          </div>

          <div className="col-lg-5 mt-4 mt-lg-0">

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              style={{
                color: "rgba(255,255,255,0.48)",
                fontSize: "14px",
                lineHeight: "1.8",
                maxWidth: "390px",
                marginLeft: "auto",
                marginBottom: 0,
              }}
            >
              I focus on creating digital experiences that are visually
              strong, technically solid, and actually useful for your
              business.
            </motion.p>

          </div>

        </div>

        {/* ================= REASONS ================= */}

        <div
          className="row g-3"
          style={{
            marginTop: "65px",
          }}
        >
          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (
              <div
                className="col-12 col-md-6"
                key={reason.number}
              >

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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  style={{
                    height: "100%",
                    padding: "27px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(145deg, rgba(16,48,62,0.75), rgba(7,29,41,0.8))",
                    border:
                      "1px solid rgba(255,255,255,0.07)",
                  }}
                >

                  <div
                    className="d-flex align-items-center justify-content-between"
                  >

                    <span
                      style={{
                        color: "#54D6C2",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      {reason.number}
                    </span>

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "rgba(255,216,77,0.07)",
                        border:
                          "1px solid rgba(255,216,77,0.15)",
                      }}
                    >
                      <Icon
                        size={19}
                        color="#FFD84D"
                      />
                    </div>

                  </div>

                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      fontWeight: "750",
                      letterSpacing: "-0.5px",
                      marginTop: "28px",
                      marginBottom: "9px",
                    }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.43)",
                      fontSize: "12px",
                      lineHeight: "1.75",
                      maxWidth: "480px",
                      marginBottom: 0,
                    }}
                  >
                    {reason.text}
                  </p>

                </motion.div>

              </div>
            );
          })}
        </div>

        {/* ================= EXPECTATIONS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="row align-items-center"
          style={{
            marginTop: "75px",
            padding: "35px 0",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >

          <div className="col-lg-5">

            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "25px",
                fontWeight: "800",
                letterSpacing: "-0.8px",
                marginBottom: "10px",
              }}
            >
              What you can expect.
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "12px",
                lineHeight: "1.7",
                marginBottom: 0,
                maxWidth: "350px",
              }}
            >
              A professional development experience from the first
              conversation to the final launch.
            </p>

          </div>

          <div className="col-lg-7 mt-4 mt-lg-0">

            <div className="row g-3">

              {expectations.map((item) => (

                <div
                  className="col-12 col-sm-6"
                  key={item}
                >

                  <div
                    className="d-flex align-items-center gap-2"
                    style={{
                      color:
                        "rgba(255,255,255,0.62)",
                      fontSize: "11px",
                    }}
                  >

                    <CheckCircle2
                      size={15}
                      color="#54D6C2"
                    />

                    {item}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
          style={{
            marginTop: "65px",
          }}
        >

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "12px",
              marginBottom: "14px",
            }}
          >
            Ready to build something better?
          </p>

          <a
            href="#contact"
            className="d-inline-flex align-items-center gap-2 text-decoration-none"
            style={{
              background: "#FFD84D",
              color: "#061A24",
              padding: "14px 21px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: "750",
            }}
          >
            Start a Project
            <ArrowUpRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
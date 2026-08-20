"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    text: "We start by understanding your business, goals, audience, and what you want the website to achieve.",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    text: "I turn your ideas into a clean, modern interface with a strong visual direction and clear user experience.",
  },
  {
    number: "03",
    title: "Build",
    icon: Code2,
    text: "Your website is developed with clean, scalable code and modern technologies for speed and reliability.",
  },
  {
    number: "04",
    title: "Launch",
    icon: Rocket,
    text: "After testing and optimization, your website is deployed and ready to start working for your business.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: "#061A24",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,216,77,0.07), transparent 70%)",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative">

        {/* ================= HEADER ================= */}

        <div className="row align-items-end mb-5">

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
                amount: 0.3,
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

              How I Work
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: "0.98",
                letterSpacing: "-2.8px",
                fontWeight: "800",
              }}
            >
              From idea
              <br />
              <span
                style={{
                  color: "#FFD84D",
                  fontStyle: "italic",
                }}
              >
                to launch.
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "14px",
                lineHeight: "1.8",
                maxWidth: "400px",
                marginLeft: "auto",
                marginBottom: 0,
              }}
            >
              A simple, transparent process designed to turn your idea into
              a polished digital experience without unnecessary complexity.
            </motion.p>

          </div>

        </div>

        {/* ================= PROCESS ================= */}

        <div
          style={{
            position: "relative",
            marginTop: "70px",
          }}
        >

          {/* Connecting line */}

          <div
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              top: "48px",
              left: "11%",
              right: "11%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,216,77,0.35), rgba(84,214,194,0.35), transparent)",
            }}
          />

          <div className="row g-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="col-12 col-md-6 col-lg-3"
                >

                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    style={{
                      height: "100%",
                      position: "relative",
                      padding: "28px 22px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(145deg, rgba(15,47,61,0.88), rgba(7,29,41,0.92))",
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      transition:
                        "border-color 0.3s ease",
                    }}
                  >

                    {/* Number + Icon */}

                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{
                        marginBottom: "30px",
                      }}
                    >

                      <span
                        style={{
                          color: "#54D6C2",
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                      >
                        {step.number}
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
                            "rgba(255,216,77,0.08)",
                          border:
                            "1px solid rgba(255,216,77,0.18)",
                          color: "#FFD84D",
                        }}
                      >
                        <Icon size={19} />
                      </div>

                    </div>

                    {/* Title */}

                    <h3
                      style={{
                        color: "#FFFFFF",
                        fontSize: "25px",
                        fontWeight: "800",
                        letterSpacing: "-0.8px",
                        marginBottom: "12px",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Text */}

                    <p
                      style={{
                        color: "rgba(255,255,255,0.48)",
                        fontSize: "12px",
                        lineHeight: "1.75",
                        marginBottom: 0,
                      }}
                    >
                      {step.text}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      style={{
                        marginTop: "28px",
                        width: index === 0 ? "35%" : "25%",
                        height: "2px",
                        borderRadius: "20px",
                        background:
                          index === 0 || index === 3
                            ? "#FFD84D"
                            : "#54D6C2",
                      }}
                    />

                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-center"
          style={{
            marginTop: "75px",
          }}
        >

          

          <a
            href="#contact"
            className="d-inline-flex align-items-center gap-2 text-decoration-none"
            style={{
              color: "#FFD84D",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Let&apos;s build something great
            <ArrowUpRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
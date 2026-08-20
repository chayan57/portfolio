"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Business Growth Website",
    category: "Business",
    image: "/BusinessWebsite.png",
    description:
      "A conversion-focused website designed to create trust and generate more business.",
    result: "+42%",
    resultText: "More engagement",
  },
  {
    id: "02",
    title: "Personal Brand Website",
    category: "Personal Brand",
    image: "/PersonalBrandWebsite.png",
    description:
      "A polished personal brand experience built to showcase expertise and convert visitors.",
    result: "+68%",
    resultText: "More inquiries",
  },
  {
    id: "03",
    title: "Personal website",
    category: "Personal",
    image: "/Personal.png",
    description:
      "A modern Personal website focused on clear positioning, credibility, and conversions.",
    result: "3.2x",
    resultText: "More leads",
  },
  {
    id: "04",
    title: "Creator Website",
    category: "Creator",
    image: "/CreatorWebsite.png",
    description:
      "A bold digital presence designed to turn an audience into a growing customer base.",
    result: "+51%",
    resultText: "Conversion rate",
  },
  {
    id: "05",
    title: "Service Business",
    category: "Service",
    image: "/ServiceWebsite.png",
    description:
      "A clean and responsive website designed around trust, clarity, and measurable results.",
    result: "+37%",
    resultText: "More bookings",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: "#061A24",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="row align-items-end mb-5">

          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  width: "26px",
                  height: "1px",
                  background: "#54D6C2",
                }}
              />

              Selected Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: "0.98",
                letterSpacing: "-2.8px",
                fontWeight: "800",
              }}
            >
              Sites that{" "}
              <span
                style={{
                  color: "#FFD84D",
                  fontStyle: "italic",
                }}
              >
                moved
              </span>
              <br />
              the numbers.
            </motion.h2>

          </div>

          <div className="col-lg-5 mt-4 mt-lg-0">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              style={{
                maxWidth: "390px",
                marginLeft: "auto",
                marginBottom: 0,
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              Real websites built around strong positioning, thoughtful
              design, and experiences that help businesses turn attention
              into action.
            </motion.p>

          </div>

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="row g-4">

          {projects.map((project, index) => (

            <div
              key={project.id}
              className={
                index === 4
                  ? "col-12 col-lg-6"
                  : "col-12 col-lg-6"
              }
            >

              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.3,
                }}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(18,49,63,0.9), rgba(7,30,42,0.95))",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "10px",
                  overflow: "hidden",
                }}
              >

                {/* ================= IMAGE ================= */}

                <a
                  href="#"
                  className="d-block text-decoration-none"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "320px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    background: "#0B2735",
                  }}
                >

                  <motion.div
                    whileHover={{
                      scale: 1.045,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                    }}
                  >

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 991px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                  </motion.div>

                  {/* Hover overlay */}

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 55%, rgba(3,18,27,0.7))",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Category */}

                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      left: "18px",
                      padding: "7px 11px",
                      borderRadius: "50px",
                      background: "rgba(6,26,36,0.78)",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      color: "#FFFFFF",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    style={{
                      position: "absolute",
                      right: "18px",
                      bottom: "18px",
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#FFD84D",
                      color: "#061A24",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>

                </a>

                {/* ================= CONTENT ================= */}

                <div
                  style={{
                    padding: "20px 16px 14px",
                  }}
                >

                  <div
                    className="d-flex align-items-start justify-content-between gap-3"
                  >

                    <div>

                      <span
                        style={{
                          color: "#54D6C2",
                          fontSize: "10px",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                      >
                        {project.id}
                      </span>

                      <h3
                        style={{
                          color: "#FFFFFF",
                          fontSize: "22px",
                          fontWeight: "750",
                          letterSpacing: "-0.7px",
                          marginTop: "7px",
                          marginBottom: "8px",
                        }}
                      >
                        {project.title}
                      </h3>

                    </div>

                    {/* Result */}

                    <div
                      style={{
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >

                      <div
                        style={{
                          color: "#FFD84D",
                          fontSize: "20px",
                          fontWeight: "800",
                        }}
                      >
                        {project.result}
                      </div>

                      <div
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "9px",
                          marginTop: "2px",
                        }}
                      >
                        {project.resultText}
                      </div>

                    </div>

                  </div>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.48)",
                      fontSize: "12px",
                      lineHeight: "1.7",
                      maxWidth: "440px",
                      marginBottom: "12px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Bottom line */}

                  <div
                    style={{
                      height: "1px",
                      background:
                        "rgba(255,255,255,0.07)",
                      marginTop: "14px",
                      marginBottom: "13px",
                    }}
                  />

                  <div
                    className="d-flex align-items-center justify-content-between"
                  >

                    <span
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "10px",
                      }}
                    >
                      View case study
                    </span>

                    <ArrowUpRight
                      size={14}
                      color="#FFD84D"
                    />

                  </div>

                </div>

              </motion.article>

            </div>

          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
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
          }}
          className="text-center"
          style={{
            marginTop: "60px",
          }}
        >

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "12px",
              marginBottom: "14px",
            }}
          >
            Have a project in mind?
          </p>

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="d-inline-flex align-items-center gap-2 text-decoration-none"
            style={{
              background: "#FFD84D",
              color: "#061A24",
              padding: "13px 20px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: "750",
            }}
          >
            Start your project
            <ArrowUpRight size={16} />

          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
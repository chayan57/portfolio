"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Zap,
} from "lucide-react";
import Image from "next/image";

const stats = [
  {
    number: "20+",
    label: "Projects Built",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive",
  },
];

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Bootstrap",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#061A24",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ================= TOP LABEL ================= */}

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
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "1px",
              background: "#54D6C2",
            }}
          />

          About Me
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="row align-items-center g-5">

          {/* ================= PHOTO ================= */}

          <div className="col-lg-5">

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "relative",
                maxWidth: "430px",
                margin: "0 auto",
              }}
            >

              {/* Glow */}

              <div
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,216,77,0.12), transparent 70%)",
                  top: "-60px",
                  left: "-50px",
                  pointerEvents: "none",
                }}
              />

              {/* Image Card */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                style={{
                  position: "relative",
                  height: "500px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(145deg, #123544, #081F2C)",
                  border:
                    "1px solid rgba(255,255,255,0.09)",
                }}
              >

                <Image
                  src="/AboutPhoto.png"
                  alt="Chayan Biswas"
                  fill
                  sizes="(max-width: 991px) 100vw, 430px"
                  style={{
                    objectFit: "cover",
                    
                  }}
                  className=""
                />

                {/* Image overlay */}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(4,18,27,0.88))",
                  }}
                />

                {/* Bottom name */}

                <div
                  style={{
                    position: "absolute",
                    left: "24px",
                    right: "24px",
                    bottom: "22px",
                  }}
                >
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      fontWeight: "800",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Chayan Biswas
                  </div>

                  <div
                    style={{
                      color: "#FFD84D",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      marginTop: "5px",
                    }}
                  >
                    Full-Stack Web Developer
                  </div>
                </div>

              </motion.div>

              {/* Floating badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                style={{
                  position: "absolute",
                  right: "-18px",
                  top: "40px",
                  width: "72px",
                  height: "72px",
                  borderRadius: "18px",
                  background: "#FFD84D",
                  color: "#061A24",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 15px 40px rgba(0,0,0,0.25)",
                }}
              >
                <Code2 size={20} />

                <span
                  style={{
                    fontSize: "8px",
                    fontWeight: "800",
                    marginTop: "4px",
                  }}
                >
                  CODE
                </span>
              </motion.div>

            </motion.div>

          </div>

          {/* ================= TEXT ================= */}

          <div className="col-lg-7">

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
                color: "#FFFFFF",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                lineHeight: "1",
                letterSpacing: "-2.5px",
                fontWeight: "800",
                marginBottom: "25px",
              }}
            >
              From developer to{" "}
              <span
                style={{
                  color: "#FFD84D",
                  fontStyle: "italic",
                }}
              >
                digital partner.
              </span>
            </motion.h2>

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
                delay: 0.1,
              }}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                lineHeight: "1.85",
                maxWidth: "620px",
              }}
            >
              I dont just build websites. I create digital experiences
              that combine thoughtful design, clean development, and
              business-focused strategy.
            </motion.p>

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
                delay: 0.2,
              }}
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "13px",
                lineHeight: "1.8",
                maxWidth: "620px",
                marginTop: "15px",
              }}
            >
              My focus is simple: build fast, responsive, scalable websites
              that look professional and give your business a strong digital
              presence.
            </motion.p>

            {/* ================= SKILLS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.3,
              }}
              className="d-flex flex-wrap gap-2"
              style={{
                marginTop: "30px",
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 11px",
                    borderRadius: "50px",
                    background:
                      "rgba(255,255,255,0.04)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  <Check
                    size={12}
                    color="#54D6C2"
                  />

                  {skill}
                </span>
              ))}
            </motion.div>

            {/* ================= STATS ================= */}

            <div
              className="row g-3"
              style={{
                marginTop: "35px",
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="col-4"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + index * 0.1,
                    }}
                    style={{
                      paddingTop: "18px",
                      borderTop:
                        "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFD84D",
                        fontSize: "27px",
                        fontWeight: "800",
                        letterSpacing: "-1px",
                      }}
                    >
                      {stat.number}
                    </div>

                    <div
                      style={{
                        color: "rgba(255,255,255,0.38)",
                        fontSize: "10px",
                        marginTop: "3px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* ================= CTA ================= */}

            <motion.a
              href="#contact"
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.5,
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="d-inline-flex align-items-center gap-2 text-decoration-none"
              style={{
                marginTop: "35px",
                background: "#FFD84D",
                color: "#061A24",
                padding: "13px 19px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: "750",
              }}
            >
              Lets work together
              <ArrowUpRight size={16} />
            </motion.a>

          </div>

        </div>

        {/* ================= BOTTOM CARDS ================= */}

        <div
          className="row g-3"
          style={{
            marginTop: "90px",
          }}
        >

          {[
            {
              icon: Layers3,
              title: "Clean Development",
              text: "Structured and maintainable code built for long-term growth.",
            },
            {
              icon: Zap,
              title: "Performance First",
              text: "Fast-loading experiences designed for every device and screen.",
            },
            {
              icon: Code2,
              title: "Modern Technology",
              text: "Using reliable modern tools to create scalable web experiences.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                className="col-12 col-md-4"
                key={item.title}
              >
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
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  style={{
                    height: "100%",
                    padding: "24px",
                    borderRadius: "16px",
                    background:
                      "rgba(255,255,255,0.025)",
                    border:
                      "1px solid rgba(255,255,255,0.07)",
                  }}
                >

                  <Icon
                    size={20}
                    color="#FFD84D"
                  />

                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "750",
                      marginTop: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.42)",
                      fontSize: "11px",
                      lineHeight: "1.7",
                      marginBottom: 0,
                    }}
                  >
                    {item.text}
                  </p>

                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "#F5F5F2",
        color: "#061A24",
        paddingTop: "82px",
        overflow: "hidden",
        position: "relative",
        perspective: "1200px",
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,216,77,0.22), transparent 68%)",
          top: "-120px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,26,36,0.05), transparent 70%)",
          bottom: "-100px",
          left: "-80px",
          pointerEvents: "none",
        }}
      />

      {/* ================= CONTAINER ================= */}

      <div
        className="container position-relative"
        style={{
          zIndex: 2,
        }}
      >
        <div
          className="row align-items-center"
          style={{
            minHeight: "calc(100vh - 82px)",
            paddingTop: "55px",
            paddingBottom: "70px",
          }}
        >
          {/* ================= LEFT ================= */}

          <div className="col-lg-7">
            {/* Badge */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="d-inline-flex align-items-center gap-2"
              style={{
                background: "rgba(255,216,77,0.17)",
                border: "1px solid rgba(212,169,0,0.22)",
                color: "#8A7000",
                padding: "8px 13px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              <Sparkles size={15} />
              Available for new projects
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontSize: "clamp(48px, 6vw, 82px)",
                lineHeight: "0.98",
                letterSpacing: "-4px",
                fontWeight: "800",
                maxWidth: "820px",
                marginBottom: "28px",
              }}
            >
              I build digital
              <br />

              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                experiences
                <motion.span
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-8px",
                    width: "100%",
                    height: "7px",
                    background: "#FFD84D",
                    borderRadius: "20px",
                  }}
                />
              </span>

              <br />

              that move people.
            </motion.h1>

            {/* Description */}

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                color: "#687780",
                fontSize: "18px",
                lineHeight: "1.7",
                maxWidth: "620px",
                marginBottom: "32px",
              }}
            >
              I design and develop modern websites with thoughtful UI,
              smooth interactions, and responsive experiences that help
              businesses stand out online.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="d-flex flex-wrap align-items-center gap-3"
            >
              {/* Primary */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="text-decoration-none d-inline-flex align-items-center gap-2"
                style={{
                  background: "#FFD84D",
                  color: "#061A24",
                  padding: "15px 22px",
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Start a Project
                <ArrowUpRight size={18} />
              </motion.a>

              {/* Secondary */}

              <motion.a
                href="#work"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="text-decoration-none d-inline-flex align-items-center gap-2"
                style={{
                  color: "#061A24",
                  padding: "14px 20px",
                  border: "1px solid rgba(6,26,36,0.16)",
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Explore my work
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>

            {/* Trust */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="d-flex flex-wrap gap-4"
              style={{
                marginTop: "38px",
              }}
            >
              {[
                "Responsive",
                "Modern UI",
                "Smooth Motion",
              ].map((item) => (
                <div
                  key={item}
                  className="d-flex align-items-center gap-2"
                >
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    color="#9A7A00"
                  />

                  <span
                    style={{
                      color: "#53616B",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div
              style={{
                position: "relative",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {/* Floating small element */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-20px",
                  zIndex: 5,
                  background: "#061A24",
                  color: "#fff",
                  padding: "11px 15px",
                  borderRadius: "14px",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                <Code2
                  size={14}
                  color="#FFD84D"
                  style={{
                    marginRight: "6px",
                    verticalAlign: "middle",
                  }}
                />
                Creative Development
              </motion.div>

              {/* 3D Card */}

              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  cursor: "default",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background: "#061A24",
                    borderRadius: "30px",
                    padding: "24px",
                    minHeight: "470px",
                    position: "relative",
                    overflow: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Glow */}

                  <motion.div
                    animate={{
                      x: [0, 35, 0],
                      y: [0, -25, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(255,216,77,0.25), transparent 70%)",
                      top: "-130px",
                      right: "-100px",
                    }}
                  />

                  {/* Browser */}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {/* Browser top */}

                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      <div className="d-flex gap-2">
                        {[1, 2, 3].map((item) => (
                          <span
                            key={item}
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: "#fff",
                              opacity: 0.25,
                            }}
                          />
                        ))}
                      </div>

                      <span
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "9px",
                          letterSpacing: "1px",
                        }}
                      >
                        PORTFOLIO / 2026
                      </span>
                    </div>

                    {/* Website preview */}

                    <div
                      style={{
                        background: "#F5F5F2",
                        borderRadius: "20px",
                        padding: "24px",
                        minHeight: "320px",
                        transform: "translateZ(35px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "28px",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "9px",
                            background: "#061A24",
                          }}
                        />

                        <div className="d-flex gap-2">
                          <span
                            style={{
                              width: "35px",
                              height: "6px",
                              borderRadius: "10px",
                              background: "#D8DDDE",
                            }}
                          />

                          <span
                            style={{
                              width: "35px",
                              height: "6px",
                              borderRadius: "10px",
                              background: "#D8DDDE",
                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          color: "#061A24",
                          fontSize: "25px",
                          fontWeight: "800",
                          lineHeight: "1.05",
                          letterSpacing: "-1px",
                          maxWidth: "260px",
                        }}
                      >
                        Build something
                        <br />
                        people remember.
                      </div>

                      <div
                        style={{
                          width: "70px",
                          height: "6px",
                          borderRadius: "10px",
                          background: "#FFD84D",
                          marginTop: "15px",
                        }}
                      />

                      <div
                        className="row g-3"
                        style={{
                          marginTop: "28px",
                        }}
                      >
                        <div className="col-7">
                          <motion.div
                            animate={{
                              scale: [1, 1.03, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            style={{
                              height: "90px",
                              borderRadius: "14px",
                              background: "#FFD84D",
                            }}
                          />
                        </div>

                        <div className="col-5">
                          <div
                            style={{
                              height: "90px",
                              borderRadius: "14px",
                              background: "#E1E5E6",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}

                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{
                        marginTop: "22px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: "13px",
                            fontWeight: "700",
                          }}
                        >
                          Designed to stand out.
                        </div>

                        <div
                          style={{
                            color: "rgba(255,255,255,0.4)",
                            fontSize: "10px",
                            marginTop: "4px",
                          }}
                        >
                          UI / UX · Development · Motion
                        </div>
                      </div>

                      <motion.div
                        animate={{
                          rotate: [0, 45, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowUpRight
                          size={25}
                          color="#FFD84D"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Bottom Card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: "-28px",
                  bottom: "25px",
                  background: "#fff",
                  border: "1px solid rgba(6,26,36,0.08)",
                  borderRadius: "16px",
                  padding: "13px 16px",
                  zIndex: 6,
                }}
              >
                <div
                  style={{
                    color: "#061A24",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  100% Responsive
                </div>

                <div
                  style={{
                    color: "#687780",
                    fontSize: "10px",
                    marginTop: "4px",
                  }}
                >
                  Desktop · Tablet · Mobile
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{
          y: [0, 7, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="d-none d-md-flex align-items-center gap-2"
        style={{
          position: "absolute",
          bottom: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#687780",
          fontSize: "10px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        Scroll to explore

        <span
          style={{
            width: "25px",
            height: "1px",
            background: "#687780",
          }}
        />
      </motion.div>
    </section>
  );
}
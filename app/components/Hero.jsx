"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe2,
  Server,
  Sparkles,
} from "lucide-react";

import { useRef } from "react";

export default function Hero() {
  const sceneRef = useRef(null);

  /* =========================================
     MOUSE
  ========================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [10, -10]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-10, 10]
  );

  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* =========================================
     REVEAL
  ========================================= */

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
      className="premium-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================
          BACKGROUND
      ===================================== */}

      <motion.div
        className="hero-glow hero-glow-one"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-glow hero-glow-two"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative grid */}

      <div className="hero-grid" />

      {/* =====================================
          CONTAINER
      ===================================== */}

      <div className="container position-relative hero-container">

        <div className="row align-items-center">

          {/* =================================
              LEFT
          ================================= */}

          <div className="col-lg-6">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.8,
              }}
              className="hero-badge"
            >
              <Sparkles size={15} />

              Premium Digital Experiences
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="hero-title"
            >
              Property Management & 
              <br />

              <span>
                Booking Platform
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="hero-description"
            >
              I create premium, modern and interactive
              websites using powerful technologies,
              thoughtful UI and smooth motion.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="hero-buttons"
            >

              <motion.a
                href="#contact"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="hero-primary"
              >
                Start a Project

                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href="#products"
                whileHover={{
                  y: -4,
                }}
                className="hero-secondary"
              >
                Explore Collection

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
              }}
              className="hero-trust"
            >

              {[
                "Responsive",
                "Modern UI",
                "Smooth Motion",
              ].map((item) => (

                <div
                  key={item}
                  className="hero-trust-item"
                >
                  <Check size={15} />

                  {item}
                </div>

              ))}

            </motion.div>

          </div>

          {/* =================================
              RIGHT 3D SCENE
          ================================= */}

          <div className="col-lg-6">

            <div className="hero-scene-wrapper">

              <motion.div
                ref={sceneRef}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle:
                    "preserve-3d",
                }}
                className="hero-3d-scene"
              >

                {/* =================================
                    ORBIT 1
                ================================= */}

                <motion.div
                  className="orbit orbit-one"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >

                  <div className="orbit-dot orbit-react">
                    <Code2 size={18} />
                    <span>React</span>
                  </div>

                </motion.div>


                {/* =================================
                    ORBIT 2
                ================================= */}

                <motion.div
                  className="orbit orbit-two"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >

                  <div className="orbit-dot orbit-next">
                    <Globe2 size={17} />
                    <span>Next.js</span>
                  </div>

                </motion.div>


                {/* =================================
                    ORBIT 3
                ================================= */}

                <motion.div
                  className="orbit orbit-three"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >

                  <div className="orbit-dot orbit-mongo">
                    <Database size={17} />
                    <span>MongoDB</span>
                  </div>

                </motion.div>


                {/* =================================
                    ORBIT 4
                ================================= */}

                <motion.div
                  className="orbit orbit-four"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 21,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >

                  <div className="orbit-dot orbit-express">
                    <Server size={17} />
                    <span>Express</span>
                  </div>

                </motion.div>


                {/* =================================
                    CENTER GLOW
                ================================= */}

                <motion.div
                  className="center-glow"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />


                {/* =================================
                    MAIN 3D CARD
                ================================= */}

                <motion.div
                  className="hero-main-card"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  {/* Top glass */}

                  <div
                    className="hero-card-glass"
                    style={{
                      transform:
                        "translateZ(65px)",
                    }}
                  >

                    <div className="browser-top">

                      <div className="browser-dots">
                        <i />
                        <i />
                        <i />
                      </div>

                      <span>
                        PREMIUM / DIGITAL
                      </span>

                    </div>


                    {/* Website preview */}

                    <div className="website-preview">

                      <div className="preview-nav">

                        <div className="preview-logo">
                          É
                        </div>

                        <div className="preview-lines">
                          <i />
                          <i />
                          <i />
                        </div>

                      </div>


                      <div className="preview-heading">

                        <span>
                          CREATE
                        </span>

                        <strong>
                          SOMETHING
                          <br />
                          BEAUTIFUL.
                        </strong>

                      </div>


                      <div className="preview-line" />


                      <div className="preview-boxes">

                        <motion.div
                          className="preview-box large"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />

                        <div className="preview-box small" />

                      </div>

                    </div>


                    {/* Bottom */}

                    <div className="card-bottom">

                      <div>

                        <strong>
                          Digital Experience
                        </strong>

                        <span>
                          UI / UX · Development · Motion
                        </span>

                      </div>

                      <motion.div
                        animate={{
                          rotate: [0, 45, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="card-arrow"
                      >
                        <ArrowUpRight size={22} />
                      </motion.div>

                    </div>

                  </div>


                  {/* Depth layers */}

                  <div className="depth-layer depth-one" />
                  <div className="depth-layer depth-two" />

                </motion.div>


                {/* =================================
                    FLOATING WORK CARD
                ================================= */}

                <motion.div
                  className="floating-work-card"
                  animate={{
                    y: [0, -14, 0],
                    rotate: [-3, 0, -3],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transform:
                      "translateZ(110px)",
                  }}
                >

                  <div className="floating-icon">
                    <Code2 size={17} />
                  </div>

                  <div>
                    <strong>
                      Creative Development
                    </strong>

                    <span>
                      Modern · Fast · Interactive
                    </span>
                  </div>

                </motion.div>


                {/* =================================
                    BOTTOM WORK CARD
                ================================= */}

                <motion.div
                  className="floating-result-card"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transform:
                      "translateZ(120px)",
                  }}
                >

                  <div className="result-icon">
                    <Check size={16} />
                  </div>

                  <div>
                    <strong>
                      Project Ready
                    </strong>

                    <span>
                      Desktop · Tablet · Mobile
                    </span>
                  </div>

                </motion.div>


                {/* =================================
                    FLOATING 3D SPHERES
                ================================= */}

                <motion.div
                  className="floating-sphere sphere-one"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="floating-sphere sphere-two"
                  animate={{
                    y: [0, 18, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 7, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="hero-scroll"
      >
        Scroll to explore
        <span />
      </motion.div>

    </section>
  );
}
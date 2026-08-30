"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  House,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Property Listings",
    description:
      "Showcase residential and commercial properties with detailed information, pricing, amenities, photos, and location.",
    icon: House,
    tags: ["Properties", "Amenities", "Location"],
  },
  {
    number: "02",
    title: "Property Management",
    description:
      "Give property managers powerful tools to create, update, manage, and monitor their listings from one dashboard.",
    icon: Building2,
    tags: ["Management", "Listings", "Dashboard"],
  },
  {
    number: "03",
    title: "Property Search",
    description:
      "Help users quickly find the right property with advanced search, filters, location, price, type, and availability.",
    icon: Search,
    tags: ["Search", "Filters", "Responsive"],
  },
  {
    number: "04",
    title: "Booking & Reservations",
    description:
      "Allow guests to check availability, select dates, submit booking requests, and manage their reservations easily.",
    icon: CalendarCheck,
    tags: ["Booking", "Calendar", "Reservations"],
  },
  {
    number: "05",
    title: "User & Agent Dashboard",
    description:
      "Dedicated dashboards for guests and property managers to manage bookings, properties, profiles, and activities.",
    icon: Users,
    tags: ["User", "Agent", "Dashboard"],
  },
  {
    number: "06",
    title: "Secure Platform",
    description:
      "Role-based authentication and protected functionality designed to keep users, managers, and property data secure.",
    icon: ShieldCheck,
    tags: ["Auth", "Roles", "Security"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#061A24",
        color: "#fff",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,216,77,0.14), transparent 70%)",
          top: "-160px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container position-relative"
        style={{
          zIndex: 2,
        }}
      >
        {/* ================= HEADER ================= */}

        <div className="row mb-5">
          <div className="col-lg-7">
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="d-inline-flex align-items-center gap-2"
              style={{
                color: "#FFD84D",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#FFD84D",
                }}
              />

              Real Estate Solutions
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
                delay: 0.1,
              }}
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                lineHeight: "1",
                letterSpacing: "-3px",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              Everything you need
              <br />

              <span
                style={{
                  color: "#FFD84D",
                }}
              >
                to manage properties.
              </span>
            </motion.h2>
          </div>

         
        </div>

        {/* ================= SERVICES ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="row g-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                className="col-12 col-md-6 col-xl-4"
                key={service.number}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  style={{
                    height: "100%",
                    minHeight: "330px",
                    background:
                      "rgba(255,255,255,0.035)",
                    border:
                      "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "24px",
                    padding: "30px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Hover Glow */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      position: "absolute",
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(255,216,77,0.13), transparent 70%)",
                      top: "-100px",
                      right: "-80px",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top */}

                  <div
                    className="d-flex align-items-start justify-content-between"
                    style={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.08,
                      }}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "15px",
                        background:
                          "rgba(255,216,77,0.10)",
                        border:
                          "1px solid rgba(255,216,77,0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFD84D",
                      }}
                    >
                      <Icon size={23} />
                    </motion.div>

                    <motion.span
                      style={{
                        color: "rgba(255,255,255,0.22)",
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                      }}
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  {/* Content */}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "65px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "27px",
                        fontWeight: "750",
                        letterSpacing: "-1px",
                        marginBottom: "14px",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color:
                          "rgba(255,255,255,0.52)",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        maxWidth: "470px",
                        marginBottom: "24px",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Tags */}

                    <div className="d-flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            color:
                              "rgba(255,255,255,0.55)",
                            background:
                              "rgba(255,255,255,0.05)",
                            border:
                              "1px solid rgba(255,255,255,0.07)",
                            padding: "6px 10px",
                            borderRadius: "50px",
                            fontSize: "10px",
                            fontWeight: "600",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      x: 5,
                      y: -5,
                    }}
                    style={{
                      position: "absolute",
                      right: "28px",
                      bottom: "27px",
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFD84D",
                      zIndex: 3,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4"
          style={{
            marginTop: "65px",
            paddingTop: "35px",
            borderTop:
              "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <div>
            <div
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
              }}
            >
              Ready to manage your properties?
            </div>

            <div
              style={{
                color:
                  "rgba(255,255,255,0.45)",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              Discover properties, manage listings, and handle bookings
              from one powerful platform.
            </div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
            style={{
              background: "#FFD84D",
              color: "#061A24",
              padding: "14px 21px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Explore Properties
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
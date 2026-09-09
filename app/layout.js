import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-umber-nine-42.vercel.app"),

  title: {
    default: "Chayan Biswas | Web Developer | React & Next.js Developer",
    template: "%s | Chayan Biswas",
  },

  description:
    "Chayan Biswas is a professional Web Developer specializing in modern, responsive and high-performance websites, React, Next.js, JavaScript, and full-stack web development.",

  // Cleaned Keywords (Removed spammy duplicate entries)
  keywords: [
    "Chayan Biswas",
    "Chayan Biswas Web Developer",
    "Chayan Biswas React Developer",
    "Chayan Biswas Next.js Developer",
    "Chayan Biswas Portfolio",
    "Chayan Biswas Bangladesh",
    "Chayan Biswas Web Developer Bangladesh",
    "Web Developer Bangladesh",
    "Web Developer Chattogram",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Freelance Web Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Figma to React",
    "Figma to Next.js",
  ],

  authors: [
    {
      name: "Chayan Biswas",
      url: "https://portfolio-umber-nine-42.vercel.app",
    },
  ],

  creator: "Chayan Biswas",
  publisher: "Chayan Biswas",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: "https://portfolio-umber-nine-42.vercel.app",
  },

  openGraph: {
    title: "Chayan Biswas | Web Developer | React & Next.js Developer",
    description:
      "I build modern, responsive and high-performance websites and web applications using React, Next.js and modern web technologies.",
    url: "https://portfolio-umber-nine-42.vercel.app",
    siteName: "Chayan Biswas",
    locale: "en_US",
    type: "profile", // Set to profile for personal personal brands
    firstName: "Chayan",
    lastName: "Biswas",
    images: [
      {
        url: "/icon.png", // Replace with your high-res profile photo (e.g., /chayan-biswas.jpg)
        width: 1200,
        height: 630,
        alt: "Chayan Biswas - Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chayan Biswas | Web Developer | React & Next.js Developer",
    description:
      "Modern websites and web applications built with React, Next.js and modern web technologies.",
    images: ["/icon.png"], // Replace with your high-res profile photo
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  // Google Schema Markup for Person/Developer Profile
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chayan Biswas",
    url: "https://portfolio-umber-nine-42.vercel.app",
    image: "https://portfolio-umber-nine-42.vercel.app/icon.png", // Direct link to your picture
    jobTitle: "Full Stack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://www.facebook.com/your-facebook-username", // Add your real profile links here
      "https://github.com/your-github-username",
      "https://www.linkedin.com/in/your-linkedin-username",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Inject JSON-LD for rich search results & image SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
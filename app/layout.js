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
  metadataBase: new URL(
    "https://portfolio-umber-nine-42.vercel.app"
  ),

  title: {
    default:
      "Chayan Biswas | Web Developer | React & Next.js Developer",
    template: "%s | Chayan Biswas",
  },

  description:
    "Chayan Biswas is a professional Web Developer specializing in modern, responsive and high-performance websites, React, Next.js, JavaScript, and full-stack web development.",

  keywords: [
    "Chayan Biswas",
  "Chayan Biswas Web Developer",
  "Chayan Biswas Developer",
  "Chayan Biswas React Developer",
  "Chayan Biswas Next.js Developer",
  "Chayan Biswas Portfolio",
  "Chayan Biswas Bangladesh",
  "Chayan Biswas Web Developer Bangladesh",

  "Web Developer Bangladesh",
  "React Developer",
  "Next.js Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Freelance Web Developer",
  "JavaScript Developer",
  "Website Developer",
    "Chayan Biswas",
    "Chayan Biswas Web Developer",
    "Web Developer",
    "Web Developer Bangladesh",
    "Web Developer Chattogram",
    "Freelance Web Developer",
    "Professional Web Developer",
    "React Developer",
    "Next.js Developer",
    "Next JS Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "React JS Developer",
    "Responsive Web Developer",
    "Website Developer",
    "Business Website Developer",
    "Landing Page Developer",
    "Portfolio Website Developer",
    "Ecommerce Website Developer",
    "Custom Website Developer",
    "Web Application Developer",
    "React Website Development",
    "Next.js Website Development",
    "Website Design and Development",
    "Responsive Website Development",
    "Modern Website Development",
    "Custom Web Development",
    "Website Redesign",
    "Website Maintenance",
    "Figma to React",
    "Figma to Next.js",
    "Frontend Web Development",
    "Backend Web Development",
    "API Integration",
    "Full Stack Development",
  ],

  authors: [
    {
      name: "Chayan Biswas",
      url: "https://portfolio-umber-nine-42.vercel.app",
    },
  ],

  creator: "Chayan Biswas",
  publisher: "Chayan Biswas",

  // CB Logo → Browser Favicon
  icons: {
    icon: "/brand-url-Image.jpg",
    shortcut: "/brand-url-Image.jpg",
    apple: "/brand-url-Image.jpg",
  },

  alternates: {
    canonical: "https://portfolio-umber-nine-42.vercel.app",
  },

  // Social Media Preview
  openGraph: {
    title:
      "Chayan Biswas | Web Developer | React & Next.js Developer",

    description:
      "I build modern, responsive and high-performance websites and web applications using React, Next.js and modern web technologies.",

    url: "https://portfolio-umber-nine-42.vercel.app",

    siteName: "Chayan Biswas",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/brand-url-Image.png",
        width: 1200,
        height: 630,
        alt: "Chayan Biswas - Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Chayan Biswas | Web Developer | React & Next.js Developer",

    description:
      "Modern websites and web applications built with React, Next.js and modern web technologies.",

    images: ["/brand-url-Image.png"],
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
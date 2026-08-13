import type { Metadata } from "next";
import "./globals.css";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.profile,
  keywords: [
    personalInfo.name,
    "Full Stack Developer",
    "Senior Software Engineer",
    "Agentic AI",
    "LLM",
    "RAG",
    "LangChain",
    "MCP",
    "Next.js",
    "React",
    "Angular",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "ASP.NET Core",
    "Halliburton",
    "Extreme Networks",
    "Emumba",
    "LMKR",
    personalInfo.location,
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.linkedin }],
  openGraph: {
    type: "profile",
    firstName: "Zeeshan",
    lastName: "Khan",
    title: personalInfo.title,
    description: personalInfo.profile,
    url: personalInfo.linkedin,
    locale: "en_US",
    siteName: `${personalInfo.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.profile,
    creator: "@zeeshankhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}

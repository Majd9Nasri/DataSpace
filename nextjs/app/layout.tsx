import StyledComponentsRegistry from "../lib/registry";
import { raleway } from "../ui/font";
import "../ui/global.style.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNA Dataspace Solutions",
  description: "AI and Data Science Solutions for the Enterprise, for you.",
  keywords: [
    "AI",
    "Data Science",
    "Enterprise",
    "Solutions",
    "Service",
    "DNA Dataspace Solutions",
    "KI",
  ],
  openGraph: {
    type: "website",
    url: "https://www.dna-dataspace-solutions.com",
    title: "DNA Dataspace Solutions",
    description: "AI and Data Science Solutions for the Enterprise, for you.",
    images: [
      {
        url: "https://www.dna-dataspace-solutions.com/logo.png",
        width: 1139,
        height: 2085,
        alt: "DNA Dataspace Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={raleway.className}
      style={{ margin: 0, padding: 0 }}
    >
      <head>
        <meta charSet="utf-8" />
        <title>DNA Dataspace Solutions</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

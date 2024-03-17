import StyledComponentsRegistry from "../lib/registry";
import { raleway } from "../ui/font";
import "../ui/global.style.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4NEX AI Solutions",
  description: "AI and Data Science Solutions for the Enterprise, for you.",
  keywords: [
    "AI",
    "Data Science",
    "Enterprise",
    "Solutions",
    "Service",
    "4NEX",
    "4",
    "NEX",
    "KI",
  ],
  openGraph: {
    type: "website",
    url: "https://www.4nex.tech",
    title: "4NEX AI Solutions",
    description: "AI and Data Science Solutions for the Enterprise, for you.",
    images: [
      {
        url: "https://www.4nex.tech/whiteLogoBlackBackgroundToUpdat.jpg",
        width: 853,
        height: 371,
        alt: "4NEX AI Solutions",
      },
    ],
  },
};

export default async function RootLayout({
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
        <title>4NEX AI Solutions</title>
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
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: `'Raleway', ${raleway.className},sans-serif`,
        }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

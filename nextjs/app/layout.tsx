import Image from "next/image";
import StyledComponentsRegistry from "../lib/registry";
import {
  LayoutHeader,
  LayoutHeaderLink,
  LayoutHeaderLogoLink,
  LayoutHeaderNavigation,
  LayoutHeaderUnorderedList,
  LayoutLogoSpan,
} from "./layout.style";
import { GlobalStyles } from "../ui/global.style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body style={{ margin: 0, fontFamily: "Raleway, sans-serif" }}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <LayoutHeader>
            <LayoutHeaderNavigation>
              <LayoutHeaderLogoLink href="#home">
                <Image src="/logo.png" width="30" height="55" alt="Logo" />
                <LayoutLogoSpan>Data Space</LayoutLogoSpan>
              </LayoutHeaderLogoLink>
              <LayoutHeaderUnorderedList>
                <li>
                  <LayoutHeaderLink href="#home">Home</LayoutHeaderLink>
                </li>
                <li>
                  <LayoutHeaderLink href="#about">About</LayoutHeaderLink>
                </li>
                <li>
                  <LayoutHeaderLink href="#services">Services</LayoutHeaderLink>
                </li>
                <li>
                  <LayoutHeaderLink href="#team">Team</LayoutHeaderLink>
                </li>
                <li>
                  <LayoutHeaderLink href="#contact">Contact</LayoutHeaderLink>
                </li>
              </LayoutHeaderUnorderedList>
            </LayoutHeaderNavigation>
          </LayoutHeader>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

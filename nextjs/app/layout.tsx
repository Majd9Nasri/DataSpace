import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "../ui/global.style";
import { HeaderNavBar } from "./HeaderNavBar";

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
          <HeaderNavBar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import StyledComponentsRegistry from "../lib/registry";
import { raleway } from "../ui/font";
import "../ui/global.style.css";

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

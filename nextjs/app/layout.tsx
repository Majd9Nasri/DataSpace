import StyledComponentsRegistry from "../lib/registry";
import {
  HomePageHeader,
  HomePageHeaderLink,
  HomePageHeaderNavigation,
  HomePageHeaderUnorderedList,
} from "./layout.style";

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
          <HomePageHeader>
            <HomePageHeaderNavigation>
              <HomePageHeaderUnorderedList>
                <li>
                  <HomePageHeaderLink href="#home">Home</HomePageHeaderLink>
                </li>
                <li>
                  <HomePageHeaderLink href="#about">About</HomePageHeaderLink>
                </li>
                <li>
                  <HomePageHeaderLink href="#services">
                    Services
                  </HomePageHeaderLink>
                </li>
                <li>
                  <HomePageHeaderLink href="#team">Team</HomePageHeaderLink>
                </li>
                <li>
                  <HomePageHeaderLink href="#contact">
                    Contact
                  </HomePageHeaderLink>
                </li>
              </HomePageHeaderUnorderedList>
            </HomePageHeaderNavigation>
          </HomePageHeader>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

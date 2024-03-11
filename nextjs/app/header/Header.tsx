"use client";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useContext, useEffect, useRef, useState } from "react";
import DarkModeContext from "../components/DarkModeContext";
import {
  HeaderHeader,
  HeaderLogoImage,
  HeaderLogoLink,
  HeaderNavigation,
  HeaderScrollerPercentage,
} from "./Header.style";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarRouteLinks } from "./navbarRoutes";

const enum NavbarState {
  Desktop,
  Mobile,
  Limbo,
}

export function Header() {
  const { useDarkMode } = useContext(DarkModeContext);
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [verticalScrollPercentage, setVerticalScrollPercentage] = useState(0);
  const [navbarState, setNavbarState] = useState(NavbarState.Limbo);
  const documentClientHeightRef = useRef(0);

  const enableBackground = verticalScroll > documentClientHeightRef.current / 2;

  function updateVerticalScrollPercentage() {
    setVerticalScroll(window.scrollY);
    setVerticalScrollPercentage(
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
  }

  function handlePageWidthChange() {
    setNavbarState(
      window.matchMedia("(max-width: 45rem)").matches
        ? NavbarState.Mobile
        : NavbarState.Desktop
    );
  }

  useEffect(() => {
    polyfillCountryFlagEmojis("flagmojifont");
    documentClientHeightRef.current = document.documentElement.clientHeight;
    window.addEventListener("scroll", updateVerticalScrollPercentage);
    window.addEventListener("resize", handlePageWidthChange);
    updateVerticalScrollPercentage();
    handlePageWidthChange();
    return () => {
      window.removeEventListener("scroll", updateVerticalScrollPercentage);
      window.removeEventListener("resize", handlePageWidthChange);
    };
  }, []);

  return (
    <HeaderHeader enableBackground={enableBackground}>
      <HeaderScrollerPercentage width={verticalScrollPercentage} />
      <HeaderNavigation>
        <HeaderLogoLink href={NavbarRouteLinks.Home}>
          <HeaderLogoImage
            src={
              !enableBackground
                ? "./blackLogoToUpdate.png"
                : useDarkMode
                ? "./blackLogoToUpdate.png"
                : "./whiteLogoToUpdate.png"
            }
            alt="4NEX Logo"
          />
        </HeaderLogoLink>
        {navbarState === NavbarState.Mobile ? <NavbarMobile /> : null}
        {navbarState === NavbarState.Desktop ? <NavbarDesktop /> : null}
      </HeaderNavigation>
    </HeaderHeader>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  HeaderHeader,
  HeaderLogoLink,
  HeaderLogoSpan,
  HeaderNavigation,
  HeaderScrollerPercentage,
} from "./Header.style";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

const enum NavbarState {
  Desktop,
  Mobile,
  Limbo,
}

export function Header() {
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [verticalScrollPercentage, setVerticalScrollPercentage] = useState(0);
  const [navbarState, setNavbarState] = useState(NavbarState.Limbo);
  const documentClientHeightRef = useRef(0);

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
      window.matchMedia("(max-width: 42rem)").matches
        ? NavbarState.Mobile
        : NavbarState.Desktop
    );
  }

  useEffect(() => {
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
    <HeaderHeader
      enableBackground={verticalScroll > documentClientHeightRef.current / 2}
    >
      <HeaderScrollerPercentage width={verticalScrollPercentage} />
      <HeaderNavigation>
        <HeaderLogoLink href="#start">
          <Image src="/logo.png" width="30" height="55" alt="Logo" />
          <HeaderLogoSpan>Data Space</HeaderLogoSpan>
        </HeaderLogoLink>
        {navbarState === NavbarState.Mobile ? <NavbarMobile /> : null}
        {navbarState === NavbarState.Desktop ? <NavbarDesktop /> : null}
      </HeaderNavigation>
    </HeaderHeader>
  );
}

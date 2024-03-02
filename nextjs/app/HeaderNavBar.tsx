"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  HeaderNavBarHeader,
  HeaderNavBarLink,
  HeaderNavBarLogoLink,
  HeaderNavBarLogoSpan,
  HeaderNavBarNavigation,
  HeaderNavBarScrollerPercentage,
  HeaderNavBarUnorderedList,
} from "./HeaderNavBar.style";

export function HeaderNavBar() {
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [verticalScrollPercentage, setVerticalScrollPercentage] = useState(0);
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

  useEffect(() => {
    documentClientHeightRef.current = document.documentElement.clientHeight;
    window.addEventListener("scroll", updateVerticalScrollPercentage);
    return () => {
      window.removeEventListener("scroll", updateVerticalScrollPercentage);
    };
  }, []);
  return (
    <HeaderNavBarHeader
      enableBackground={verticalScroll > documentClientHeightRef.current / 2}
    >
      <HeaderNavBarScrollerPercentage width={verticalScrollPercentage} />
      <HeaderNavBarNavigation>
        <HeaderNavBarLogoLink href="#home">
          <Image src="/logo.png" width="30" height="55" alt="Logo" />
          <HeaderNavBarLogoSpan>Data Space</HeaderNavBarLogoSpan>
        </HeaderNavBarLogoLink>
        <HeaderNavBarUnorderedList>
          <li>
            <HeaderNavBarLink href="#home">Home</HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#about">About</HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#services">Services</HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#team">Team</HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#contact">Contact</HeaderNavBarLink>
          </li>
        </HeaderNavBarUnorderedList>
      </HeaderNavBarNavigation>
    </HeaderNavBarHeader>
  );
}

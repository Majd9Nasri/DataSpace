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

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement: HTMLElement = document.querySelector(targetId);

    let targetScrollPosition = targetElement.getBoundingClientRect().top;
    if (targetScrollPosition < 110 && targetScrollPosition > 0) {
      return;
    }

    window.scrollTo({
      top: targetScrollPosition + window.scrollY - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    documentClientHeightRef.current = document.documentElement.clientHeight;
    window.addEventListener("scroll", updateVerticalScrollPercentage);
    updateVerticalScrollPercentage();
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
        <HeaderNavBarLogoLink href="#start">
          <Image src="/logo.png" width="30" height="55" alt="Logo" />
          <HeaderNavBarLogoSpan>Data Space</HeaderNavBarLogoSpan>
        </HeaderNavBarLogoLink>
        <HeaderNavBarUnorderedList>
          <li>
            <HeaderNavBarLink href="#start" onClick={handleNavLinkClick}>
              Home
            </HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#about" onClick={handleNavLinkClick}>
              About
            </HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#services" onClick={handleNavLinkClick}>
              Services
            </HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#team" onClick={handleNavLinkClick}>
              Team
            </HeaderNavBarLink>
          </li>
          <li>
            <HeaderNavBarLink href="#contact" onClick={handleNavLinkClick}>
              Contact
            </HeaderNavBarLink>
          </li>
        </HeaderNavBarUnorderedList>
      </HeaderNavBarNavigation>
    </HeaderNavBarHeader>
  );
}

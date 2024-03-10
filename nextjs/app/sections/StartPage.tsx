"use client";
import { useEffect, useState } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageImage,
  StartPageWrapper,
} from "./StartPage.style";

const imageSources = ["./kam.webp", "./kam2.jpg"];

export function StartPage() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((index) => (index + 1) % imageSources.length);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  });

  return (
    <StartPageWrapper
      id={NavbarRoutes.Home}
      backgroundImage={imageSources[imageIndex]}
    >
      <StartPageImage src="./blackLogoToUpdate.png" />
      <StartPageArrowLink
        href={NavbarRouteLinks.About}
        onClick={handleNavLinkClick}
      >
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

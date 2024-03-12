"use client";

import { useContext, useState } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import { Twemoji } from "../components/Twemoji";
import {
  NavbarMobileBurgerMenu,
  NavbarMobileLink,
  NavbarMobileUnorderedList,
  NavbarMobileWrapper,
} from "./NavbarMobile.style";
import { NavbarRouteLinks } from "./navbarRoutes";

const enum OpenState {
  InitialClosed,
  Open,
  Closed,
}

export function NavbarMobile() {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(OpenState.InitialClosed);

  const nextLanguage = getNextLanguage(language);

  function handleBurgerMenuClick() {
    setOpen((open) =>
      open === OpenState.Closed || open === OpenState.InitialClosed
        ? OpenState.Open
        : OpenState.Closed
    );
  }

  function handleNavLinkMobileClick(e) {
    setOpen(OpenState.Closed);
    handleNavLinkClick(e);
  }

  return (
    <NavbarMobileWrapper>
      <NavbarMobileBurgerMenu onClick={handleBurgerMenuClick} />
      <NavbarMobileUnorderedList
        className={`${
          open === OpenState.Open ? "animate-slide-in-from-right" : ""
        } ${open === OpenState.Closed ? "animate-slide-out-to-right" : ""}`}
      >
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Home}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Home}
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.About}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.About}
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Services}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Services}
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Team}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Team}
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href={NavbarRouteLinks.Contact}
            onClick={handleNavLinkMobileClick}
          >
            {dictionary.Navbar.Contact}
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href="javascript:void(0);"
            onClick={() => setLanguage(nextLanguage)}
          >
            <Twemoji emoji={getCountryFlag(language)} />
          </NavbarMobileLink>
        </li>
        <li>
          <NavbarMobileLink
            href="javascript:void(0);"
            onClick={() => setUseDarkMode(!useDarkMode)}
          >
            <Twemoji emoji={useDarkMode ? "🌙" : "💡"} />
          </NavbarMobileLink>
        </li>
      </NavbarMobileUnorderedList>
    </NavbarMobileWrapper>
  );
}

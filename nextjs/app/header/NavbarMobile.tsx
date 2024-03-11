"use client";

import { useContext, useState } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext, {
  UseDarkModeState,
} from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import {
  NavbarMobileBurgerMenu,
  NavbarMobileLink,
  NavbarMobileUnorderedList,
  NavbarMobileWrapper,
} from "./NavbarMobile.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarMobile() {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false);

  const nextLanguage = getNextLanguage(language);

  function handleBurgerMenuClick() {
    setOpen((open) => !open);
  }

  function handleNavLinkMobileClick(e) {
    setOpen(false);
    handleNavLinkClick(e);
  }

  return (
    <NavbarMobileWrapper>
      <NavbarMobileBurgerMenu onClick={handleBurgerMenuClick} />
      {!open ? null : (
        <NavbarMobileUnorderedList>
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
              useFlagmojiFont
              onClick={() => setLanguage(nextLanguage)}
            >
              {getCountryFlag(language)}
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href="javascript:void(0);"
              useFlagmojiFont
              onClick={() =>
                setUseDarkMode(
                  useDarkMode === UseDarkModeState.White
                    ? UseDarkModeState.Dark
                    : UseDarkModeState.White
                )
              }
            >
              {useDarkMode === UseDarkModeState.Dark ? "🌙" : "💡"}
            </NavbarMobileLink>
          </li>
        </NavbarMobileUnorderedList>
      )}
    </NavbarMobileWrapper>
  );
}

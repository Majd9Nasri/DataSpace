"use client";

import { useState } from "react";
import { handleNavLinkClick } from "../../../lib/clientUtility";
import {
  NavbarMobileBurgerMenu,
  NavbarMobileLink,
  NavbarMobileUnorderedList,
  NavbarMobileWrapper,
} from "./NavbarMobile.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

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
              Home
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href={NavbarRouteLinks.About}
              onClick={handleNavLinkMobileClick}
            >
              About
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href={NavbarRouteLinks.Services}
              onClick={handleNavLinkMobileClick}
            >
              Services
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href={NavbarRouteLinks.Team}
              onClick={handleNavLinkMobileClick}
            >
              Team
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href={NavbarRouteLinks.Contact}
              onClick={handleNavLinkMobileClick}
            >
              Contact
            </NavbarMobileLink>
          </li>
        </NavbarMobileUnorderedList>
      )}
    </NavbarMobileWrapper>
  );
}

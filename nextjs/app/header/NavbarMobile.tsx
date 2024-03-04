"use client";

import { useState } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import {
  NavbarMobileBurgerMenu,
  NavbarMobileLink,
  NavbarMobileUnorderedList,
  NavbarMobileWrapper,
} from "./NavbarMobile.style";

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
            <NavbarMobileLink href="#start" onClick={handleNavLinkMobileClick}>
              Home
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink href="#about" onClick={handleNavLinkMobileClick}>
              About
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href="#services"
              onClick={handleNavLinkMobileClick}
            >
              Services
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink href="#team" onClick={handleNavLinkMobileClick}>
              Team
            </NavbarMobileLink>
          </li>
          <li>
            <NavbarMobileLink
              href="#contact"
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

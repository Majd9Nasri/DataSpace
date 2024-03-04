import { handleNavLinkClick } from "../../lib/clientUtility";
import {
  NavbarDesktopLink,
  NavbarDesktopUnorderedList,
} from "./NavbarDesktop.style";

export function NavbarDesktop() {
  return (
    <NavbarDesktopUnorderedList>
      <li>
        <NavbarDesktopLink href="#start" onClick={handleNavLinkClick}>
          Home
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href="#about" onClick={handleNavLinkClick}>
          About
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href="#services" onClick={handleNavLinkClick}>
          Services
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href="#team" onClick={handleNavLinkClick}>
          Team
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink href="#contact" onClick={handleNavLinkClick}>
          Contact
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}

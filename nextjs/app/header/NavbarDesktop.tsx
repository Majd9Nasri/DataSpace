import { handleNavLinkClick } from "../../lib/clientUtility";
import {
  NavbarDesktopLink,
  NavbarDesktopUnorderedList,
} from "./NavbarDesktop.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarDesktop() {
  return (
    <NavbarDesktopUnorderedList>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Home}
          onClick={handleNavLinkClick}
        >
          Home
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.About}
          onClick={handleNavLinkClick}
        >
          About
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Services}
          onClick={handleNavLinkClick}
        >
          Services
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Team}
          onClick={handleNavLinkClick}
        >
          Team
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Contact}
          onClick={handleNavLinkClick}
        >
          Contact
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}

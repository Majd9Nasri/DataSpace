import { useContext } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import LanguageContext from "../components/LanguageContext";
import {
  NavbarDesktopLink,
  NavbarDesktopUnorderedList,
} from "./NavbarDesktop.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarDesktop() {
  const { language, setLanguage } = useContext(LanguageContext);
  const nextLanguage = getNextLanguage(language);

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
      <li>
        <NavbarDesktopLink
          href="javascript:void(0);"
          onClick={() => setLanguage(nextLanguage)}
        >
          {getCountryFlag(language)}
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}

import { useContext } from "react";

import { handleNavLinkClick } from "../../lib/clientUtility";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
import { Twemoji } from "../components/Twemoji";
import {
  NavbarDesktopLink,
  NavbarDesktopUnorderedList,
} from "./NavbarDesktop.style";
import { NavbarRouteLinks } from "./navbarRoutes";

export function NavbarDesktop() {
  const { dictionary, language, setLanguage } = useContext(LanguageContext);
  const { useDarkMode, setUseDarkMode } = useContext(DarkModeContext);
  const nextLanguage = getNextLanguage(language);

  return (
    <NavbarDesktopUnorderedList>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Home}
          onClick={handleNavLinkClick}
        >
          {dictionary.Navbar.Home}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.About}
          onClick={handleNavLinkClick}
        >
          {dictionary.Navbar.About}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Services}
          onClick={handleNavLinkClick}
        >
          {dictionary.Navbar.Services}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Team}
          onClick={handleNavLinkClick}
        >
          {dictionary.Navbar.Team}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href={NavbarRouteLinks.Contact}
          onClick={handleNavLinkClick}
        >
          {dictionary.Navbar.Contact}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href="javascript:void(0);"
          onClick={() => setLanguage(nextLanguage)}
        >
          <Twemoji emoji={getCountryFlag(language)} />
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
          href="javascript:void(0);"
          onClick={() => setUseDarkMode(!useDarkMode)}
        >
          <Twemoji emoji={useDarkMode ? "🌙" : "💡"} />
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}

import { useContext } from "react";
import { handleNavLinkClick } from "../../lib/clientUtility";
import { getCountryFlag, getNextLanguage } from "../../lib/serverUtility";
import DarkModeContext, {
  UseDarkModeState,
} from "../components/DarkModeContext";
import LanguageContext from "../components/LanguageContext";
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
          useFlagmojiFont
          onClick={() => setLanguage(nextLanguage)}
        >
          {getCountryFlag(language)}
        </NavbarDesktopLink>
      </li>
      <li>
        <NavbarDesktopLink
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
        </NavbarDesktopLink>
      </li>
    </NavbarDesktopUnorderedList>
  );
}

import { handleNavLinkClick } from "../../lib/clientUtility";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageHeading,
  StartPageWrapper,
} from "./StartPage.style";

export function StartPage() {
  return (
    <StartPageWrapper id={NavbarRoutes.Home}>
      <StartPageHeading>Data Space</StartPageHeading>
      <StartPageArrowLink
        href={NavbarRouteLinks.About}
        onClick={handleNavLinkClick}
      >
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

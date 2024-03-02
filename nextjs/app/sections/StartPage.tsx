import { handleNavLinkClick } from "../../lib/clientUtility";
import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageBackgroundImage,
  StartPageHeading,
  StartPageWrapper,
} from "./StartPage.style";

export function StartPage() {
  return (
    <StartPageWrapper id="start">
      <StartPageBackgroundImage src="/kam.webp" alt="Start page background" />
      <StartPageHeading>Data Space</StartPageHeading>
      <StartPageArrowLink href="#about" onClick={handleNavLinkClick}>
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

import { handleNavLinkClick } from "../../lib/clientUtility";
import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageHeading,
  StartPageWrapper,
} from "./StartPage.style";

export function StartPage() {
  return (
    <StartPageWrapper id="start">
      <StartPageHeading>Data Space</StartPageHeading>
      <StartPageArrowLink href="#about" onClick={handleNavLinkClick}>
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

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
      <StartPageArrowLink href="#about">
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

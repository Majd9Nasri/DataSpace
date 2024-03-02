import {
  StartPageArrow,
  StartPageArrowLink,
  StartPageBackgroundImage,
  StartPageHeading,
  StartPageWrapper,
} from "./StartPage.style";

export function StartPage() {
  return (
    <StartPageWrapper>
      <StartPageBackgroundImage
        src="/kam.webp"
        layout="fill"
        objectFit="cover"
        alt="Start page background"
      />
      <StartPageHeading>Data Space</StartPageHeading>
      <StartPageArrowLink href="#about">
        <StartPageArrow src="/arrow-down.svg" />
      </StartPageArrowLink>
    </StartPageWrapper>
  );
}

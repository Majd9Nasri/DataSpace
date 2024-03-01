import {
  HomepageArrow,
  HomepageArrowLink,
  HomepageBackgroundImage,
  HomepageHeading,
  HomepageWrapper,
} from "./Homepage.style";

export function Homepage() {
  return (
    <HomepageWrapper>
      <HomepageBackgroundImage
        src="/kam.webp"
        layout="fill"
        objectFit="cover"
        alt="Homepage background"
      />
      <HomepageHeading>Data Space</HomepageHeading>
      <HomepageArrowLink href="#about">
        <HomepageArrow src="/arrow-down.svg" />
      </HomepageArrowLink>
    </HomepageWrapper>
  );
}

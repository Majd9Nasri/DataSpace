import {
  HomepageArrow,
  HomepageArrowLink,
  HomepageHeading,
  HomepageWrapper,
} from "./Homepage.style";

export function Homepage() {
  return (
    <HomepageWrapper>
      <HomepageHeading>Data Space</HomepageHeading>
      <HomepageArrowLink href="#about">
        <HomepageArrow src="/arrow-down.svg" />
      </HomepageArrowLink>
    </HomepageWrapper>
  );
}

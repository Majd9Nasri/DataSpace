import { ContentSection, SectionTitle } from "../../ui/general.style";
import { NavbarRoutes } from "../header/navbarRoutes";

export function About() {
  return (
    <ContentSection id={NavbarRoutes.About}>
      <SectionTitle>About</SectionTitle>
      <h1>
        We are an interdisciplinary Team of Data Scientists with backgrounds in
        Economics, Software Engineering and Mechatronics
      </h1>
      <p>
        We are passionate to push the boundaries of what is possible with data
        and technology, and are committed to continue to innovate and create
        value based on our vast domain knowledge and expertise for our clients.
      </p>
    </ContentSection>
  );
}

import { ContentSection } from "../../ui/general.style";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <ContentSection
      id={NavbarRoutes.About}
      className="animate-slide-in-from-bottom-5rem-target-class-name"
    >
      <SectionTitle title="About" targetId={NavbarRouteLinks.About} />
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

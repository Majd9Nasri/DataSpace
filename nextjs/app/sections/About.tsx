import { useContext } from "react";
import { ContentSection } from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSection
      id={NavbarRoutes.About}
      className="animate-slide-in-from-bottom-5rem-target-class"
    >
      <SectionTitle title="About" targetId={NavbarRouteLinks.About} />
      {dictionary["hello world"]}
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

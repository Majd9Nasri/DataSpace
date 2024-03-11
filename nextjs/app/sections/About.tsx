import { useContext } from "react";
import { ContentSection, ContentSectionWrapper } from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.About}>
        <SectionTitle
          title={dictionary.Navbar.About}
          targetId={NavbarRouteLinks.About}
        />
        <h1>{dictionary.About.h1}</h1>
        <p>{dictionary.About.p}</p>
      </ContentSection>
    </ContentSectionWrapper>
  );
}

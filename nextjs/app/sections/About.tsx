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
      <SectionTitle
        title={dictionary.Navbar.About}
        targetId={NavbarRouteLinks.About}
      />
      <h1>{dictionary.About.h1}</h1>
      <p>{dictionary.About.p}</p>
    </ContentSection>
  );
}

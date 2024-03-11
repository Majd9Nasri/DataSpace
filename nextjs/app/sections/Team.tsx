import { useContext } from "react";
import { ContentSection, ResponsiveFlexGrid } from "../../ui/general.style";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import { SectionTitle } from "./SectionTitle";
import { TeamImage, TeamImageWrapper } from "./Team.style";

export function Team() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <ContentSection id={NavbarRoutes.Team}>
      <SectionTitle
        className="animate-slide-in-from-bottom-5rem-target-class"
        title={dictionary.Navbar.Team}
        targetId={NavbarRouteLinks.Team}
      />
      <h1 className="animate-slide-in-from-bottom-5rem-target-class">
        {dictionary.Team.h1}
      </h1>
      <ResponsiveFlexGrid columns={3}>
        <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <TeamImage src="/Ahmed.jpg" alt="Ahmed" />
          <h3>Ahmed Al-Ammari</h3>
          <p>M.Sc. in Data Science - B.Eng. in Mechatronics</p>
        </TeamImageWrapper>
        <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <TeamImage src="/Majd.jpg" alt="Majd" />
          <h3>Majd Nasri</h3>
          <p>M.Sc. in Data Science - B.Sc. in Business Information Systems</p>
        </TeamImageWrapper>
        <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <TeamImage src="/Roman.jpg" alt="Roman" />
          <h3>Roman Dietenmeier</h3>
          <p>
            M.Sc. in Data Science - B.Sc. in Computer Science Software
            Engineering
          </p>
        </TeamImageWrapper>
        <TeamImageWrapper className="animate-slide-in-from-bottom-5rem-target-class">
          <TeamImage src="/Daniel.jpeg" alt="Roman" />
          <h3>Daniel Pantel</h3>
          <p>M.Sc. in Data Science - B.Sc. in Business Information Systems</p>
        </TeamImageWrapper>
      </ResponsiveFlexGrid>
    </ContentSection>
  );
}

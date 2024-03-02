import {
  ContentSection,
  ResponsiveGrid,
  SectionTitle,
} from "../../ui/general.style";
import { TeamImage, TeamImageWrapper } from "./Team.style";

export function Team() {
  return (
    <ContentSection>
      <SectionTitle>Team</SectionTitle>
      <h1>We make your project happen.</h1>
      <ResponsiveGrid columns={3}>
        <TeamImageWrapper>
          <TeamImage src="/Ahmed.jpg" alt="Ahmed" />
          <h3>Ahmed Al-Ammari</h3>
          <p>M.Sc. in Data Science - B.Eng. in Mechatronics</p>
        </TeamImageWrapper>
        <TeamImageWrapper>
          <TeamImage src="/Majd.jpg" alt="Majd" />
          <h3>Majd Nasri</h3>
          <p>M.Sc. in Data Science - B.Sc. in Business Information Systems</p>
        </TeamImageWrapper>
        <TeamImageWrapper>
          <TeamImage src="/Roman.jpg" alt="Roman" />
          <h3>Roman Dietenmeier</h3>
          <p>
            M.Sc. in Data Science - B.Sc. in Computer Science Software
            Engineering
          </p>
        </TeamImageWrapper>
      </ResponsiveGrid>
    </ContentSection>
  );
}

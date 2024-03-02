import { ContentSection, SectionTitle } from "../../ui/general.style";
import { TeamImage, TeamImageWrapper, TeamImagesWrapper } from "./Team.style";

export function Team() {
  return (
    <ContentSection>
      <SectionTitle>Team</SectionTitle>
      <p>We make your project happen.</p>
      <TeamImagesWrapper>
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
      </TeamImagesWrapper>
    </ContentSection>
  );
}

import { ContentSectionWrapper } from "../ui/general.style";
import { FooterFooter, FooterParagraph } from "./Footer.style";

export function Footer() {
  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <FooterFooter>
        <FooterParagraph>
          <span>Copyright ©2024 All rights reserved</span>
          <a>Imprint</a>
        </FooterParagraph>
      </FooterFooter>
    </ContentSectionWrapper>
  );
}
